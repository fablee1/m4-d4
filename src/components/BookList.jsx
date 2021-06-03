import {Container, Row, Col} from 'react-bootstrap'
import React from 'react'
import SingleBook from './SingleBook'

class BookList extends React.Component {

    state = {
        previousBooks: this.props.books,
        selectedId: null,
        filteredBooks: this.props.books
    }

    componentDidUpdate = async () => {
        if(this.state.previousBooks[0].asin !== this.props.books[0].asin) {
            this.setState({...this.state, previousBooks: this.props.books}, () => this.filterBooks(this.searchInput.value))
        }
    }

    filterBooks = (query) => {
        const newArray = this.props.books.filter(book => query === '' ? true : book.title.toLowerCase().includes(query.toLowerCase()))
        this.setState({...this.state, filteredBooks: newArray})
    }

    changeSelected = (id) => {
        this.setState({...this.state, selectedId: id})
    }

    render() {
        return (<Container>
                    <Row className="justify-content-center">
                        <Col xs={12} sm={6} className='d-flex justify-content-center my-4'>
                            <span className="mr-3">Search:</span><input className='w-100' type="text" ref={e => this.searchInput = e} onChange={(e) => this.filterBooks(e.target.value)} />
                        </Col>
                    </Row>
                    <Row>
                        {this.state.filteredBooks.map(book => <SingleBook {...book} id={this.state.selectedId} key={book.asin} changeSelected={this.changeSelected} />)}
                    </Row>
                </Container>)
    }
}

export default BookList