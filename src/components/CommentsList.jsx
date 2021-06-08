import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { ListGroup } from 'react-bootstrap'


const CommentsList = (props) => {

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData()
    }, [props.asin, props.updated])

    const fetchData = async() => {
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                }
            })

            const comments = await response.json()
            
            setComments(comments)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    const deleteComment = async (id) => {
        setIsLoading(true)
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlMzU3MWNlYWY0ODAwMTVjOTE4NjIiLCJpYXQiOjE2MjI3MjgxNjQsImV4cCI6MTYyMzkzNzc2NH0.9IIHO9P16tKwX-Ou8dNdpGV3lroNfYEEjkMGlNmsbhw"
                }
            })

            if(response.ok) {
                setIsLoading(false)
                props.commentsUpdated()
            }

        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <>
            {
                (
                    comments.length === 0
                    && isLoading === false
                )
                    ? <p>No Comments Yet</p>
                    : <ListGroup>
                        {comments.map(comment => 
                            <ListGroup.Item className="d-flex" onClick={() => deleteComment(comment._id)}><span className="mr-auto">{comment.comment}</span><span>{comment.rate}/5</span></ListGroup.Item>    
                        )}
                    </ListGroup>
            }

            {isLoading && <Loading />}
        </>
    )
}

export default CommentsList