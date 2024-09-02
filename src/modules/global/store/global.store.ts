export const useGlobalStore = defineStore('global-store', () => {
  const isOpenAuthModal = ref(false)

  function toggleAuthModal(val?: boolean) {
    isOpenAuthModal.value = val ?? !isOpenAuthModal.value
  }
  return {
    isOpenAuthModal,
    toggleAuthModal,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGlobalStore, import.meta.hot))
}
