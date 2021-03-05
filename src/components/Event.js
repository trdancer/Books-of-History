import React from 'react'
import {fetchBooks} from '../redux/book/bookActions'
import {useDispatch, useSelector} from 'react-redux'
import Book from './Book'
import Loader from './Loader'
import '../styles/Event.css'

function Event({event}) {
    const dispatch = useDispatch()
    return (
        <div className='Event'>
            <h2 >Event:</h2><p className='event-title'>{event.description}</p>
            <h3 classname='event-year'>Year: {event.year}</h3>
            <button className='books-button' onClick={() => {dispatch(fetchBooks(event.article_titles, event.event_index))}}>Find Books</button>
            <div class='BookContainer'>
            {event.loading ? (<Loader />) :
                (event.error ? <h2>{event.error}</h2> :
                    event.books ? event.books.map((book) => (<Book
                    author={book.author_name ? book.author_name[0] : "No Author provided"} 
                    title={book.title}
                    isbn={book.isbn ? book.isbn[0] : null}
                    publish_year={book.first_publish_year ? book.first_publish_year : 'No Publishing Year provided'}/>)) : null
                    )}
            </div>
        </div>
    )
}

export default Event
