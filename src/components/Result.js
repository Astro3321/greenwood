import React from 'react'
import { Card, Container, Row, Col, ProgressBar, Table } from 'react-bootstrap'
import Chart from 'react-apexcharts';
import { useEffect } from 'react';



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

            <div class="container-fluid px-4">
                <div class="row g-3 my-2">
                    <div class="col-md-4">
                        <div class="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2"><strong>Disorder</strong></h3>
                                {/* <p class="fs-5">userType</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2"><strong>severity</strong></h3>
                                {/* <p class="fs-5">userType</p> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
                            <div>
                                <h3 class="fs-2"><strong>Test suggested</strong></h3>
                                {/* <p class="fs-5">userType</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                    <br /><br /><br />

                    <Chart  type="bar" width={980} height={300}  
                    
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
                       
                    </Chart>

                    <center>
                <h1>Questionaire Result</h1>
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
    

    useEffect(() =>{
        const loadStudentList = async() => {
            const studentRef = collection(db, "students")
            const q = query(studentRef, where("orgID", "==", currentStudentID))
            const querySnapshot = await getDocs(q)

            const queryData = querySnapshot.docs.map((doc) => (
                doc.data()
            ))

            setStudentList(queryData)
        }




    },[])

    return <DisplayResultTable data={data}/>
}
