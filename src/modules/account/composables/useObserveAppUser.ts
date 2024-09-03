import { onAuthStateChanged } from 'firebase/auth'
import { appFirebaseAuth, getUserFromFirebaseUser } from '../services/firebase.service'

export function useObserveAppUser() {
  const { updateUser } = useUserStore()

  onAuthStateChanged(appFirebaseAuth, (user) => {
    if (user) {
      const appUser = getUserFromFirebaseUser(user)
      updateUser(appUser)
    } else {
      updateUser(undefined)
    }
  })
}
