import React from "react";
import "./Assessment.css"

// Map JSON Data of Options to Tabular Format
export default function showOptions(data){
    return <tr style={{padding: "0.25rem 2rem"}} className="question-assesment table">
        <th>#</th>
        <th>Questions</th>

        <th>{data[0].option_1}</th>
        <th>{data[0].option_2}</th>
        <th>{data[0].option_3}</th>
        <th>{data[0].option_4}</th>
        {data[0].option_5 !== null?<th>{data[0].option_5}</th>:''}
    </tr>;

}