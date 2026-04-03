/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_VISIBILITY_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
