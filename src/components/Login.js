import React,{useRef} from 'react'
import {Form, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ".//UserForm.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  

  
  return (<>
  <br></br>
  <div class= "square1">
    <Card>
      <Card.Body>
      <h1 className='text-center mb-4'> Login</h1>
      
        <Form>
          <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
          </Form.Group>

          <Form.Group id="passward">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <br></br>
          <Button className="w-100" type="submit">Login</Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
      <strong> Need an Account? <Link to="/signup">"Sign Up</Link></strong>
    </div>
    </div>
    <br></br>
  </>)
}
 