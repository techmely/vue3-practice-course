import 'iconify-icon'
import './assets/index.css'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import { useObserveAppUser } from './modules/account/composables/useObserveAppUser'
import router from './router'
import { appEnv } from './shared/helpers/environment'
import { startMockWorker } from './libs/mockWorker/startApp'
import { createGlobalHandleError } from './modules/global/error'

const app = createApp(App)
createGlobalHandleError(app, router)

app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: appEnv.isDev
})
app.use(createPinia())
app.use(router)

/** Init firebase observe auth state change */
useObserveAppUser()

startMockWorker(app)

app.config.performance = true
