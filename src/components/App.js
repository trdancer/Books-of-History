import '../styles/App.css'
import React from 'react'
import {Provider} from 'react-redux'
import store from '../redux/store' 
import EventContainer from './EventContainer'

// Returns books about what has happened on a given day in history
// default date is today

//access this day in history api
//access open library api

//get events from this day in history

//use titles of wikipedia articles as search terms
//extract year response year as search term

//get books based on key words
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header id="banner">
          <h1>Historical Book Finder</h1>
        </header>
        <EventContainer/>
        <footer id='footer'>
          <p>
            Data for events in history provided by <a href='https://byabbe.se/on-this-day/' target='_blank' rel="noreferrer">byabbe.se</a> which in turn is scraped from <a href='https://wikipedia.org' target='_blank' rel="noreferrer">Wikipedia</a>.
          </p>
          <p>
            Data for books provided by <a href='https://openlibrary.org/developers' target='_blank' rel="noreferrer">Open Library</a>
          </p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
