import { appFirebaseAuth } from '@/libs/firebase/auth'
import { useMutation } from '@tanstack/vue-query'
import { signOut } from 'firebase/auth'

export function useSignOut() {
  const accountStore = useAccountStore()

  const mutation = useMutation({
    mutationFn: () => signOut(appFirebaseAuth),
    onSuccess() {
      accountStore.updateUser(undefined)
    }
  })

  return mutation
}
