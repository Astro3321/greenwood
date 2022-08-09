import { Alert } from 'bootstrap'
import React,{useRef, useState} from 'react'
import {Form, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import ".//UserForm.css"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signup } = useAuth()

    async function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch(e) {
            setError(e.message)
        }

        setLoading(false)
    }

    return (<>
    <br></br>
    <div className="square2">
    <Card>
        <Card.Body>
            <h1 className='text-center mb-4'><strong>Sign Up</strong></h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label><strong>Email</strong></Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <br />
                <Form.Group id="passward">
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <br />
                <Form.Group id="password-confirm">
                    <Form.Label><strong>Password Confirmation</strong></Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>

                <Button className="w-100 mt-4" type="submit" disabled={loading}>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2 text-dark">
    <strong> Already have an Account? </strong><Link className='btn btn-dark ml-3'  to="/login">Login</Link>
    </div>
    </div>
    <br></br>
    </>)
}
