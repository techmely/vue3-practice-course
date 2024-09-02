import { appFirebaseAuth, getUserFromFirebaseUser } from '@/libs/firebase/auth'
import { onAuthStateChanged } from 'firebase/auth'

export function useObserveAppUser() {
  const { updateUser } = useAccountStore()

  onAuthStateChanged(appFirebaseAuth, (user) => {
    if (user) {
      const appUser = getUserFromFirebaseUser(user)
      updateUser(appUser)
    } else {
      updateUser(undefined)
    }
  })
}
