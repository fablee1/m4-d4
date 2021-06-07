import { Card, Col } from 'react-bootstrap'
import React from 'react'
import MyBadge from './MyBadge'
import CommentArea from './CommentArea'

const SingleBook = (props) => (
    <Col {...props.cols}>
    <Card className={props.id === props.asin ? 'card-shadow' : null} onClick={() => props.staySelected ? props.changeSelected(props.asin) : ''} onMouseEnter={() => props.staySelected ? '' : props.changeSelected(props.asin)} onMouseLeave={() => props.staySelected ? '' : props.changeSelected(null)}>
        <div className="imgDiv">
            <Card.Img variant="top" src={props.img} /> 
            {props.id === props.asin ? <MyBadge text={props.category} variant='danger'/> : null}
        </div>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            {(props.id === props.asin) && !props.staySelected ? <CommentArea asin={props.asin} /> : null}
        </Card.Body>
    </Card>
    </Col>
)

export default SingleBook