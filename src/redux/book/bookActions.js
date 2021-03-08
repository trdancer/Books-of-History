import axios from 'axios'
export const FETCH_BOOKS_START = 'FETCH_BOOKS_START'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'
const MAX_BOOKS_PER_QUERY = 12;
export const fetchBooksStartCreator = (index) => {
    return {
        type : FETCH_BOOKS_START,
        payload : index
    }
}
export const fetchBooksSuccessCreator = (books, index) => {
    return {
        type : FETCH_BOOKS_SUCCESS,
        payload : {
            event_index : index,
            books : books
        }
    }
}
export const fetchBooksFailureCreator = (error, index) => {
    return {
        type : FETCH_BOOKS_FAILURE,
        payload : {
            event_index : index,
            error : error
        }
    }
}
export const fetchBooks = (event_titles, index) => {
    return (dispatch) => {
        // start request
        dispatch(fetchBooksStartCreator(index))
        //make request
        const search_url = 'https://openlibrary.org/search.json?q='
        let requests = []
        event_titles.forEach((title) => {
            let query_string = title.replace(' ', '+')
            requests.push(axios.get(`${search_url}${query_string}`).then((response) => {
                let these_books = []
                let upper_bound = MAX_BOOKS_PER_QUERY / event_titles.length
                if (response.data.docs.length < MAX_BOOKS_PER_QUERY) {
                    upper_bound = response.data.docs.length
                }
                for (let i = 0; i < upper_bound; i++) {
                    let this_book = response.data.docs[i]
                    console.log('found a book: ', this_book)
                    // const book_data = {
                    //     title : this_book.title,
                    //     author: this_book.author_name,
                    //     publish_year : this_book.first_publish_year,
                    //     isbn : this_book.isbn[0]
                    // }
                    these_books.push(this_book)
                }
                return Promise.resolve(these_books) 
            })
            .catch((error) => {
                return Promise.reject(error)
            }))
        })
        Promise.all(requests).then((values) => {
            let all_books = []
            values.forEach((book_arr) => {
                book_arr.forEach((book) => all_books.push(book))
            })
            //on success dispatch success action
            dispatch(fetchBooksSuccessCreator(all_books, index))
        })
        //on failure dispatch error action
        .catch(error => {
            dispatch(fetchBooksFailureCreator(error, index))
        })
    }
}
