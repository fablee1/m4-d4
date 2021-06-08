import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const WarningSign = (props) => (
        <Alert variant='danger'>
            <Container>
                {props.text}
            </Container>
        </Alert>
)

export default WarningSign
