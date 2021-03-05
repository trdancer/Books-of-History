import React from 'react'
import '../styles/Book.css'

function Book({author, title, publish_year, isbn}) {
    return (
        <div className='Book'>
            <h2>{title}</h2>
            <img className='cover-image' src={`http://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`} alt='No cover'/>
            <h3>Author: {author}</h3>
            <h3>Year Published: {publish_year}</h3>
            { isbn ? (<a href={`https://openlibrary.org/isbn/${isbn}`} target='_blank' rel="noreferrer" >Learn more</a>) : <p>No Isbn given</p>}
        </div>
    )
}

export default Book