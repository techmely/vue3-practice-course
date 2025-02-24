import type { App } from "vue";

const sendErrorToCustomService = async (url: string, error: unknown) => {
  try {
    let errorMessage: string;
    let errorStack: string | undefined;
    if (error instanceof Error) {
      errorMessage = error.message;
      errorStack = error.stack;
    } else {
      errorMessage = String(error);
      errorStack = undefined;
    }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: errorMessage, stack: errorStack }),
    });
    if (!response.ok) {
      console.error('Error sending error to custom service:', response.status, response.statusText);
    }
  } catch (err) {
    console.error('Error sending error to custom service:', err);
  }
};

export const defineCustomErrorHandler = (app: App, config: any) => {
  const { url } = config;

  app.config.errorHandler = (err, vm, info) => {
    try {
      sendErrorToCustomService(url, err);
    } catch (error) {
      console.error('Error in error handler:', error);
    }
  };

  window.onerror = (message, source, line, column, error) => {
    try {
      sendErrorToCustomService(url, error);
    } catch (error) {
      console.error('Error in error handler:', error);
    }
  };

  window.onunhandledrejection = (event) => {
    try {
      sendErrorToCustomService(url, event.reason);
    } catch (error) {
      console.error('Error in error handler:', error);
    }
  };
}
