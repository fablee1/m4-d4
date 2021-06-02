import { Badge } from 'react-bootstrap'
import React from 'react'


const MyBadge = (props) => (
    <Badge className="d-flex justify-content-center align-items-center" variant={props.variant}><span>{props.text}</span></Badge>
)

export default MyBadge