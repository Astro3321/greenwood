import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import "./assessment.css"
export default function Assessment() {
  
  return (
    <div className="Assessment">
    <center> 
      <h1>Quiz A</h1>
    </center>
   <div className='question-card'>
    <h3> Question 1. What is 10+1?</h3>
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Answer
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">14</Dropdown.Item>
        <Dropdown.Item href="#/action-2">24</Dropdown.Item>
        <Dropdown.Item href="#/action-3">11</Dropdown.Item>
        <Dropdown.Item href="#/action-4">10</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
   </div>
   </div>
  )
}
