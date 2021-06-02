import React from 'react'
import { Alert, Container } from 'react-bootstrap'

function WarningSign(prop) {
    return (
        <Alert variant='danger'>
            <Container>
                {prop.text}
            </Container>
        </Alert>
    )
}

export default WarningSign
