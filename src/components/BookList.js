import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import * as BooksAPI from '../BooksAPI'

class BookList extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({books: books})
        })
    }

    render() {
        const { books } = this.state

        return(
            <div className="list-books">
                <p> {books.length} </p>
                <p> Teste </p>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Bookshelf books={books}/>
                </div>
                <div className="open-search">
                    <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default BookList
