import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'


class AddComment extends React.Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin
        }
    }

    inputChange = (e) => {
        let id = e.target.id

        this.setState({
            comment: {
                ...this.state.comment,
                [id]: e.target.value
            }
        })
    }

    sendComment = async (e) => {
        e.preventDefault()

        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                }
            })
            console.log(response)
            if (await response.ok) {
                this.setState({
                    comment: {
                        comment: '',
                        rate: 1,
                        elementId: this.props.asin
                    }
                })
                this.props.commentsUpdated()
            } else {
                console.log('Error with POST request')
            }
        } catch (error) {
            console.log(error)
        }
    }

    render () {
        return (
            <Form onSubmit={(e) => this.sendComment(e)} className="pt-2 mt-2 border-top border-dark">
                <Form.Row>
                    <Col>
                        <Form.Control type="text" placeholder="Your comment" value={this.state.comment.comment} id="comment" onChange={e => this.inputChange(e)} />
                    </Col>
                </Form.Row>
                <Form.Row className="d-flex align-items-center mt-1">
                    <Col xs={3}>
                        <Form.Control as="select" defaultValue="Rating..." value={this.state.comment.rate} id="rate" onChange={e => this.inputChange(e)} >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                    <Col xs={9}>
                        <Button variant="primary" type="submit" id="sendBtn">Add Comment</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default AddComment