import {SET_DATE_MONTH, SET_DATE_DAY} from './dateActions'
const today = new Date()
const initialDateState = {
    day : today.getDay(),
    month : today.getMonth()+1
}
const dateReducer = (state = initialDateState, action) => {
    switch(action.type) {
        case SET_DATE_MONTH: 
            return {
                ...state,
                month : action.payload
            }
        case SET_DATE_DAY:
            return {
                ...state,
                day : action.payload
            }
        default:
            return state
    }
}
export default dateReducer