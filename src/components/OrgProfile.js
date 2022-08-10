import React from 'react'
import { Button } from 'react-bootstrap'


export default function OrgProfile() {
  return (
    <div>
       <div className='my-4' >
      <div className="row " >
        <div className="col-md-4 mt-1" >
            <div className="card text-center side" >
                <div className="card-body bg-dark" >
                    <img src="profile.png" alt="" className='rounded-circle' width={150}/>
                    <div className="mt-3">
                        <h3 className='text-light'>Arpit kashyap</h3><br /><br />
                        <a href="/">Home</a><br /><br />
                        <a href="/">Tests</a><br /><br />
                        <a href="/">Setting</a><br /><br />
                        <Button variant="link">Logout</Button>
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
                            <h5>Full name</h5>
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
                           Organisation
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Conductor Name</h5>
                        </div>
                        <div className="col-md-9 text-secondary">
                          huhuman
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 content" style={{background:"white"}}>
                <div className="card-header">
                <h1 className='m-3'>Recent Tests </h1>
                <button type='button' className='btn btn-success' style={{width:"100px",float:"right"}} data-target="#mymodel" data-toggle="modal"> <strong>Add more</strong></button>

                {/* add more model */}
                <div className="modal" id='mymodel'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="text-dark">Student Information</h3>
                                <button className="close" type='button' data-dismiss="modal"> &times; </button>
                            </div>
                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label >Name</label>
                                        <input type="text" name="" id="" className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label > fathers Name</label>
                                        <input type="text" name="" id="" className='form-control' />
                                    </div>
                                    <div className="form-group">
                                        <label >School Name</label>
                                        <input type="text" name="" id="" className='form-control' />
                                    </div>
                               <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Test Name
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="/">Dyslexia</a>
                                    <a class="dropdown-item" href="/">Dyscalculia</a>
                                    <a class="dropdown-item" href="/">Dysgraphia</a>
                                    <a class="dropdown-item" href="/">Dyspraxia</a>
                                    <a class="dropdown-item" href="/">ADHD</a>
                                    <a class="dropdown-item" href="/">Autism</a>
                                </div>
</div>

                                </form>
                            </div>

                            <div className="modal-footer">
                                <button className="btn btn-success">conduct test</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Student name</h5>
                        </div>
                        <div className="col-md-3">
                            <h5>Test</h5>
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