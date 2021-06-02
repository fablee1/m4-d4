import {Container, Row} from 'react-bootstrap'
import React from 'react'
import SingleBook from './SingleBook'

const BookList =(props) =>(
    <Container>
        <Row>
     {props.books.map(book => <SingleBook {...book} />)}
        </Row>
    </Container>
)
export default BookList