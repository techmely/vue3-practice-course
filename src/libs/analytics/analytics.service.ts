import posthog from 'posthog-js';

export const analyticsService = {
  capture: (event: string, properties: Record<string, any>) => {
    posthog.capture(event, properties);
  },
}
