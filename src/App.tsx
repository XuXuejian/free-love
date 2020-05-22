import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

import Counter from '@/components/business/Counter'
import Home from '@/components/business/Home'
import store from '@/redux/store'
import Login from './pages/Login'

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div>hello world!</div>
      <Counter />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  </Provider>
)
export default hot(App)
