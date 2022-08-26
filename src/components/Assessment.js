import React, { useEffect, useState } from 'react'
import { arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../config/firebase-config"
import "./assessment.css"
import { Button, Form, Table } from 'react-bootstrap'
import { Modal } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

function DisplayQuestionTable({ data, currentStudentID }) {
  // console.log(currentStudentID)
  const [loading, setLoading] = useState(false)
  const [resDisorder, setResDisorder] = useState()
  const [resRisk, setResRisk] = useState()
  var ans = Array(70).fill(0)
  const navigate = useNavigate()

  const showQuestions = data.map((obj, index) => (
    <tr key={`${index}`}>
        <td>{index + 1}</td>
        <td><span>{obj.question}</span></td>

        <td><div className="d-flex justify-content-center">
          <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 1}} required/>
        </div></td>
        <td><div className="d-flex justify-content-center">
          <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 2}} required/>
        </div></td>
        <td><div className="d-flex justify-content-center">
          <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 3}} required/>
        </div></td>
        <td><div className="d-flex justify-content-center">
          <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 4}} required/>
        </div></td>
        <td><div className="d-flex justify-content-center">
          <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 5}} required/>
        </div></td>
      </tr>
  ))

  const showOptions = <tr>
    <th>#</th>
    <th>Questions</th>

    <th>{data[0].option_1}</th>
    <th>{data[0].option_2}</th>
    <th>{data[0].option_3}</th>
    <th>{data[0].option_4}</th>
    {data[0].option_5 !== null?<th>{data[0].option_5}</th>:''}
  </tr>

  async function handleSubmit(event){
    event.preventDefault()
    setLoading(true)
    
    //Autism Detection
    const sumAutism = ans.slice(0, 41).reduce((partialSum, a) => partialSum + a, 0)
    if (sumAutism < 70){ setResDisorder("Autism"); setResRisk(0) }
    else if (sumAutism > 70 && sumAutism <= 106){ setResDisorder("Autism"); setResRisk(1) }
    else if (sumAutism > 107 && sumAutism <= 153){ setResDisorder("Autism"); setResRisk(2) }
    if (sumAutism > 153){ setResDisorder("Autism"); setResRisk(3) }

    //Dyslexia Detection
    const sumDyslexia = ans.slice(41, 71).reduce((partialSum, a) => partialSum + a, 0)
    const probability = (sumDyslexia / 120) * 100
    if (probability <= 25){ setResDisorder("Dyslexia"); setResRisk(0)}
    if (probability > 25 && probability <= 50){ 
      if(resRisk < 1){
        setResDisorder("Dyslexia")
        setResRisk(1)
      }
      if(resRisk === 1){
        setResDisorder("Autism and Dyslexia")

      }
    }
    if (probability > 50 && probability <=75){ 
      if(resRisk < 2){
        setResDisorder("Dyslexia")
        setResRisk(2)
      }
      if(resRisk === 2){
        setResDisorder("Autism and Dyslexia")
      }
    }
    if (probability > 75){ 
      if(resRisk < 3){
        setResDisorder("Dyslexia")
        setResRisk(3)
      }
      if(resRisk === 3){
        setResDisorder("Autism and Dyslexia")
      }
    }

    console.log(resRisk)
    console.log(resDisorder)
    // await updateDoc(doc(db, "students", currentStudentID), {
    //   recentTest: arrayUnion({
    //     disorder: resDisorder,
    //     riskValue: resRisk
    //   })
    // })

    // navigate("/result", { state:{disorder: resDisorder, risk:resRisk} })

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
          {showOptions}
        </thead>

        <tbody>
          {showQuestions}
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
  </Modal>
  </>
}
