type AudienceMode = "public" | "studio";

type StoredConfig = {
  globalStudioEnabled: boolean;
  pakistanStudioFilterEnabled: boolean;
  updatedAt: string | null;
};

type VisibilityResponse = StoredConfig & {
  countryCode: string | null;
  effectiveAudience: AudienceMode;
};

type UpdatePayload = {
  passcode: string;
  globalStudioEnabled: boolean;
  pakistanStudioFilterEnabled: boolean;
};

type RequestWithCf = Request & {
  cf?: {
    country?: string | null;
  };
};

type WorkerKvNamespace = {
  get(key: string, type: "text"): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
};

interface Env {
  VISIBILITY_CONFIG: WorkerKvNamespace;
  ADMIN_PASSCODE: string;
  ALLOWED_ORIGINS?: string;
}

const CONFIG_KEY = "site-visibility";
const DEFAULT_CONFIG: StoredConfig = {
  globalStudioEnabled: false,
  pakistanStudioFilterEnabled: false,
  updatedAt: null,
};
const DEFAULT_ALLOWED_ORIGINS = [
  "https://mueeznarejo.github.io",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
];

function normalizeStoredConfig(input: unknown): StoredConfig {
  if (!input || typeof input !== "object") {
    return DEFAULT_CONFIG;
  }

  const candidate = input as Partial<StoredConfig>;

  return {
    globalStudioEnabled: Boolean(candidate.globalStudioEnabled),
    pakistanStudioFilterEnabled: Boolean(candidate.pakistanStudioFilterEnabled),
    updatedAt:
      typeof candidate.updatedAt === "string" ? candidate.updatedAt : null,
  };
}

function getCountryCode(request: Request): string | null {
  const country = (request as RequestWithCf).cf?.country;
  if (typeof country !== "string" || country.trim().length !== 2) {
    return null;
  }

  return country.trim().toUpperCase();
}

function determineAudience(
  config: StoredConfig,
  countryCode: string | null,
): AudienceMode {
  if (config.globalStudioEnabled) {
    return "studio";
  }

  if (!config.pakistanStudioFilterEnabled) {
    return "public";
  }

  if (countryCode === "PK") {
    return "studio";
  }

  if (!countryCode) {
    return "studio";
  }

  return "public";
}

function buildResponsePayload(
  config: StoredConfig,
  countryCode: string | null,
): VisibilityResponse {
  return {
    ...config,
    countryCode,
    effectiveAudience: determineAudience(config, countryCode),
  };
}

function parseAllowedOrigins(env: Env): string[] {
  const configuredOrigins = env.ALLOWED_ORIGINS?.split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return configuredOrigins?.length ? configuredOrigins : DEFAULT_ALLOWED_ORIGINS;
}

function resolveCorsOrigin(request: Request, env: Env): string | null {
  const requestOrigin = request.headers.get("Origin");
  if (!requestOrigin) {
    return null;
  }

  return parseAllowedOrigins(env).includes(requestOrigin) ? requestOrigin : null;
}

function createCorsHeaders(origin: string | null): Headers {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Cache-Control", "no-store");

  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  }

  return headers;
}

function jsonResponse(
  body: unknown,
  init: ResponseInit,
  origin: string | null,
): Response {
  const headers = createCorsHeaders(origin);
  headers.set("Content-Type", "application/json; charset=utf-8");

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

function errorResponse(
  status: number,
  message: string,
  origin: string | null,
): Response {
  return jsonResponse(
    {
      error: message,
    },
    { status },
    origin,
  );
}

async function loadConfig(env: Env): Promise<StoredConfig> {
  const raw = await env.VISIBILITY_CONFIG.get(CONFIG_KEY, "text");
  if (!raw) {
    return DEFAULT_CONFIG;
  }

  try {
    return normalizeStoredConfig(JSON.parse(raw) as unknown);
  } catch {
    return DEFAULT_CONFIG;
  }
}

async function handleGet(request: Request, env: Env, origin: string | null) {
  const storedConfig = await loadConfig(env);
  const payload = buildResponsePayload(storedConfig, getCountryCode(request));
  return jsonResponse(payload, { status: 200 }, origin);
}

function isValidUpdatePayload(input: unknown): input is UpdatePayload {
  if (!input || typeof input !== "object") {
    return false;
  }

  const candidate = input as Partial<UpdatePayload>;

  return (
    typeof candidate.passcode === "string" &&
    typeof candidate.globalStudioEnabled === "boolean" &&
    typeof candidate.pakistanStudioFilterEnabled === "boolean"
  );
}

async function handlePost(request: Request, env: Env, origin: string | null) {
  if (!env.ADMIN_PASSCODE) {
    return errorResponse(500, "ADMIN_PASSCODE is not configured.", origin);
  }

  let payload: unknown;

  try {
    payload = (await request.json()) as unknown;
  } catch {
    return errorResponse(400, "Invalid JSON payload.", origin);
  }

  if (!isValidUpdatePayload(payload)) {
    return errorResponse(400, "Invalid visibility config payload.", origin);
  }

  if (payload.passcode !== env.ADMIN_PASSCODE) {
    return errorResponse(401, "Invalid admin passcode.", origin);
  }

  const nextConfig: StoredConfig = {
    globalStudioEnabled: payload.globalStudioEnabled,
    pakistanStudioFilterEnabled: payload.pakistanStudioFilterEnabled,
    updatedAt: new Date().toISOString(),
  };

  await env.VISIBILITY_CONFIG.put(CONFIG_KEY, JSON.stringify(nextConfig));

  return jsonResponse(
    buildResponsePayload(nextConfig, getCountryCode(request)),
    { status: 200 },
    origin,
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = resolveCorsOrigin(request, env);

    if (request.headers.get("Origin") && !origin) {
      return errorResponse(403, "Origin is not allowed.", null);
    }

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: createCorsHeaders(origin),
      });
    }

    if (url.pathname !== "/visibility-config") {
      return errorResponse(404, "Not found.", origin);
    }

    if (request.method === "GET") {
      return handleGet(request, env, origin);
    }

    if (request.method === "POST") {
      return handlePost(request, env, origin);
    }

    return errorResponse(405, "Method not allowed.", origin);
  },
};
