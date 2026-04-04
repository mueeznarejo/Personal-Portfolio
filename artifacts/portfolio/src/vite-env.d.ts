/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDFLARE_ANALYTICS_TOKEN?: string;
  readonly VITE_VISIBILITY_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
