import { Card, Col } from 'react-bootstrap'
import React from 'react'
import MyBadge from './MyBadge'


class SingleBook extends React.Component {

    state = {
        selected:false
    }

render () {
 return <Col>
  <Card onClick={()=> this.setState({selected:!this.state.selected})}>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
            {this.state.selected? <MyBadge text={this.props.category} variant='danger'/> : null}
            <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
    </Card>
    </Col>

}}
export default SingleBook