export interface ErrorTrackingConfig {
  provider: 'sentry' | 'custom' | 'none'
  sentryOptions?: ErrorSentryOptions
  customOptions?: ErrorCustomOptions
}

export interface ErrorSentryOptions {
  dsn: string
}

export interface ErrorCustomOptions {
  dsn: string
}
