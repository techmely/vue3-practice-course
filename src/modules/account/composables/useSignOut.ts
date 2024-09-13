import { useMutation } from '@tanstack/vue-query'
import { signOut } from 'firebase/auth'
import { appFirebaseAuth } from '../services/firebase.service'

export function useSignOut() {
  const userStore = useUserStore()

  const mutation = useMutation({
    mutationFn: () => signOut(appFirebaseAuth),
    onSuccess() {
      userStore.updateUser(undefined)
    }
  })

  return mutation
}
