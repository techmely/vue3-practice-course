import { createRouter, createWebHistory } from 'vue-router/auto'
import { handleHotUpdate, routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const { user } = useUserStore()
//   if (!user) {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

if (import.meta.hot) {
  handleHotUpdate(router)
}

export default router
