import { SIGN_IN, SIGN_OUT } from './../actions/auth'

export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return action.uid
    case SIGN_OUT:
      return {}
    default:
      return state
  }
}
