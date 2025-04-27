import type { SignUpRequest } from '../account.types'
import { useMutation } from '@tanstack/vue-query'
import { signUpEmailPassword } from '../services/firebase.service'

export function useSignUp() {
  const userStore = useUserStore()
  const globalStore = useGlobalStore()

  const mutation = useMutation({
    mutationFn: (request: SignUpRequest) => signUpEmailPassword(request),
    onSuccess(data) {
      userStore.updateUser(data)
      globalStore.toggleAuthModal(false)
    }
  })

  return mutation
}
