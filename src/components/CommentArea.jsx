import React from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'


const CommentArea = (props) => (
    <>
        <CommentsList asin={props.asin} />
        <AddComment asin={props.asin} />
    </>
)

export default CommentArea