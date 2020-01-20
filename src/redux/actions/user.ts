import { USER_SIGN_IN, USER_SIGN_UP } from '@/redux/actionTypes/user'
import { Signin, Signup } from '@/models/login'
import { signIn } from '@/apis'
import { Dispatch } from 'redux'
import { GetState } from '@/models/redux'

export const signin = (payload: Signin) => (dispatch: Dispatch, getState: GetState) => {
  return signIn(payload).then(res => {
    console.log(res)
    dispatch({ payload, type: USER_SIGN_IN })
  })
}
export const signup = (payload: Signup) => ({ payload, type: USER_SIGN_UP })
