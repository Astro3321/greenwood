import { addDoc, collection } from 'firebase/firestore'
import React,{useRef, useState} from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { db } from "../config/firebase-config"
import ".//UserForm.css"

export default function Signup() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [userType, setUserType] = useState(null)
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
            userType: userType
        }

        const userCollectionRef = collection(db, "users")

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            await addDoc(userCollectionRef, userData)
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
                <Form.Group id="name">
                    <Form.Label><strong>Name</strong></Form.Label>
                    <Form.Control type="text" ref={nameRef} required />
                </Form.Group>

                <Form.Group id="email">
                    <Form.Label><strong>Email</strong></Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <br />
                <Form.Group id="password">
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>

                <br />
                <Form.Group id="password-confirm">
                    <Form.Label><strong>Password Confirmation</strong></Form.Label>
                    <Form.Control type="password" ref={passwordConfirmRef} required />
                </Form.Group>

                <Form.Label><strong>Signup as an Organization</strong></Form.Label>
                <Form.Check 
                    type="radio"
                    name="userType"
                    label="Yes"
                    value="true"
                    onChange={() => {
                        setUserType("ORG")
                    }}
                    required />
                <Form.Check
                    type="radio"
                    name="userType"
                    label="No"
                    value="false"
                    onChange={() => {
                        setUserType("IND")
                    }} 
                    required />

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
