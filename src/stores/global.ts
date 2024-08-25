export const useGlobalStore = defineStore('globa-store', () => {
  const authModal = ref({
    isOpen: false
  })

  return {
    authModal
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
