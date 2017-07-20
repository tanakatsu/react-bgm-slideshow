import { combineReducers } from 'redux'
import pictures from './pictures'
import loading from './loading'
import login from './login'

const rootReducers = combineReducers({
  pictures,
  loading,
  login
})

export default rootReducers
