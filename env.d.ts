/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string
  readonly VITE_ENV: string

  readonly VITE_BASE_API_URL: string
  readonly VITE_HOST: string
  readonly VITE_COOKIE_DOMAIN: string
  readonly VITE_APP_VERSION: string
  readonly VITE_E2E_ENABLE: string

  readonly VITE_ERROR_TRACKING_PROVIDER: "none" | "custom" | "sentry"
  readonly VITE_SENTRY_DSN: string
  readonly VITE_CUSTOM_DSN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
