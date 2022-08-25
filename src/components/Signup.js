import { setDoc, doc } from 'firebase/firestore'
import React,{useRef, useState} from 'react'
import {Form, Button, Card, Alert, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { db } from "../config/firebase-config"
import ".//UserForm.css"

export default function Signup() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const orgNameRef = useRef()
    const addressRef = useRef()
    const phoneNoRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signup } = useAuth()

    async function handleSubmit(event) {
        event.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        const userData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            displayImage: "",
            orgName: orgNameRef.current.value,
            address: addressRef.current.value,
            phoneNumber: phoneNoRef.current.value
        }

        try {
            setError('')
            setLoading(true)
            console.log(userData)
            const newUser = await signup(emailRef.current.value, passwordRef.current.value)
            await setDoc(doc(db, "users", newUser.user.uid), userData)
            navigate("/")
        } catch(e) {
            setError(e.message)
        }

        setLoading(false)
    }

    return (<>
    <br></br>
    <div className="square2" style={{background:"#20c997",border:"2px solid white"}}>
    <Card >
        <Card.Body style={{background:"white"}}>
            <h1 className='text-center mb-4'><strong>Sign Up</strong></h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group id="name">
                            <Form.Label><strong>Name</strong></Form.Label>
                            <Form.Control type="text" ref={nameRef} required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group id="email">
                            <Form.Label><strong>Email</strong></Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                    </Col>
                </Row>

                <Row> 
                    <Col>
                        <br />
                        <Form.Group id="password">
                            <Form.Label><strong>Password</strong></Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>

                    </Col>
                    <Col> 
                        <br />
                        <Form.Group id="password-confirm">
                            <Form.Label><strong>Password Confirmation</strong></Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                    </Col>
                </Row>
                <Row> 
                     <Col>
                        <br />
                        <Form.Group id="org-name">
                            <Form.Label><strong>Oraganization Name</strong></Form.Label>
                            <Form.Control type="text" ref={orgNameRef} required />
                        </Form.Group>
                     </Col>
                     <Col> 
                        <br />
                        <Form.Group id="ph-number">
                            <Form.Label><strong>Phone Number</strong></Form.Label>
                            <Form.Control type="number" ref={phoneNoRef} required />
                        </Form.Group> 
                     </Col>   
                </Row>
                <Row> 
                <br />
                <Form.Group id="Address">
                    <Form.Label><strong>Address</strong></Form.Label>
                    <Form.Control type="textarea" ref={addressRef} required />
                </Form.Group>
                </Row>
                <Button className="w-100 mt-4" type="submit" disabled={loading}>Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2 text-dark">
    <strong> Already have an Account? </strong><Link className='btn btn-light ml-3'  to="/login">Login</Link>
    </div>
    </div>
    <br></br>
    </>)
}

