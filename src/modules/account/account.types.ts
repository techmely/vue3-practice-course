export type AppUser = {
  id: string
  email: string
  displayName?: string
  isEmailVerified: boolean
}

export type SignUpRequest = {
  email: string
  password: string
}

export type SignInRequest = SignUpRequest
