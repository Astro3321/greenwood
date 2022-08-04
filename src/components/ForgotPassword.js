import { Alert } from 'bootstrap'
import React, { useRef, useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)

            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch(e) {
            setError(e.message)
        }

        setLoading(false)
    }


    return (<>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Reset Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Button className="w-100 text-center mt-3" disabled={loading} type="submit">Reset Password</Button>
            </Form>
        </Card.Body>
    </Card>

    <div className="w-100 text-center mt-2">
        Need an Account? <Link to="/signup">Sign Up</Link>
    </div>
    </>
    )
}
