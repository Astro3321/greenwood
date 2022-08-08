import React from 'react'
// import CoverImg from "../images/CoverImg.png"

export default function UpdateProfile(props) {
    // const body = {
    //     background: `linear-gradient(rgb(0,0,0,0.5),#28c792),url(${CoverImg}) no-repeat center center / cover`,
    // }

   
  return (
    <div >
        <div className="card">
                <div className="card-header" style={{background: "#c2f0c4"}}>
                    <h2>Update Profile</h2>
                    {/* <button type='button' className='btn btn-success'> <strong>See All</strong> <span className="las la-arrow-right"></span></button> */} <br />
                </div> </div>
      <div className="container" >
        <div className="row d-flex justify-content-center" >
            <div className="col-md-10 mt-5 pt-5">
                <div className="row z-depth-3" style={{border: "2px solid black"}}>
                    <div className="col-sm-4 bg-info bg-gradient rounded-left" >
                     <div className="card-block text-center text-white"> <br />
                     <img src="profile.png" alt="" className='rounded-circle' width={120}/> <br />
                     <input type="file" name="profilePic" id="ProfilePic" />
                        <h2 className="font-weight-bold mt-4"><strong>Arpit Kashyap</strong></h2>
                        <p>XYZ school</p>
                        <i className="far fa-edit fa-2x mb-4"></i>
                        </div>   
                    </div>
                    <div className="col-sm-8 bg-white rounded-right">
                        <h3 className="mt-3 text-center" style={{fontweight:"bold",}}>Information</h3>
                        <hr className="badge-dark mt-0 w-25" />
                        <div className="row">
                            <div className="col-sm-6">
                                <p className="font-weight-bold"><b>Name</b></p>
                                <input type="text" name="name" id="name"  />
                            </div>
                            <div className="col-sm-6">
                                <p className="font-weight-bold"><b>School</b></p>
                                <input type="text" name="school" id="school" />
                            </div>
                        </div><br />
                        
                       
                        <div className="row">
                        <div className="col-sm-6">
                                <p className="font-weight-bold"><b>Email</b></p>
                                <input type="email" name="email" id="email" />
                            </div>
                            <div className="col-sm-6">
                                <p className="font-weight-bold"><b>Phone</b></p>
                                <input type="number" name="number" id="number" />
                            </div>

                        </div>
                        <hr className="bg-dark" />
                        <button type='button' className='btn btn-success' style={{width:"600px"}}> <strong>Save</strong> <span className="las la-arrow-left"></span></button> <br /><br />

                    </div>
                </div>
            </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
    </div>
  )
}
