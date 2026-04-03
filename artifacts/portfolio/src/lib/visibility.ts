export type AudienceMode = "public" | "studio";
export type AudienceVisibility = "all" | "public-only";
export type VisibilityStatus =
  | "not-configured"
  | "loading"
  | "ready"
  | "failed"
  | "saving";

export type AudienceText = {
  publicText: string;
  studioText: string;
};

export type VisibilityConfigResponse = {
  globalStudioEnabled: boolean;
  pakistanStudioFilterEnabled: boolean;
  countryCode: string | null;
  effectiveAudience: AudienceMode;
  updatedAt: string | null;
};

export type SaveVisibilityConfigInput = {
  passcode: string;
  globalStudioEnabled: boolean;
  pakistanStudioFilterEnabled: boolean;
};

export const DEFAULT_PUBLIC_VISIBILITY_CONFIG: VisibilityConfigResponse = {
  globalStudioEnabled: false,
  pakistanStudioFilterEnabled: false,
  countryCode: null,
  effectiveAudience: "public",
  updatedAt: null,
};

export const FAILED_STUDIO_VISIBILITY_CONFIG: VisibilityConfigResponse = {
  ...DEFAULT_PUBLIC_VISIBILITY_CONFIG,
  effectiveAudience: "studio",
};

export function getVisibilityApiUrl(): string | null {
  const value = import.meta.env.VITE_VISIBILITY_API_URL?.trim();
  return value ? value.replace(/\/+$/, "") : null;
}

export function normalizeVisibilityConfig(
  input: Partial<VisibilityConfigResponse> | null | undefined,
  fallbackAudience: AudienceMode,
): VisibilityConfigResponse {
  const countryCode =
    typeof input?.countryCode === "string" && input.countryCode.trim()
      ? input.countryCode.trim().toUpperCase()
      : null;

  const effectiveAudience =
    input?.effectiveAudience === "public" || input?.effectiveAudience === "studio"
      ? input.effectiveAudience
      : fallbackAudience;

  return {
    globalStudioEnabled: Boolean(input?.globalStudioEnabled),
    pakistanStudioFilterEnabled: Boolean(input?.pakistanStudioFilterEnabled),
    countryCode,
    effectiveAudience,
    updatedAt: typeof input?.updatedAt === "string" ? input.updatedAt : null,
  };
}

export function isAudienceVisible(
  visibility: AudienceVisibility = "all",
  audience: AudienceMode,
): boolean {
  return visibility === "all" || audience === "public";
}

export function pickAudienceText(
  value: string | AudienceText,
  audience: AudienceMode,
): string {
  if (typeof value === "string") {
    return value;
  }

  return audience === "studio" ? value.studioText : value.publicText;
}

export function formatVisibilityTimestamp(value: string | null): string {
  if (!value) {
    return "Never";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
