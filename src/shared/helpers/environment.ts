import * as z from 'zod'

const envSchema = z.object({
  VITE_ENV: z.string(),
  VITE_BASE_API_URL: z.string().url(),
  VITE_HOST: z.string(),
  VITE_COOKIE_DOMAIN: z.string(),
  VITE_APP_VERSION: z.string(),
  VITE_MOCK_ENABLE: z.string(),
  VITE_E2E_ENABLE: z.string(),

  VITE_ERROR_TRACKING_PROVIDER: z.enum(['sentry', 'custom', 'none']),
  VITE_CUSTOM_DSN: z.string(),
  VITE_SENTRY_DSN: z.string(),
})

const envs = process.env
const parsedEnv = envSchema.parse(envs)

export const appEnv = {
  ...parsedEnv,
  isDev: parsedEnv.VITE_ENV === 'development',
  isMock: parsedEnv.VITE_MOCK_ENABLE === '1'
}
