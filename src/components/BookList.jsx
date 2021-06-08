import {Container, Row, Col, Button} from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'


const BookList = (props) => {

    const [selectedId, setSelectedId] = useState(null)
    const [filteredBooks, setFilteredBooks] = useState(props.books)
    const [commentsOnRight, setCommentsOnRight] = useState(true)

    const searchInput = useRef()

    useEffect(() => {
        filterBooks(searchInput.current.value)
    }, [props.books])

    const filterBooks = (query) => {
        const newArray = props.books.filter(book => query === '' ? true : book.title.toLowerCase().includes(query.toLowerCase()))
        setFilteredBooks(newArray)
    }

    const changeSelected = (id) => {
        setSelectedId(id)
    }

    const toggleComments = (e) => {
        commentsOnRight ? e.target.innerText = 'Comments Right' : e.target.innerText = 'Card Comments'
        setCommentsOnRight(!commentsOnRight)
    }

    return (<Container>
        <Row className="justify-content-center">
            <Col xs={12} className='d-flex justify-content-center my-4'>
                <span className="mr-3">Search:</span><input className='w-100' type="text" ref={searchInput} onChange={(e) => filterBooks(e.target.value)} />
                <Button className="ml-5 w-50" onClick={toggleComments}>Card Comments</Button>
            </Col>
        </Row>
        {
            commentsOnRight
            ? (
                <Row>
                    <Col xs={8} >
                        <Row>
                            {filteredBooks.map(book => <SingleBook {...book} id={selectedId} key={book.asin} cols={{xs: 6}} staySelected={true} changeSelected={changeSelected} />)}
                        </Row>
                    </Col>
                    <Col xs={4}>
                        <CommentArea asin={selectedId} />
                    </Col>
                </Row>
            ) : (
                <Row>
                    {filteredBooks.map(book => <SingleBook {...book} id={selectedId} cols={{xs: 12, sm: 6, md: 4, lg: 3}} key={book.asin} changeSelected={changeSelected} />)}
                </Row>
            )
        }
    </Container>)
}

export default BookList