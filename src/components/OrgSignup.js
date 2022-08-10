import React from 'react'
import {Form, Button, Card } from 'react-bootstrap'
// import { Link, useNavigate } from 'react-router-dom'
import ".//UserForm.css"


export default function OrgSignup() {
  return ( <>
                   <br /><br />
    <div  className="square2" style={{background:"#20c997",border:"2px solid white"}}>
      <Card >
        <Card.Body style={{background:"white"}}>
            <h1 className='text-center mb-4'><strong>Sign Up</strong></h1>
            <p className='text-center mb-4'><b>As organisation</b></p> 
            <Form >
                <Form.Group id="email">
                    <Form.Label><strong>Organistion/school Name</strong></Form.Label>
                    <Form.Control type="text"  required />
                </Form.Group>
                <br />
                <Form.Group id="passward">
                    <Form.Label><strong>Address</strong></Form.Label>
                    <Form.Control type="text"  required />
                </Form.Group>
                <br />
                <Form.Group id="password-confirm">
                    <Form.Label><strong>Conductor Name</strong></Form.Label>
                    <Form.Control type="text"required />
                </Form.Group>

                <Button className="w-100 mt-4" type="submit" >Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>

    </div><br /><br />
    </>)
}
