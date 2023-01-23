import React from "react";

// Map JSON Data of Options to Tabular Format
export default function showOptions(data){
    return <tr>
        <th>#</th>
        <th>Questions</th>

        <th>{data[0].option_1}</th>
        <th>{data[0].option_2}</th>
        <th>{data[0].option_3}</th>
        <th>{data[0].option_4}</th>
        {data[0].option_5 !== null?<th>{data[0].option_5}</th>:''}
    </tr>;

}