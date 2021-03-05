import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchEvents} from '../redux/event/eventActions'
import {setDateDayCreator, setDateMonthCreator} from '../redux/date/dateActions'
import {numberToMonth, numberDaysinMonth} from '../utilities/date_utils'
import Event from './Event'
import Loader from './Loader'
import '../styles/EventContainer.css'
function EventContainer() {
    const date = useSelector(state => state.date) 
    const eventState = useSelector(state => state.events)
    console.log('date state is ', date)
    const dispatch = useDispatch()
    const dayChange = (event) => {
        dispatch(setDateDayCreator(event.target.value))
    }
    const monthChange = (event) => {
        dispatch(setDateMonthCreator(event.target.value))
    }
    return (
        <div className='EventContainer'>
            <div className="date-container">
                <div className="picker">

                    <label htmlFor='month-input'>Month : </label>
                    <div className='month-container'>
                        <input  id="month-input" type="number" value={date.month} min={1} max={12} onChange={monthChange}/>
                        <span id='month-string'>{numberToMonth(date.month)}</span>
                    </div>
                </div>
                <div className="picker">
                    <label htmlFor='day-input'>Day:</label>
                    <input id="day-input"  type="number" value={date.day} min={1} max={numberDaysinMonth(date.month)} onChange={dayChange}/>
                </div>
            </div>
            <div className="button-container">
                <button id='get-events-button' onClick= {() => {dispatch(fetchEvents(date))}}>Get Events</button>
            </div>
            {eventState.loading ? <Loader /> : eventState.error ? <h3>{eventState.error}</h3> : 
                eventState.events.map(event => (<Event event={event}/>))}
        </div>
    )
}

export default EventContainer
