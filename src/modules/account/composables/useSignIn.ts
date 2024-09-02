import { signInEmailPassword } from '@/libs/firebase/auth'
import { useMutation } from '@tanstack/vue-query'
import type { SignInRequest } from '../account.types'

export function useSignIn() {
  const accountStore = useAccountStore()
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
