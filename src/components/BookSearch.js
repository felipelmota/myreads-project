import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class BookSearch extends Component {

  state = {
    books: [],
    currentBooks: []
  }

  componentDidMount() {
    //Fetching all books on my shelf.
    BooksAPI.getAll().then( books => {
      const booksId = books.map(book => ({id: book.id, shelf: book.shelf}))
      this.setState({ currentBooks: booksId})
    })
  }

  onSearch = (ev) => {
    const value = ev.target.value
    const { currentBooks } = this.state

    if (value) {
      BooksAPI.search(value).then( books => {

        books = books.map(book => {
          currentBooks
            .filter(b => b.id === book.id)
            .map(b => book.shelf = b.shelf);
        
          return book;
        });

        this.setState({ books: !books ? [] : books })        
      }).catch((error) => {
        this.setState({ books: [] })
      })
    } else {
      this.setState({ books: [] })
    }
  }

  onChange = (book, shelf) => {
    const updatedList = []
    BooksAPI.update(book, shelf).then(books => {
      Object.keys(books).forEach(shelf => {
        return books[shelf].map(bookId => ({ id: bookId, shelf: shelf}))
        .forEach(book => {
          updatedList.push(book)
        })
      })
      return updatedList
    }).then(updatedList => {
      this.setState({ currentBooks: updatedList })
    })
  }
 
  render() {
    const { books } = this.state

    const searchBooks = books.map((book, idx) => {
      return (<li key={idx}><Book onChange={this.onChange} book={book} /></li>)
    })

    return(
        <div className="search-books">
        <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" onChange={this.onSearch} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch
