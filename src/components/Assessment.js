import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../config/firebase-config"
import "./assessment.css"
import { Button, Form, Table } from 'react-bootstrap'


function DisplayQuestionTable({ data }) {
  const [loading, setLoading] = useState(false)
  var ans = Array(40).fill(0)

  const showQuestions = data.map((obj, index) => (
    <tr>
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

  function handleSubmit(event){
    event.preventDefault()
    setLoading(true)
    console.log(ans)
    setLoading(false)
  }

  return (
    <div className="Assessment">
    <center> 
      <h1>Quiz A</h1>
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
        Result
      </Button>
    </Form>
   </div>
  )
}

export default function Assessment() {
  const [data, setData] = useState()

  useEffect(() => {
    const loadData= async () => {
      const res = await getDocs(collection(db, "autism"))
      const docData = res.docs.map((doc) => (
        doc.data()
        ))

      setData(docData)
    }
    
    loadData()
  }, [])

  return <>{data && <DisplayQuestionTable data={data} />}</>
}
