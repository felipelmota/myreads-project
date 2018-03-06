import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../BooksAPI'

import { Link } from 'react-router-dom';

class BookList extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books: books})
        })
    }

    
    onShelfChange = (book, shelf) => {
        
        const id = book.id
        const currentBooks = [...this.state.books]
        const indexToUpdate = currentBooks.findIndex(book => book.id === id)
        const newBookToUpdate = Object.assign({}, currentBooks[indexToUpdate], {
            shelf: shelf
        });

        this.setState({
            books: [...currentBooks.slice(0, indexToUpdate), newBookToUpdate, 
            ...currentBooks.slice(indexToUpdate + 1)]
        })

        BooksAPI.update(book, shelf)
    }
    onChange = (book, shelf) => {
        const shelfBooks = [...this.state.books]
        const idxUpdate = shelfBooks.findIndex(_book => _book.id === book.id)
        const newBook = Object.assign({}, shelfBooks[idxUpdate], {shelf: shelf})

        this.setState({
            books: [...shelfBooks.slice(0, idxUpdate), newBook, ...shelfBooks.slice(idxUpdate + 1)]
        })

        BooksAPI.update(book, shelf)
    }

    render() {
        const { books } = this.state

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Wish Books</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf books={books} onChange={this.onChange}/>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default BookList
