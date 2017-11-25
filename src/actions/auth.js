import { AuthService } from './../services/auth'

const service = new AuthService()

export const SIGN_IN = 'SIGN_IN'

export const signIn = (uid) => ({
  type: SIGN_IN,
  uid
})

export const startSignIn = () => {
  return () => {
    return service.signIn()
  }
}

export const SIGN_OUT = 'SIGN_OUT'

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const startSignOut = () => {
  return () => {
    return service.signOut()
  }
}
