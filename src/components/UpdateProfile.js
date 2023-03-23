import { updateEmail, updateProfile } from 'firebase/auth'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, uploadBytes } from 'firebase/storage'
import React, { useEffect, useRef, useState } from 'react'
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap'
import { db, storage } from '../config/firebase-config'
import { ref } from "firebase/storage"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from 'react-router'
// import CoverImg from "../images/CoverImg.png"

export default function UpdateProfile(props) {
    // const body = {
    //     background: `linear-gradient(rgb(0,0,0,0.5),#28c792),url(${CoverImg}) no-repeat center center / cover`,
    // }
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [orgName, setOrgName] = useState('')
    const [orgAddress, setOrgAddress] = useState('')
    const [image, setImage] = useState()
    const [data, setData] = useState([])
    const [photoURL, setPhotoURL] = useState(null)
    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const loadData = async () => {
            const queryData = await getDoc(doc(db, "users", currentUser.uid))
            setData(queryData.data())
        }

        loadData()
    }, [])

    const orgDetails = <Row>
        <Col>
            <Form.Group>
                <Form.Label>Organization/School Name</Form.Label>
                <Form.Control type="text" onChange={evt => {setOrgName(evt.target.value)}} defaultValue={data.orgName}/>
            </Form.Group>
        </Col>

        <Col>
            <Form.Group>
                <Form.Label>Organization Address</Form.Label>
                <Form.Control type="text" onChange={evt => {setOrgAddress(evt.target.value)}} defaultValue={data.orgAddress} />
            </Form.Group>
        </Col>
    </Row>

    function handleSubmit(event){
        event.preventDefault()
        const userRef = doc(db, "users", currentUser.uid)

        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Passwords do not match")
        }

        console.log(image)
        if (image.size >= 2097152){
            return setError("Image size should be within 2MB")
        }

        const promises = []
        setError('')
        setLoading(true)

        if(data.email !== emailRef.current.value){
            promises.push(updateEmail(currentUser, emailRef.current.value))
        }

        if(data.name !== nameRef.current.value){
            promises.push(updateProfile(currentUser, {displayName: nameRef.current.value}))
        }

        function handleImage(){
			if (image !== null){
				const imageRef = ref(storage, `profileImages/${currentUser.uid}`)
				uploadBytes(imageRef, image).then(() => {
					getDownloadURL(imageRef).then((URL) => {
                        setTimeout(() => {
                            setPhotoURL(URL)
                            promises.push(updateProfile(currentUser, {photoURL: URL}))
                        }, 2000)
					}).catch(() => {
						setError("Unable to Fetch Image")
					})
				}).catch(() => {
					setError("Failed to Upload Image")
				}) 
			}
		}

        async function handleUpload(){

            const newData = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                displayImage: photoURL,
                orgName: orgName,
                orgAddress: orgAddress
            }

            await updateDoc(userRef, newData).catch((err) => {
                setError(err.message)
            })
        }

        promises.unshift(handleUpload())
        promises.unshift(handleImage())

        Promise.all(promises).then(() => {
            navigate('/profile')
        }).catch((err) => {
            setError("Failed to Update Profile")
        }).finally(() => {
            setLoading(false)
        })
    }

    return <>
            <Card className="mx-auto mt-4 mb-2" style={{width: "40rem", borderRadius: "0.6rem"}}>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <img src={data.displayImage?data.displayImage:"profile.png"} 
                                alt={data.name} className="rounded-circle d-flex mx-auto mb-3" style={{width: "30%"}} />

                            <Form.Group id="display-image">
                                <Form.Control type="file" accept="/images" onChange={(event) => {
                                    setImage(event.target.files[0])
                                }} />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Group id="name">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" ref={nameRef} required defaultValue={data.name} />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required defaultValue={data.email} />
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} placeholder="Leave Blank to keep same" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave Blank to keep same" />
                                </Form.Group>
                            </Col>
                        </Row>

                        {data.userType === "ORG"?orgDetails:''}
                        
                        <Row>
                            <Button className="w-25 text-center d-flex mx-auto mt-4" disabled={loading} type="submit">
                                <span className="w-100 text-center">Update</span>
                            </Button>
                        </Row>
                    </Form>
                    <br /><br /><br /><br /><br /><br /><br /><br />
                </Card.Body>
            </Card>  <br /><br /><br /><br /><br /><br /><br />
    </>
}
