import React, { useEffect, useState } from 'react'
// import { Table } from 'react-bootstrap'
import Chart from 'react-apexcharts';
import { useLocation } from 'react-router-dom'; 
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import View from "../../components/View";
import Table from 'react-bootstrap/Table';
// import Sonnet from '../../components/Sonnet';
import bgimg from "./Greenwoodbg.png"


function DisplayResultTable({ data, result}) {
    const { state } = useLocation()
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
       
    

    // <div>
    //         <center>
    //             <h1>Result</h1>
    //         </center>

    //         <div className="container-fluid px-4">
    //             <div className="row g-3 my-2">
    //                 <div className="col-md-4">
    //                     <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
    //                         <div>
    //                             <h3 className="fs-2"><strong>{result.autismRL}</strong></h3>
    //                             <h3 className="fs-2"><strong>{result.adhdRL}</strong></h3>
    //                             <h3 className="fs-2"><strong>{result.dyslexiaRL}</strong></h3>
    //                             <h3 className="fs-2"><strong>{result.dysgraphiaRL}</strong></h3>
    //                             <h3 className="fs-2"><strong>{result.dyscalculiaRL}</strong></h3>
    //                             <h3 className="fs-2"><strong>{result.dyspraxiaRL}</strong></h3>

    //                             {/* <p className="fs-5">userType</p> */}
    //                         </div>
    //                     </div>
    //                 </div>
    //                 {/* <div className="col-md-4">
    //                     <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
    //                         <div>
    //                             <h3 className="fs-2"><strong>{""}</strong></h3>
    //                             {/* <p className="fs-5">userType</p> */}
    //                         {/* </div>
    //                     </div>
    //                 </div> */}
    //                 <div className="col-md-4">
    //                     <div className="p-3 bg-info shadow-sm d-flex justify-content-around align-items-center rounded">
    //                         <div>
    //                             <h3 className="fs-2"><strong>{result === "Normal"?"No Test Required":"Advanced Test"}</strong></h3>
    //                             {/* <p className="fs-5">userType</p> */}
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
                    
    //                 <br /><br /><br />

    //                 {/* <Chart  type="bar" width={980} height={300}  
                    
    //                 series={[
    //                     {
    //                         name:"answer choosed",
    //                         data:[10,6,8,4,12]
    //                     }
    //                 ]}


    //                 options={
    //                     {}
    //                 }
    //                 >
                       
    //                 </Chart> */}

    //                 {/* <center>
    //             <h1>Questionaire Result</h1>
    //         </center>

    //         <Table respponsive bordered hover size="sm">
    //             <thead>
    //                 {showHeading}
    //             </thead>
    //             <tbody>
    //                 {showQuestion}
    //             </tbody>
    //         </Table> */}
    //     </div>


      //yeh hai asli code..........................................


 
        // return (
        //   <>
        //   <Tabs
        //     defaultActiveKey="profile"
        //     id="uncontrolled-tab-example"
        //     className="mb-3" bg="dark" varient="dark"
        //   >
        //     <Tab eventKey="home" title="Dyslexia"  bg="dark">
        //       {/* <Sonnet /> */} 
        //     </Tab>
        //     <Tab eventKey="profile" title="Autism" bg="dark">
        //       {/* <Sonnet /> */}
        //     </Tab>
        //     <Tab eventKey="contact" title="All" bg="dark" >
        //       {/* <Sonnet /> */}
        //     </Tab>
        //   </Tabs>   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> </>
        // );

      //   return (
      //     <div>
      //           <table class="rwd-table">
      //   <tr>
      //     <th>Dislexia</th>
      //     <th>Autism</th>
      //     <th>ADHD  </th>
      //     <th>   Dyscalculia</th>
      //     <th>  Dysgraphia</th>
      //     <th>  Dyspraxia</th>
      //   </tr>
      //   <tr>
      //     <td data-th={props.result.dyslexiaRL}> </td>
      //     <td data-th={props.result.autimsRL}></td>
      //     <td data-th={props.result.adhdRL}></td>
      //     <td data-th={props.result.dyscalculiaRL}></td>
      //     <td data-th={props.result.dysgraphiaRL}></td>
      //     <td data-th={props.result.dyspraxiaRL}></td>
      //   </tr>
      //   <tr>
      //     <td data-th="Movie Title"></td>
      //     <td data-th="Genre"></td>
      //     <td data-th="Year"></td>
      //     <td data-th="Gross"></td>
      //   </tr>
      //   <tr>
      //     <td data-th="Movie Title"></td>
      //     <td data-th="Genre"></td>
      //     <td data-th="Year"></td>
      //     <td data-th="Gross"></td>
      //   </tr>
      // </table>
      
      //     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
      //     </div>
      //   )


           

}
      
      




function resolveResult(riskLevel){
  if (riskLevel === -1){
    return "N/A"  
  }
  if (riskLevel === 0){
    return "No Risk"
  }
  if (riskLevel === 1){
    return "Low Risk"
  }
  if (riskLevel === 2){
    return "Moderate Risk"
  }
  if (riskLevel === 3){
    return "High Risk"
  }
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

    console.log("Result Page")
    console.log(data)
    console.log(location.state.result)
    const result = location.state.result 
    // return <DisplayResultTable data={data} result={location.state.result}/>


    const banner = {
      // background: `linear-gradient(rgb(0,0,0,0.5),#28c792),url(${bgimg}) no-repeat center center / cover`, /*/url */
            background: `url(${bgimg})`,
            height: "700px"
  };

    return (
      <div style={banner}    > <br />
            {/* <table className="rwd-table">
    <tr>
      <th>Dislexia</th>
      <th>Autism</th>
      <th>ADHD  </th>
      <th>Dyscalculia</th>
      <th>Dysgraphia</th>
      <th>Dyspraxia</th>
    </tr>
    <tr>
      <td data-th={result.dyslexiaRL}> {result.dyslexiaRL}</td>
      <td data-th={result.autimsRL}>{result.autimsRL}</td>
      <td data-th={result.adhdRL}>{result.adhdRL}</td>
      <td data-th={result.dyscalculiaRL}>{result.dyscalculiaRL}</td>
      <td data-th={result.dysgraphiaRL}>{result.dysgraphiaRL}</td>
      <td data-th={result.dyspraxiaRL}>{result.dyspraxiaRL}</td>
    </tr>
  </table> */}

<Table striped bordered hover>
      <thead className="table table-striped table-dark">
        <tr bg="primary">
        <th>Dislexia</th>
        <th>Autism</th>
        <th>ADHD  </th>
        <th>Dyscalculia</th>
        <th>Dysgraphia</th>
        <th>Dyspraxia</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-warning">
        <td > <b>{resolveResult(result.dyslexiaRL)} </b> </td>
      <td > <b> {resolveResult(result.autismRL)}  </b> </td>
      <td > <b> {resolveResult(result.adhdRL)}  </b> </td>
      <td > <b> {resolveResult(result.dyscalculiaRL)}  </b> </td>
      <td > <b> {resolveResult(result.dysgraphiaRL)}  </b> </td>
      <td > <b> {resolveResult(result.dyspraxiaRL)}  </b> </td>
        </tr> </tbody>  </Table>
  
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br />
      </div>
    )
}
