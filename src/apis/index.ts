import axios from 'axios'
import { Signin } from '@/models/login'

export function signIn(payload: Signin) {
  return axios.post('/login', payload, { params: { a: 3 } })
}
