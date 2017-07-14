import { combineReducers } from 'redux'
import pictures from './pictures'
import loading from './loading'

const rootReducers = combineReducers({
  pictures,
  loading
})

export default rootReducers
