import React from 'react'
// import * as BooksAPI from './BooksAPI'

import BookList from './components/BookList'
import BookSearch from './components/BookSearch'

import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <BookSearch />
        ) : (
          <BookList />
        )}
      </div>
    )
  }
}

export default BooksApp
