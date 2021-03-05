import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {incrementActionCreator, decrementActionCreator} from '../redux/event/eventActions'

function Counter() {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrementActionCreator())}>Down</button>
            {count}
            <button onClick={() => dispatch(incrementActionCreator())}>Up</button>
        </div>
    )
}

export default Counter
