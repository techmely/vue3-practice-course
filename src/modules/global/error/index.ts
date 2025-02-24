import type { App } from "vue";
import { defineSentryErrorHandler } from "./sentry.error";
import type { Router } from "vue-router";
import { defineCustomErrorHandler } from "./custom.error";
import { defineBasicErrorHandler } from "./none.error";
import { appEnv } from "@/shared/helpers/environment";
import type { ErrorTrackingConfig } from "./error.types";

const errorTrackingConfig: ErrorTrackingConfig = {
  provider: appEnv.VITE_ERROR_TRACKING_PROVIDER,
  sentryOptions: {
    dsn: appEnv.VITE_SENTRY_DSN
  },
  customOptions: {
    dsn: appEnv.VITE_CUSTOM_DSN
  }
}

export function createGlobalHandleError(app: App, router: Router) {
  switch (errorTrackingConfig.provider) {
    case 'sentry':
      if (!errorTrackingConfig.sentryOptions) throw new Error('Sentry options are required');
      defineSentryErrorHandler(app, router, errorTrackingConfig.sentryOptions);
      break;
    case 'custom':
      if (!errorTrackingConfig.customOptions) throw new Error('Custom options are required');
      defineCustomErrorHandler(app, errorTrackingConfig.customOptions);
      break;
    case 'none':
      defineBasicErrorHandler(app);
      break;
    default:
      throw new Error(`Invalid error tracking provider: ${errorTrackingConfig.provider}`);
  }
}

