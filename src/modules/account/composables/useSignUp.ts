import { signUpEmailPassword } from '@/libs/firebase/auth'
import { useMutation } from '@tanstack/vue-query'
import type { SignUpRequest } from '../account.types'

export function useSignUp() {
  const accountStore = useAccountStore()
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
