import React from 'react'
import { Button, Modal , Card} from "react-bootstrap"
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useAuth } from '../contexts/AuthContext';
import img from "./disgraphia.png"


export default function Model(props) {
    const [data, setData] = useState()
    const [studentList, setStudentList] = useState([])
    const [currentStudentID, setCurrentStudentID] = useState("")
    const { currentUser } = useAuth()
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     
    const section = {
        margintop:"6px"
    }


    const [show, setShow] = useState(true);

    useEffect(() => {
        const loadData= async () => {
          const resAutism = await getDocs(collection(db, "autism"))
          const resDyslexia = await getDocs(collection(db, "dyslexia"))
          const docDataAutism = resAutism.docs.map((doc) => (
            doc.data()
            ))
    
          const docDataDyslexia = resDyslexia.docs.map((doc) => (
            doc.data()
            ))
    
          setData(docDataAutism.concat(docDataDyslexia))
          handleShow()
        }
    
        const loadStudentList = async() => {
          const studentRef = collection(db, "students")
          const q = query(studentRef, where("orgID", "==", currentUser.uid))
          const querySnapshot = await getDocs(q)
    
          const queryData = querySnapshot.docs.map((doc) => (
              doc
          ))
    
          setStudentList(queryData)
        }
        
        loadData()
        loadStudentList()
      }, [])
    
      const showStudentList = studentList.map((std) => (
        <div  className="row mb-3">
            <div className="col-md-2">
                <h5>{std.data().name}</h5>
            </div>
            <div className="col-md-2">
                <h5>{std.data().class}</h5>
            </div>
            <div className="col-md-2">
                <h5>{std.data().age}</h5>
            </div>
            <div className="col-md-2">
                <h5>{std.data().gender==="M"?"Male":"Female"}</h5>
            </div>
            <div className="col-md-2">
              <Button onClick={() => {handleClose();setCurrentStudentID(std.id)}}>Select</Button>
            </div>
        </div>))

      

    return(<>
        <Card style={{ width: '18rem',alignItems:"center", margin:"auto",marginTop:"6rem",marginBottom:"6rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Advanced Test - Autism</Card.Title>
          <Card.Text>
            
          </Card.Text>
          <Button variant="primary" onClick={<Model />}>Go to test</Button>
        </Card.Body>
      </Card>

  <Modal show={show}>
    <Modal.Header className='Model-Header'>
      <Modal.Title>STUDENTS</Modal.Title>
    </Modal.Header>
    <Modal.Body>    
      <div className="card-body">
        {showStudentList}
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
    </Modal.Footer>
  </Modal> <br /><br /><br /><br />   <br /><br /><br /><br /><br /><br />    </>    
     )
}
