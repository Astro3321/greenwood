import React, { useEffect, useState } from 'react'
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../config/firebase-config"
import { Button, Form, Table } from 'react-bootstrap'
import { Modal } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../contexts/AuthContext"

import "./Assessment.css"
import getTime from "../../utility/getTime"
import getDate from "../../utility/getDate"
import genResult from "./genResult"
import showQuestions from './showQuestions'
import showOptions from './showOptions'

function DisplayQuestionTable({ data, currentStudentID }) {
  // console.log(currentStudentID)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  var ans = Array(70).fill(1)

  async function handleSubmit(event){
    event.preventDefault()
    setLoading(true)

    const res = genResult(ans);
    var date = getDate();
    var time = getTime();

    console.log(res)

    {res && await updateDoc(doc(db, "students", currentStudentID), {
        recentTest: arrayUnion({
          disorder: res,
          date: date,
          time: time
        })
      })}

    {res && navigate("/result", { state:{result: res} })}

    setLoading(false)
  }
  
  return (
    <div className="Assessment">
    <center> 
      <h1 className="mb-4 mt-4">Questionaaire</h1>
    </center>

    <Form onSubmit={handleSubmit}>
      <Table responsive bordered hover size="sm" >
        <thead>
          {showOptions(data)}
        </thead>

        <tbody>
          {showQuestions(data, ans)}
        </tbody>
      </Table>

      <Button className="d-flex mx-auto justify-content-center" style={{width: "15rem"}} type="submit" disabled={loading}>
        Result</Button>
    </Form>
   </div>
  )
}

export default function Assessment() {
  const [data, setData] = useState()
  const [show, setShow] = useState(true);
  const [studentList, setStudentList] = useState([])
  const [currentStudentID, setCurrentStudentID] = useState("")
  const { currentUser } = useAuth()
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const loadData= async () => {
      const resAutism = await getDocs(collection(db, "autism"))
      const resDyslexia = await getDocs(collection(db, "dyslexia"))
      const docDataAutism = resAutism.docs.map((doc) => (
        doc.data()
        ))

      const docDataDyslexia = resDyslexia.docs.map((doc) => (
        doc.data()
        ))

      setData(docDataAutism.concat(docDataDyslexia))
      handleShow()
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
    
    loadData()
    loadStudentList()
  }, [])

  const showStudentList = studentList.map((std) => (
    <div className="row mb-3">
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
            <h5>{std.data().gender==="M"?"Male":"Female"}</h5>
        </div>
        <div className="col-md-2">
          <Button onClick={() => {handleClose();setCurrentStudentID(std.id)}}>Select</Button>
        </div>
    </div>
  ))

  return <>{data && <DisplayQuestionTable data={data} currentStudentID={currentStudentID}/>}
  
  <Modal show={show}>
    <Modal.Header >
      <Modal.Title>STUDENTS</Modal.Title>
    </Modal.Header>
    <Modal.Body>    
      <div className="card-body">
        {showStudentList}
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>   <br /><br /><br /><br /><br /><br /><br /><br />
  </>
}
