import {FETCH_EVENTS_START, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE} from './eventActions'
import {FETCH_BOOKS_START, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from '../book/bookActions'
export const initialEventState = {
    eventsLoading : false,
    events : [],
    error : ''
}
const eventReducer = (state = initialEventState, action) => {
    switch(action.type) {
        case FETCH_EVENTS_START:
            return {
                ...state,
                eventsLoading : true,
                error : ''
            }
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                eventsLoading : false,
                events : action.payload,
                error : ''
            }
        case FETCH_EVENTS_FAILURE:
            return {
                ...state,
                eventsLoading : false,
                events : [],
                error : action.payload
            }
        case FETCH_BOOKS_START :
            console.log(action.payload)
            let new_events_1 = [...state.events]
            new_events_1[action.payload].loading = true
            new_events_1[action.payload].error = ''
            return {
                ...state,
                events : new_events_1
            }
        case FETCH_BOOKS_SUCCESS:
            let new_events_2 = [...state.events]
            new_events_2[action.payload.event_index].loading = false
            new_events_2[action.payload.event_index].error = ''
            new_events_2[action.payload.event_index].books = action.payload.books
            return {
                ...state,
                events : new_events_2
            }
        case FETCH_BOOKS_FAILURE :
            let new_events_3 = [...state.events]
            new_events_3[action.payload.event_index].loading = false
            new_events_3[action.payload.event_index].error = action.payload.error
            return {
                ...state,
                events : new_events_3
            }
        default :
            return state
    }
}
export default eventReducer