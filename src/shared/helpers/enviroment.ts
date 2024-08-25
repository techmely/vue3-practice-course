import * as z from "zod";

const envSchema = z.object({
  VITE_ENV: z.string(),
  VITE_BASE_API_URL: z.string(),
  VITE_HOST: z.string(),
  VITE_COOKIE_DOMAIN: z.string(),
  VITE_APP_VERSION: z.string(),
});

const envs = process.env;
const parsedEnv = envSchema.parse(envs);

export const appEnv = {
  ...parsedEnv,
  isDev: parsedEnv.VITE_ENV === "development",
};
