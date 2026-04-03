import * as React from "react";
import {
  DEFAULT_PUBLIC_VISIBILITY_CONFIG,
  FAILED_STUDIO_VISIBILITY_CONFIG,
  type SaveVisibilityConfigInput,
  type VisibilityConfigResponse,
  type VisibilityStatus,
  getVisibilityApiUrl,
  normalizeVisibilityConfig,
} from "@/lib/visibility";

type VisibilityContextValue = {
  apiUrl: string | null;
  config: VisibilityConfigResponse;
  effectiveAudience: VisibilityConfigResponse["effectiveAudience"];
  isStudioAudience: boolean;
  isConfigured: boolean;
  isLoading: boolean;
  isSaving: boolean;
  status: VisibilityStatus;
  refreshConfig: () => Promise<VisibilityConfigResponse>;
  saveConfig: (
    input: SaveVisibilityConfigInput,
  ) => Promise<VisibilityConfigResponse>;
};

const VisibilityContext = React.createContext<VisibilityContextValue | null>(null);

async function readVisibilityConfig(
  apiUrl: string,
): Promise<VisibilityConfigResponse> {
  const response = await fetch(`${apiUrl}/visibility-config`, {
    headers: {
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Visibility config request failed with ${response.status}`);
  }

  const payload = (await response.json()) as Partial<VisibilityConfigResponse>;
  return normalizeVisibilityConfig(payload, "studio");
}

export function VisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiUrl = React.useMemo(() => getVisibilityApiUrl(), []);
  const [config, setConfig] = React.useState<VisibilityConfigResponse>(() =>
    apiUrl
      ? FAILED_STUDIO_VISIBILITY_CONFIG
      : DEFAULT_PUBLIC_VISIBILITY_CONFIG,
  );
  const [status, setStatus] = React.useState<VisibilityStatus>(
    apiUrl ? "loading" : "not-configured",
  );

  const refreshConfig = React.useCallback(async () => {
    if (!apiUrl) {
      setConfig(DEFAULT_PUBLIC_VISIBILITY_CONFIG);
      setStatus("not-configured");
      return DEFAULT_PUBLIC_VISIBILITY_CONFIG;
    }

    setStatus("loading");

    try {
      const nextConfig = await readVisibilityConfig(apiUrl);
      setConfig(nextConfig);
      setStatus("ready");
      return nextConfig;
    } catch {
      setConfig(FAILED_STUDIO_VISIBILITY_CONFIG);
      setStatus("failed");
      return FAILED_STUDIO_VISIBILITY_CONFIG;
    }
  }, [apiUrl]);

  React.useEffect(() => {
    void refreshConfig();
  }, [refreshConfig]);

  const saveConfig = React.useCallback(
    async (input: SaveVisibilityConfigInput) => {
      if (!apiUrl) {
        throw new Error("Visibility API URL is not configured.");
      }

      const previousStatus = status;
      setStatus("saving");

      try {
        const response = await fetch(`${apiUrl}/visibility-config`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          cache: "no-store",
          body: JSON.stringify(input),
        });

        if (response.status === 401) {
          throw new Error("Invalid admin passcode.");
        }

        if (!response.ok) {
          throw new Error("Could not save visibility settings.");
        }

        const payload = (await response.json()) as Partial<VisibilityConfigResponse>;
        const nextConfig = normalizeVisibilityConfig(payload, "studio");
        setConfig(nextConfig);
        setStatus("ready");
        return nextConfig;
      } catch (error) {
        setStatus(previousStatus === "not-configured" ? "not-configured" : "ready");
        throw error instanceof Error
          ? error
          : new Error("Could not save visibility settings.");
      }
    },
    [apiUrl, status],
  );

  const value = React.useMemo<VisibilityContextValue>(
    () => ({
      apiUrl,
      config,
      effectiveAudience: config.effectiveAudience,
      isStudioAudience: config.effectiveAudience === "studio",
      isConfigured: apiUrl !== null,
      isLoading: status === "loading",
      isSaving: status === "saving",
      status,
      refreshConfig,
      saveConfig,
    }),
    [apiUrl, config, refreshConfig, saveConfig, status],
  );

  return (
    <VisibilityContext.Provider value={value}>
      {children}
    </VisibilityContext.Provider>
  );
}

export function useVisibility() {
  const context = React.useContext(VisibilityContext);

  if (!context) {
    throw new Error("useVisibility must be used within a VisibilityProvider.");
  }

  return context;
}
