import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../config/firebase-config"
import "./assessment.css"

export default function Assessment() {
  const questionCollectionRef = collection(db, "autism")
  const q = query(questionCollectionRef)
  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const res = await getDocs(q)
      const docData = res.docs.map((doc) => (
        doc.data()
        ))
        console.log(docData)
        setData(docData)
      }

    loadData()
  }, [])

  const showQuestions = data.map((obj, index) => {
    return <div className='question-card mx-auto mb-2'>
      <h3>{`Question ${index+1}. `} {obj.question}</h3>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Answer
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{obj.option_1}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{obj.option_2}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">{obj.option_3}</Dropdown.Item>
          <Dropdown.Item href="#/action-4">{obj.option_4}</Dropdown.Item>
          <Dropdown.Item href="#/action-5">{obj.option_5}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  })


  return (
    <div className="Assessment">
    <center> 
      <h1>Quiz A</h1>
    </center>

    {showQuestions}

   </div>
  )
}
