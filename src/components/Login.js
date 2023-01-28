import React,{useEffect, useRef, useState} from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import "./UserForm.css"
import bgimg from "../images/Greenwoodbg.png"


export default function Login(props) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { currentUser, login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (currentUser){
      console.log(currentUser.uid)
      console.log(currentUser.email)
      navigate("/profile")
    }
  }, [])

  async function handleSubmit(event){
    event.preventDefault()
    
    try{
      setError('')
      setLoading(true)

      await login(emailRef.current.value, passwordRef.current.value)

      navigate("/")
    } catch(e) {
      setError(e.message)
    }

    setLoading(false)
  }


    const banner = {
        // background: `linear-gradient(rgb(0,0,0,0.5),#28c792),url(${bgimg}) no-repeat center center / cover`, /*/url */
              background: `url(${bgimg})`,
              height: "700px"
    };

  
  
  return (<>
     <div  style={banner} >
  <br></br>
  <div className="square1" >
    <Card >
      <Card.Body style={{background:"white"}}>
      <h1 className='text-center mb-4'><strong>Login</strong></h1>
      {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
              <Form.Label><strong>Email</strong></Form.Label>
              <Form.Control type="email" ref={emailRef} required />
          </Form.Group>
          <br />
          <Form.Group id="password">
              <Form.Label><strong>Password</strong></Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
          </Form.Group>
          <br></br>
          <Button  className="w-100" type="submit" disabled={loading}>Login</Button>
        </Form>
      </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2 text-dark">
      <strong> Need an Account? <Link  to="/signup">Sign Up</Link></strong>
    </div>
    </div>
    <br></br><br /><br /><br /><br />

    {/* </section> */}  </div>
  </>)
}
 