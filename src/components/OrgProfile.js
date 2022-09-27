import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'
import { db } from '../config/firebase-config'
import { getDoc, doc } from '@firebase/firestore'
import { Button } from 'react-bootstrap'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { CSVDownload } from "react-csv"


export default function OrgProfile() {
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    const [studentList, setStudentList] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(true)
    const nameRef = useRef()
    const classRef = useRef()
    const ageRef = useRef()
    const [gender, setGender] = useState("M")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    var csvData = [["Date", "Time", "Disorder-Result"]]

    useEffect(() => {
        const loadData = async () => {
            const queryData = await getDoc(doc(db, "users", currentUser.uid))
            setData(queryData.data())
        }

        const loadStudentList = async() => {
            const studentRef = collection(db, "students")
            const q = query(studentRef, where("orgID", "==", currentUser.uid))
            const querySnapshot = await getDocs(q)

            const queryData = querySnapshot.docs.map((doc) => (
                doc
            ))

            setStudentList(queryData)
        }

        const getData = () => {
            studentList.map((std) => (
                std.data().recentTest.map(obj => (
                    csvData.push([obj.date, obj.time, obj.disorder])
                ))
            ))
        }

        loadData()
        loadStudentList()
        getData()

        console.log(csvData)
    }, [])  

    
    const showStudentList = studentList.map((std) => (
        <div className="row">
            <div className="col-md-2">
                <h5>{std.data().name}</h5>
            </div>
            <div className="col-md-2">
                <h5>{std.data().class}</h5>
            </div>
            <div className="col-md-2">
                <h5>{std.data().age}</h5>
            </div>
            <div className="col-md-2">
                <h5>{std.data().gender}</h5>
            </div>
            <div className="col-md-2">
                <CSVDownload data={csvData} target="_blank">Download</CSVDownload>
            </div>
        </div>
    ))

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

    async function handleSubmit(event){
        event.preventDefault()

        const studentData = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            class: classRef.current.value,
            gender: gender,
            orgID: currentUser.uid,
            orgName: data.orgName
        }

        const studentCollection = collection(db, "students")
        try{
            setLoading(true)
            setError('')
            await addDoc(studentCollection, studentData)
        } catch(err) {
            setError(err.message)
        } finally {
            setLoading(false)
            setShow(false)
        }

        console.log(studentData)
    }

    return (
        <div>
        <div className='my-4' >
        <div className="row " >
            <div className="col-md-4 mt-1" >
                <div className="card text-center side" >
                    <div className="card-body bg-dark" >
                        <img src={data.displayImage?data.displayImage:"profile.png"} alt={data.name} className='rounded-circle' width={150}/>
                        <div className="mt-3">
                            <h3 className='text-light'>{data.name}</h3><br /><br />
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
                                <h5>Name</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                {data.name}
                            </div>
                        </div>
                        {/* <hr /> */}
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Email</h5>
                            </div>
                            <div className="col-md-9 text-secondary">{data.email}</div>
                        </div>
                        {/* <hr /> */}
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Phone no.</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                {data.phoneNumber}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Address</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                                {data.address}
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-md-3">
                                <h5>Organization Id</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                            bbbffb
                            </div>
                        </div> */}
                        {/* <div className="row">
                            <div className="col-md-3">
                                <h5>Conductor Name</h5>
                            </div>
                            <div className="col-md-9 text-secondary">
                            huhuman
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="card mb-3 content" style={{background:"white"}}>
                    <div className="card-header">
                    <h1 className='m-3'>Students</h1>
                    <button type='button' className='btn btn-success' style={{width:"100px",float:"right"}} data-target="#mymodel" data-toggle="modal"> <strong>Add more</strong></button>

                    {/* add more model */}
                    <div show={show} className="modal" id='mymodel'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3 className="text-dark">Student Information</h3>
                                    <button className="close" type='button' data-dismiss="modal"> &times; </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <label >Name</label>
                                            <input type="text" name="" id="" ref={nameRef} required className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label >School Name</label>
                                            <input type="text" name="" id="" className='form-control' />
                                        </div>
                                        <div className="form-group">
                                        <label >class</label>
                                        <input type="text" ref={classRef} required className='form-control' />
                                        </div>
                                        <div className="form-group">
                                        <label >Age</label>
                                        <input type="number" ref={ageRef} required className='form-control' />
                                        </div>
                                        <div className="form-group">
                                        <legend>Gender</legend>
                                            <input type="radio" name="gender" id="male" value="male" defaultChecked onClick={
                                                () => {
                                                    setGender("M")
                                                }
                                            }/>
                                            <label for="male">Male</label>

                                            <br />
                                            <input type="radio" name="gender" id="female" value="female" onClick={
                                                () => {
                                                    setGender("F")
                                                }
                                            }/>
                                            <label for="female">Female</label>
                                    
                                        </div>
                                        {/* <div className="form-group">
                                            <label >organisation Name </label>
                                            <input type="text" name="" id="" className='form-control' />
                                        </div>
                                        <div className="form-group">
                                            <label >organisation Id:  </label>
                                            <input type="number" name="" id="" className='form-control' />
                                        </div> */}
                                       
                                {/* <div class="dropdown">
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
    </div> */}

                                    </div>

                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-success">Add</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-2">
                                <h5>Student name</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>class</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>Age</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>Gender</h5>
                            </div>
                        </div>

                        {showStudentList}

                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
