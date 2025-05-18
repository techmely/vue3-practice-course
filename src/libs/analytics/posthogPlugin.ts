import posthog from 'posthog-js';
import type { App } from 'vue';

export const posthogPlugin = {
  install(app: App) {
    app.config.globalProperties.$posthog = posthog.init(
      'phc_RSOxEprDiFERRVU8ELmTyYOY41EusTwSbSlWJ7oNSDM',
      {
        api_host: 'https://eu.i.posthog.com',
      }
    );
  },
};
