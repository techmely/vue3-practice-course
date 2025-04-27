import type { SignUpRequest } from '@/modules/account/account.types'
import type { AppUser } from '@/modules/user/user.types'
import type { User } from 'firebase/auth'
import { firebaseApp } from '@/libs/firebase'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export const appFirebaseAuth = getAuth(firebaseApp)

export async function signUpEmailPassword(request: SignUpRequest): Promise<AppUser | undefined> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      appFirebaseAuth,
      request.email,
      request.password
    )
    const user = userCredential.user
    return getUserFromFirebaseUser(user)
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.error(errorCode, errorMessage)
  }
}

export async function signInEmailPassword(request: SignUpRequest): Promise<AppUser | undefined> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      appFirebaseAuth,
      request.email,
      request.password
    )
    const user = userCredential.user
    return getUserFromFirebaseUser(user)
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    console.error(errorCode, errorMessage)
  }
}

export function getUserFromFirebaseUser(user: User): AppUser {
  const email = user.email || ''
  const appUser: AppUser = {
    id: user.uid,
    email: user.email || '',
    displayName: user.displayName || email.split('@')?.[0],
    isEmailVerified: user.emailVerified
  }

  return appUser
}
