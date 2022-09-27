import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Chart from 'react-apexcharts';
import { useLocation } from 'react-router-dom'; 
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase-config';

function DisplayResultTable({ data, result}) {
    const {state } = useLocation()
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

    // console.log(location.state.risk)
    // console.log(location.state.resDisorder)

return(
    <div>
            <center>
                <h1>Result</h1>
            </center>

            <div className="container-fluid px-4">
                <div className="row g-3 my-2">
                    <div className="col-md-4">
                        <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"><strong>{result}</strong></h3>
                                {/* <p className="fs-5">userType</p> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"><strong>{""}</strong></h3>
                                {/* <p className="fs-5">userType</p> */}
                            {/* </div>
                        </div>
                    </div> */}
                    <div className="col-md-4">
                        <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 className="fs-2"><strong>{result === "Normal"?"No Test Required":"Advanced Test"}</strong></h3>
                                {/* <p className="fs-5">userType</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                    <br /><br /><br />

                    {/* <Chart  type="bar" width={980} height={300}  
                    
                    series={[
                        {
                            name:"answer choosed",
                            data:[10,6,8,4,12]
                        }
                    ]}


                    options={
                        {}
                    }
                    >
                       
                    </Chart> */}

                    {/* <center>
                <h1>Questionaire Result</h1>
            </center>

            <Table respponsive bordered hover size="sm">
                <thead>
                    {showHeading}
                </thead>
                <tbody>
                    {showQuestion}
                </tbody>
            </Table> */}
        </div>
         )
}

export default function Result() {
    const location = useLocation()
    const data = []
    const [studentList, setStudentList] = useState()
    useEffect(() =>{
        const loadStudentList = async() => {
            const studentRef = collection(db, "students")
            const q = query(studentRef, where("orgID", "==", location.state.id))
            const querySnapshot = await getDocs(q)

            const queryData = querySnapshot.docs.map((doc) => (
                doc.data()
            ))

            setStudentList(queryData)
        }
    },[])

    return <DisplayResultTable data={data} result={location.state.result}/>
}
