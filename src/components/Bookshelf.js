import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    render() {
        const { books, onChange } = this.props
        
        const filter = books => shelf => books.filter(b => b.shelf === shelf)
        const filterBy = filter(books)
        const shelves = [{
            name: 'Currently Reading',
            books : filterBy('currentlyReading')
        }, {
            name: 'Want To Read',
            books : filterBy('wantToRead')
        }, {
            name: 'Read',
            books : filterBy('read')
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
                                        <li key={index}><Book book={shelfBook} onChange={onChange}/></li>
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
