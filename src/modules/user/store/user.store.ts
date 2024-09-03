import type { AppUser } from '../user.types'

export const useUserStore = defineStore('user-store', () => {
  const user = ref<AppUser | undefined>()

  function updateUser(newUser: AppUser | undefined) {
    user.value = newUser
  }

  return {
    user,
    updateUser
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
