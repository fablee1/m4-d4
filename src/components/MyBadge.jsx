import { Badge } from 'react-bootstrap'
import React from 'react'


const MyBadge = (props) => (
    <Badge variant={props.variant}>{props.text}</Badge>
)

export default MyBadge