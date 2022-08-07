import React from 'react'
import {Col, Card, Row } from 'react-bootstrap'
import ".//about.css"

export default function About() {
    return (<>
        <div className="about-section">
            <h1><strong>ABOUT US PAGE</strong></h1>
            <br/><h3>The given problem statement opts because in India majority of people are unaware of the importance of mental health and issues related to mental health, especially in kids.
</h3>
        </div>
        <h2 className='text-center mb-4'><strong>OUR TEAM</strong></h2>
        <div className="row">
            <div className="column">
                <Card className="card">
                    <Card.Body>
                    <Row className='hello'>
                        <Col className='by'>
                            <img src="test-pic-1.jpg" alt="" className='square' height={150} width={150}/>
                        </Col>
                        <Col>
                            <div className="container">
                                <h2>Animesh Raturi</h2>
                                <br/>Course: B.tech CSE with MLAI
                                <br/>College: Uttaranchal University
                                <br/>Email: animeshraturi44@gmail.com
                            </div>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className="column">
                <Card className="card">
                    <Card.Body>
                    <Row className='hello'>
                        <Col className='by'>
                            <img src="test-pic-2.jpg" alt="" className='square' height={150} width={150}/>
                        </Col>
                        <Col>
                            <div className="container">
                                <h2>Animesh Raturi</h2>
                                <br/>Course: B.tech CSE with MLAI
                                <br/>College: Uttaranchal University
                                <br/>Email: animeshraturi44@gmail.com
                            </div>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className="column">
                <Card className="card">
                    <Card.Body>
                    <Row className='hello'>
                        <Col className='by'>
                            <img src="test-pic-3.jpg" alt="" className='square' height={150} width={150}/>
                        </Col>
                        <Col>
                            <div className="container">
                                <h2>Animesh Raturi</h2>
                                <br/>Course: B.tech CSE with MLAI
                                <br/>College: Uttaranchal University
                                <br/>Email: animeshraturi44@gmail.com
                            </div>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
        

        <div className="row">

            <div className="column">
                <Card className="card">
                    <Card.Body>
                    <Row className='hello'>
                        <Col className='by'>
                            <img src="test-pic-1.jpg" alt="" className='rounded-circle' height={150} width={150}/>
                        </Col>
                        <Col>
                            <div className="container">
                                <h2>Animesh Raturi</h2>
                                <br/>Course: B.tech CSE with MLAI
                                <br/>College: Uttaranchal University
                                <br/>Email: animeshraturi44@gmail.com
                            </div>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>

            <div className="column">
                <Card className="card">
                    <Card.Body>
                    <Row className='hello'>
                        <Col className='by'>
                            <img src="test-pic-2.jpg" alt="" className='rounded-circle' height={150} width={150}/>
                        </Col>
                        <Col>
                            <div className="container">
                                <h2>Animesh Raturi</h2>
                                <br/>Course: B.tech CSE with MLAI
                                <br/>College: Uttaranchal University
                                <br/>Email: animeshraturi44@gmail.com
                            </div>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
            <div className="column">
                <Card className="card">
                    <Card.Body>
                    <Row className='hello'>
                        <Col className='by'>
                            <img src="test-pic-3.jpg" alt="" className='rounded-circle' height={150} width={150}/>
                        </Col>
                        <Col>
                            <div className="container">
                                <h2>Animesh Raturi</h2>
                                <br/>Course: B.tech CSE with MLAI
                                <br/>College: Uttaranchal University
                                <br/>Email: animeshraturi44@gmail.com
                            </div>
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </>)
}