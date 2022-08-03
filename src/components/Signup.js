import React,{useRef} from 'react'
import {Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ".//UserForm.css"

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (<>
    <br></br>
    <div class= "square2">
    <Card>
        <Card.Body>
            <h1 className='text-center mb-4'> Sign Up</h1>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="passward">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>
                <br></br>
                <Button className="w-100" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
    <strong> Already have an Account?</strong><Link to="/login">Login</Link>
    </div>
    </div>
    <br></br>
    </>)
}
