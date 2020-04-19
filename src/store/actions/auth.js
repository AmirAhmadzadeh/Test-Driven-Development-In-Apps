
import { SIGN_IN } from './actions';


export function signIn(payload) {
  return {
    type: SIGN_IN,
    payload
  }
}


