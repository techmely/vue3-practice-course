import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  type User
} from 'firebase/auth'
import { firebaseApp } from './config'
import type { AppUser, SignUpRequest } from '@/modules/account/account.types'

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
