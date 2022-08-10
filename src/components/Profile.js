import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Profile(props) {
    const [error, setError] = useState('')
    const { logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout(event){
        event.preventDefault()

        try{
            setError('')
            await logout()
            navigate("/login")
        } catch(e) {
            setError(e.message)
        }
    }

    return (
    <div>
      <div className='my-4' >
      <div className="row " >
        <div className="col-md-4 mt-1" >
            <div className="card text-center side" >
                <div className="card-body" style={{background:"white"}}>
                    <img src="profile.png" alt="" className='rounded-circle' width={150}/>
                    <div className="mt-3">
                        <h3>Arpit kashyap</h3><br /><br />
                        <a href="/">Home</a><br /><br />
                        <a href="/">Tests</a><br /><br />
                        <a href="/">Setting</a><br /><br />
                        <Button variant="link" onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
            </div>
         </div>
         <div className="col-md-8 mt-1" >
            <div className="card mb-3 content" style={{background:"white"}}>
                <h1 className='m-3 pt-3'>About</h1>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>full name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            Arpit kashyap
                        </div>
                    </div>
                    {/* <hr /> */}
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Email</h5>
                        </div>
                        <div className="col-md-9 text-secondary">abc@gmail.com</div>
                    </div>
                    {/* <hr /> */}
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Phone</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            76689388555
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Address</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            xyz area51
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Application type</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            Individual
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 content" style={{background:"white"}}>
                <h1 className='m-3'>Recent Tests </h1>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Test Name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                            Test description
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
    </div>
  )
}
