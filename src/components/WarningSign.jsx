import React from 'react'
import { Alert } from 'react-bootstrap'

function WarningSign(prop) {
    return (
        <Alert variant='danger'>
            {prop.text}
        </Alert>
    )
}

export default WarningSign
