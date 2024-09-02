import type { AppUser } from '../account.types'

export const useAccountStore = defineStore('account-store', () => {
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
  import.meta.hot.accept(acceptHMRUpdate(useAccountStore, import.meta.hot))
}
