import React from 'react'
import { Button, Modal } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import { useAuth } from '../contexts/AuthContext';

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
        <div className="row mb-3">
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

      

    return(
      
    <section className='section'> 
    <div className="assesment">
        <div className="assesment-feature">
           <img src="himages/dislexia.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>DISLEXIA</h3>
                <hr/>
                <a href="http://127.0.0.1:5500/pages/dyslexia/dyslexia.html"  className="overlay-link"> <p style={{marginTop:"10px"}}>Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called reading disability, dyslexia affects areas of the brain that process language.</p></a>
            </div>
        </div>


       <div className="assesment-feature">
            <img src="himages/dispraxia.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>DISPRAXIA</h3>
                <hr/>
             <a href="http://127.0.0.1:5500/pages/dispraxia/dispraxia.html"  className="overlay-link"> <p>Dyspraxia is a brain-based motor disorder.It affects fine and gross motor skills,motor planning and co-ordination </p></a>
            </div></div></div>     

     
             
  <Modal show={show}>
    <Modal.Header >
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
  </Modal>








</section>
     )
}
