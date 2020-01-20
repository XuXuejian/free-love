import { State } from '@/redux/reducers'
import { ThunkDispatch as TDispatch } from 'redux-thunk'

export interface Action {
  type: string
  payload: any
}
export type GetState = () => State
export type ThunkDispatch = TDispatch<{}, undefined, Action>
