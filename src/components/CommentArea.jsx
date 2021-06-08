import React, { useEffect, useState } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

const CommentArea = (props) => {

    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        setUpdated(false)
    }, [updated])

    const commentsUpdated = () => {
        setUpdated(true)
    }

    return (
        <>
            <CommentsList asin={props.asin} commentsUpdated={commentsUpdated} updated={updated} />
            <AddComment asin={props.asin} commentsUpdated={commentsUpdated} />
        </>
    )
}

export default CommentArea