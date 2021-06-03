import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'


class CommentArea extends React.Component {

    state = {
        updated: false
    }

    commentsUpdated = () => {
        this.setState({updated: true}, () => this.setState({updated: false}))
    }

    render() {
        return (
                <>
                    <CommentsList asin={this.props.asin} commentsUpdated={this.commentsUpdated} updated={this.state.updated} />
                    <AddComment asin={this.props.asin} commentsUpdated={this.commentsUpdated} />
                </>
        )
    }
}

export default CommentArea