import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    render() {
        const { books, onChange } = this.props

        const readingBooks = books.filter(book => book.shelf === 'currentlyReading');
        const wishBooks = books.filter(book => book.shelf === 'wantToRead');
        const readBooks = books.filter(book => book.shelf === 'read');
        const shelves = [{
            name: 'Currently Reading',
            books : readingBooks
        }, {
            name: 'Want To Read',
            books : wishBooks
        }, {
            name: 'Read',
            books : readBooks
        }]
        
        return(
          <div>
            {books.length > 0 ? 
                (<div>
                    {shelves.map((shelf, index) => (
                        <div key={index} className="bookshelf">
                            <h2 className="bookshelf-title">{shelf.name}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {shelf.books.map((shelfBook, index) => (
                                        <Book key={index} book={shelfBook} onChange={onChange}/>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>) :
                (<div className="loading">Loading...</div>)
            }        
          </div>
        )
    }
}

Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Bookshelf
