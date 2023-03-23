import React from "react";
import { Form } from "react-bootstrap";

// Map JSON Data of Questions to Tabular Format
export default function showQuestions(data, ans){
    return data.map((obj, index) => (
        <tr key={`${index}`}>
            <td>{index + 1}</td>
            <td><span>{obj.question}</span></td>
    
            <td><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 1}} />
            </div></td>
            <td><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 2}} />
            </div></td>
            <td><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 3}}  />
            </div></td>
            <td><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 4}} />
            </div></td>
            <td><div className="d-flex justify-content-center">
              <Form.Check type="radio" name={`question-${index}`} onClick={() => {ans[index] = 5}}  />
            </div></td>
          </tr>
      ));
}