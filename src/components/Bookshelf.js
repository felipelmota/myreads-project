import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    render() {
        const { books, onChange } = this.props

        let readingBooks = []
        let wishBooks = []
        let readBooks = []

        books.forEach(book => {
            switch(book.shelf) {
                case 'currentlyReading':
                    readingBooks.push(book)
                    break
                case 'wantToRead':
                    wishBooks.push(book)
                    break
                case 'read':
                    readBooks.push(book)
                    break
                default:
                    break
            }
        })

        const shelves = [
            {
                name: 'Currently Reading',
                books : readingBooks
            }, {
                name: 'Want To Read',
                books : wishBooks
            }, {
                name: 'Read',
                books : readBooks
            }
        ]
        
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
