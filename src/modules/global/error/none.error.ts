import type { App } from 'vue'

export function defineBasicErrorHandler(app: App) {
  app.config.errorHandler = (err, vm, info) => {
    try {
      console.error('Error:', err, 'Info:', info)
    } catch (error) {
      console.error('Error in error handler:', error)
    }
  }

  window.onerror = (message, source, line, column, error) => {
    try {
      console.error('Error:', error)
    } catch (error) {
      console.error('Error in error handler:', error)
    }
  }

  window.onunhandledrejection = (event) => {
    try {
      console.error('Error:', event.reason)
    } catch (error) {
      console.error('Error in error handler:', error)
    }
  }
}
