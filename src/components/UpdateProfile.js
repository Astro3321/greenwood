import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { db } from '../config/firebase-config'
import { useAuth } from "../contexts/AuthContext"
// import CoverImg from "../images/CoverImg.png"

export default function UpdateProfile(props) {
    // const body = {
    //     background: `linear-gradient(rgb(0,0,0,0.5),#28c792),url(${CoverImg}) no-repeat center center / cover`,
    // }
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [image, setImage] = useState()
    const [data, setData] = useState([])
    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const userCollectionRef = collection(db, "users")
    const q = query(userCollectionRef, where("email", '==', `${currentUser.email}`))

    useEffect(() => {
        const loadData = async () => {
            const queryData = await getDocs(q)
            setData(queryData.docs[0].data())
        }

        loadData()
    }, [])

    function handleSubmit(){
        console.log("here")
    }

   
    return <>
            <Card className="mx-auto mt-4 mb-2" style={{width: "23rem", borderRadius: "0.6rem"}}>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <img src={data.displayImage?data.displayImage:"profile.png"} 
                            alt={data.name} className="rounded-circle d-flex mx-auto mb-3" style={{width: "40%"}} />

                        <Form.Group id="display-image">
                            <Form.Control type="file" accept="/images" onChange={(event) => {
                                setImage(event.target.files[0])
                            }} />
                        </Form.Group>

                        <Form.Group id="name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} required defaultValue={data.name} />
                        </Form.Group>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required defaultValue={data.email} />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} placeholder="Leave Blank to keep same" />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave Blank to keep same" />
                        </Form.Group>

                        <Button className="w-25 text-center d-flex mx-auto mt-4" disabled={loading} type="submit">
                            Update
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
    </>
}
