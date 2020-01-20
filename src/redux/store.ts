import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from './reducers'

const composeEnhancers = composeWithDevTools({})
export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
