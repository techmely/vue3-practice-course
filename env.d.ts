/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

interface ImportMetaEnv {
  readonly VITE_NODE_ENV: string
  readonly VITE_ENV: string

  readonly VITE_BASE_API_URL : string
  readonly VITE_HOST: string
  readonly VITE_COOKIE_DOMAIN: string
  readonly VITE_APP_VERSION: string
  readonly VITE_E2E_ENABLE: string

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}