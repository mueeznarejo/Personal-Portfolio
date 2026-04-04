const CLOUDFLARE_ANALYTICS_SCRIPT_ID = "cloudflare-web-analytics";
const CLOUDFLARE_ANALYTICS_SRC =
  "https://static.cloudflareinsights.com/beacon.min.js";

function getCloudflareAnalyticsToken(): string | null {
  const value = import.meta.env.VITE_CLOUDFLARE_ANALYTICS_TOKEN?.trim();
  return value ? value : null;
}

export function installCloudflareAnalytics(): void {
  if (typeof document === "undefined") {
    return;
  }

  const token = getCloudflareAnalyticsToken();
  if (!token) {
    return;
  }

  const existingScript = document.getElementById(
    CLOUDFLARE_ANALYTICS_SCRIPT_ID,
  );
  if (existingScript) {
    return;
  }

  const script = document.createElement("script");
  script.id = CLOUDFLARE_ANALYTICS_SCRIPT_ID;
  script.defer = true;
  script.src = CLOUDFLARE_ANALYTICS_SRC;
  script.setAttribute(
    "data-cf-beacon",
    JSON.stringify({
      token,
    }),
  );

  document.head.append(script);
}
