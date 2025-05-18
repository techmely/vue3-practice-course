import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'
import { startMockWorker } from './libs/mockWorker/startApp'

import { useObserveAppUser } from './modules/account/composables/useObserveAppUser'
import { createGlobalHandleError } from './modules/global/error'
import router from './router'
import { appEnv } from './shared/helpers/environment'
import 'iconify-icon'
import './assets/index.css'
import { posthogPlugin } from './libs/analytics'
import { initGlobalFunction } from './modules/global/global.function'

const app = createApp(App)
app.use(posthogPlugin)


createGlobalHandleError(app, router)

app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: appEnv.isDev
})
app.use(createPinia())
app.use(router)

/** Init firebase observe auth state change */
useObserveAppUser()
initGlobalFunction()

startMockWorker(app)

app.config.performance = true
