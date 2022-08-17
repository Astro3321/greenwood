import React from 'react'
import { Card, Container, Row, Col, ProgressBar, Table } from 'react-bootstrap'



function DisplayResultTable({ data }) {
    const showQuestion = data.map((obj,index) => (
        <tr>
            <td>{index + 1}</td>
            <td><span>{obj.question}</span></td>
            <td><div>{obj.answer}</div></td>
        </tr>
    ))

    const showHeading = <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer</th>
    </tr>

return(
    <div>
            <center>
                <h1>Result</h1>
            </center>

            <Table respponsive bordered hover size="sm">
                <thead>
                    {showHeading}
                </thead>
                <tbody>
                    {showQuestion}
                </tbody>
            </Table>
        </div>
    )
}

export default function Result() {
    const data = [{
        question: "Question 1",
        answer: "Answer 1"
    }, {
        question: "Question 2",
        answer: "Answer 2"
    }]

    return <DisplayResultTable data={data}/>
}
