import React from "react";
import { Form } from "react-bootstrap";
import "./Assessment.css"

// Map JSON Data of Questions to Tabular Format
export default function showQuestions(data, ans){
    return data.map((obj, index) => (
        <tr style={{padding: "0.25rem 2rem"}} key={`${index}`}>
            <td style={{padding: "0.25rem 2rem"}}>{index + 1}</td>
            <td style={{padding: "0.25rem 2rem"}}><span>{obj.question}</span></td>
    
            <td style={{padding: "0.25rem 2rem"}}><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 1}} />
            </div></td>
            <td style={{padding: "0.25rem 2rem"}}><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 2}} />
            </div></td>
            <td style={{padding: "0.25rem 2rem"}}><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 3}}  />
            </div></td>
            <td style={{padding: "0.25rem 2rem"}}><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 4}} />
            </div></td>
            <td style={{padding: "0.25rem 2rem"}}><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 5}}  />
            </div></td>
          </tr>
      ));
}