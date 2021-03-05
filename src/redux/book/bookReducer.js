import {FETCH_BOOKS_START, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE} from './bookActions'

const initialBookState = {
    loading : false,
    books : {},
    error : ''
}
const bookReducer = (state = initialBookState, action) => {
    switch(action.type) {
        case FETCH_BOOKS_START:
            return {
                ...state,
                loading : true,
                error : ''
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading : false,
                books : {
                    ...state.books,
                    [action.payload.event_name] : [...state.books.event_name, action.payload.book]
                } 
            }
        case FETCH_BOOKS_FAILURE:
            return {
                ...state,
                loading : false,
                books : [],
                error : action.payload
            }
        default:
            return state
    }
}
export default bookReducer