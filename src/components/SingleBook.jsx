import { Card, Col } from 'react-bootstrap'
import React from 'react'
import MyBadge from './MyBadge'


const SingleBook = (props) => (
    <Col xs={12} sm={6} md={4} lg={3}>
    <Card onClick={()=> props.changeSelected(props.asin)} className={props.id === props.asin ? 'card-shadow' : null}>
        <div className="imgDiv">
            <Card.Img variant="top" src={props.img} /> 
            {props.id === props.asin ? <MyBadge text={props.category} variant='danger'/> : null}
        </div>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
        </Card.Body>
    </Card>
    </Col>
)

export default SingleBook