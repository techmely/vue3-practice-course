import { useMutation } from '@tanstack/vue-query'
import { signOut } from 'firebase/auth'
import { appFirebaseAuth } from '../services/firebase.service'

export function useSignOut() {
  const accountStore = useUserStore()

  const mutation = useMutation({
    mutationFn: () => signOut(appFirebaseAuth),
    onSuccess() {
      accountStore.updateUser(undefined)
    }
  })

  return mutation
}
