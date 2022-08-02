import React,{useRef} from 'react'
import {Form, Button, Card } from 'react-bootstrap'

export default function Login() {
  const emailRef = useRef()
    const passwordRef = useRef()
  return (
    <>
    <Card>
      <Card.Body>
      <h1 className='text-center mb-4'> Login</h1>
        <Form>
          <Form.Group ig="email">
              <Form.Label>Email</Form.Label>
              <Form.Control typr="email" ref={emailRef} required />
          </Form.Group>
          <Form.Group ig="passward">
              <Form.Label>Password</Form.Label>
              <Form.Control typr="password" ref={passwordRef} required />
          </Form.Group>
          <Button className="w-100" type="submit">Login</Button>

        </Form>
      </Card.Body>
    </Card>
<div className="w-100 text-center mt-2">
    You don't have an account. //Signup
</div>
   
</>
    
  )
}
 