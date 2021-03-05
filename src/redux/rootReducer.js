import {combineReducers} from 'redux'
import eventReducer from './event/eventReducer'
import dateReducer from './date/dateReducer'

const rootReducer = combineReducers({
    date : dateReducer,
    events : eventReducer,
})
export default rootReducer