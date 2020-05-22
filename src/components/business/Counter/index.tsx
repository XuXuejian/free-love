import React from 'react'
import { connect } from 'react-redux'

import { State } from '@/redux/reducers'

import { Number } from './styled'
import { signin } from '@/redux/actions/user'
import { Signin } from '@/models/login'
import { ThunkDispatch } from '@/models/redux'

const mapState = (state: State) => ({
  phone: state.user.phone,
})
const mapDispatch = (dispatch: ThunkDispatch) => ({
  signIn: (args: Signin) => dispatch(signin(args)),
})
interface Props {
  phone: string
  signIn: (args: Signin) => Promise<void>
}
const Counter: React.FC<Props> = props => {
  const login = () => {
    props.signIn({ password: '', username: '' })
  }
  return (
    <>
      <Number>{props.phone}</Number>
      <button onClick={login}>登录</button>
    </>
  )
}

export default connect(mapState, mapDispatch)(Counter)
