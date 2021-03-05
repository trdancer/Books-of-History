import axios from 'axios'
export const FETCH_EVENTS_START = 'FETCH_EVENTS_START'
export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS'
export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE'

export const fetchEventsStartCreator = (info) => {
    return {
        type : FETCH_EVENTS_START,
        payload : info
    }
}
export const fetchEventsSuccessCreator = (events) => {
    return {
        type : FETCH_EVENTS_SUCCESS,
        payload : events
    }
}
export const fetchEventsFailureCreator = (error) => {
    return {
        type : FETCH_EVENTS_FAILURE,
        payload : error
    }
}
export const fetchEvents = (date) => {
    return (dispatch) => {
        // start request
        dispatch(fetchEventsStartCreator())
        //make request
        const url = `https://byabbe.se/on-this-day/${date.month}/${date.day}/events.json`
        const options = {
            headers : {
                'Content-Type' : 'application/json',
            }
        }
    
        // console.log(url)
        axios.get(url).then((response) => {
            const events = response.data.events.map((event, index) => ({
                description : event.description,
                article_titles : event.wikipedia.map(entry => entry.title),
                year : event.year,
                event_index : index
            }))
            console.log(response.data)
            dispatch(fetchEventsSuccessCreator(events))
        }).catch((error) => {
            dispatch(fetchEventsFailureCreator(error.message))
        })
        //on success dispatch success action
        //on failure dispatch error action
    }
}