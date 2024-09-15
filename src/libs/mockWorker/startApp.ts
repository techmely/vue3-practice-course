import { appEnv } from '@/shared/helpers/environment'
import type { App } from 'vue'

export async function startMockWorker(app: App) {
  if (appEnv.isDev && appEnv.isMock) {
    const { mockWorker } = await import('./index')
    await mockWorker.start({
      onUnhandledRequest: 'bypass',
    })
    app.mount('#app')
  } else {
    app.mount('#app')
  }
}