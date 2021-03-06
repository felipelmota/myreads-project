import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Book extends PureComponent {

    render() {
        const { book, onChange } = this.props

        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 193, 
                        backgroundImage: `url(
                            ${book.imageLinks ? book.imageLinks.thumbnail : "http://i.imgur.com/sJ3CT4V.gif"})`
                        }}>
                </div>
                <div className="book-shelf-changer">
                    <select
                        onChange={e => onChange(book, e.target.value)}
                        value={book.shelf ? book.shelf : 'none'}>
                        <option value="" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                <div className="book-title">{book.title ? book.title : null}</div>
                <div className="book-authors">{book.authors ? book.authors.join(',') : null}</div>
            </div>
        )
    }
}

Book.propType = {
    book: PropTypes.object.isRequired,
    onChange: PropTypes.func
}

export default Book
