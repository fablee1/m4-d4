import {Container, Row, Col, Button} from 'react-bootstrap'
import React from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'

class BookList extends React.Component {

    state = {
        previousBooks: this.props.books,
        selectedId: null,
        filteredBooks: this.props.books,
        commentsOnRight: true
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

    toggleComments = (e) => {
        this.state.commentsOnRight ? e.target.innerText = 'Comments Right' : e.target.innerText = 'Card Comments'
        this.setState({...this.state, commentsOnRight: !this.state.commentsOnRight})
    }

    render() {

        return (<Container>
                    <Row className="justify-content-center">
                        <Col xs={12} className='d-flex justify-content-center my-4'>
                            <span className="mr-3">Search:</span><input className='w-100' type="text" ref={e => this.searchInput = e} onChange={(e) => this.filterBooks(e.target.value)} />
                            <Button className="ml-5 w-50" onClick={this.toggleComments}>Card Comments</Button>
                        </Col>
                    </Row>
                    {
                        this.state.commentsOnRight
                        ? (
                            <Row>
                                <Col xs={8} >
                                    <Row>
                                        {this.state.filteredBooks.map(book => <SingleBook {...book} id={this.state.selectedId} key={book.asin} cols={{xs: 6}} staySelected={true} changeSelected={this.changeSelected} />)}
                                    </Row>
                                </Col>
                                <Col xs={4}>
                                    <CommentArea asin={this.state.selectedId} />
                                </Col>
                            </Row>
                        ) : (
                            <Row>
                                {this.state.filteredBooks.map(book => <SingleBook {...book} id={this.state.selectedId} cols={{xs: 12, sm: 6, md: 4, lg: 3}} key={book.asin} changeSelected={this.changeSelected} />)}
                            </Row>
                        )
                    }
                </Container>)
    }
}

export default BookList