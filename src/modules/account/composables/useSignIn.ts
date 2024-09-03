import { useMutation } from '@tanstack/vue-query'
import type { SignInRequest } from '../account.types'
import { signInEmailPassword } from '../services/firebase.service'

export function useSignIn() {
  const accountStore = useUserStore()
  const globalStore = useGlobalStore()

  const mutation = useMutation({
    mutationFn: (request: SignInRequest) => signInEmailPassword(request),
    onSuccess(data) {
      accountStore.updateUser(data)
      globalStore.toggleAuthModal(false)
    }
  })

  return mutation
}
