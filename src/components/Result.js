import React from 'react'
import { Card, Container, Row, Col, ProgressBar } from 'react-bootstrap'

const questions = ["question 1", "question 2"]
const answer = ["Rarely", "Sometimes"]

const showResultTable = questions.map((question, index) => {
    return <Row>
        <Col><span className="">{question}</span></Col>
        <Col><span className="">{answer[index]}</span></Col>
    </Row>
})

export default function Result() {
    return <Container>
        <Row>
            <Col>
                <div className="display-image">
                    <img src="" alt="" />
                </div>
            </Col>
            <Col>
                <Card></Card>
            </Col>
        </Row>
        <Row>
            {showResultTable}
        </Row>
        <Row>
            <div className="mt-4 mb-3">Likliness of Disorder</div>
            <div className="mx-auto mb-3" style={{width: "60%"}}>
                <ProgressBar now="60" label="60%" style={{height: "6vh"}} striped animated/>
            </div>
        </Row>
    </Container>
}
