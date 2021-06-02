import { Card, Col } from 'react-bootstrap'
import React from 'react'


const SingleBook = (props) => (
  <Col>
  <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
        </Card.Body>
    </Card>
    </Col>
)

export default SingleBook