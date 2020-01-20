import { USER_SIGN_IN, USER_SIGN_UP } from '@/redux/actionTypes/user'
import { AnyAction } from 'redux'

export interface State {
  login: boolean
  username: string
  email: string
  phone: string
}
const initialState = {
  login: false,
  username: '',
  email: '',
  phone: '15921542769',
}

export default function userReducer(state: State = initialState, action: AnyAction) {
  switch (action.type) {
    case USER_SIGN_IN:
      return {
        ...state,
        login: action.payload,
      }
    case USER_SIGN_UP:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
