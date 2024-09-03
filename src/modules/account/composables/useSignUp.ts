import { useMutation } from '@tanstack/vue-query'
import type { SignUpRequest } from '../account.types'
import { signUpEmailPassword } from '../services/firebase.service'

export function useSignUp() {
  const accountStore = useUserStore()
  const globalStore = useGlobalStore()

  const mutation = useMutation({
    mutationFn: (request: SignUpRequest) => signUpEmailPassword(request),
    onSuccess(data) {
      accountStore.updateUser(data)
      globalStore.toggleAuthModal(false)
    }
  })

  return mutation
}
