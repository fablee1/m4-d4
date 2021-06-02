import {Container, Row} from 'react-bootstrap'
import React from 'react'
import SingleBook from './SingleBook'

class BookList extends React.Component {

    state = {
        filteredBooks: this.props.books
    }

    filterBooks = (query) => {
        const newArray = this.props.books.filter(book => this.state.query === '' ? true : book.title.toLowerCase().includes(query.toLowerCase()))
        this.setState({ filteredBooks: newArray})
    }

    render() {
        return <Container>
                    <Row>
                        Search: <input type="text" onChange={(e) => this.filterBooks(e.target.value)} />
                    </Row>
                    <Row>
                        {this.state.filteredBooks.map(book => <SingleBook {...book} />)}
                    </Row>
                </Container>
    }
}

export default BookList