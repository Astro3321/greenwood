import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function AboutCard({ data: { img, name, course, college, email }}) {
    return <Card className="mt-3" style={{minWidth: "18rem", justifyContent: "space-between", borderRadius: "10px"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <ListGroup variant="flush">
                <ListGroupItem><span className="font-weight-bold">Course: </span>{course}</ListGroupItem>
                <ListGroupItem><span className="font-weight-bold">College: </span>{college}</ListGroupItem>
                <ListGroupItem><span className="font-weight-bold">Email: </span>{email}</ListGroupItem>
            </ListGroup>
        </Card.Body>
    </Card>
}
