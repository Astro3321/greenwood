import React,{useRef} from 'react'
import {Form, Button, Card } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
  return (
    <>
    <Card>
        <Card.Body>
        <h1 className='text-center mb-4'> Sign Up</h1>
        <Form>
            <Form.Group ig="email">
                <Form.Label>Email</Form.Label>
                <Form.Control typr="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group ig="passward">
                <Form.Label>password</Form.Label>
                <Form.Control typr="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group ig="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control typr="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">Sign Up</Button>

        </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Already have an account. //Login
    </div>
    </>
  )
}
