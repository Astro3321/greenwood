import React from 'react'

export default function View(props) {
  return (
    <div>
          <table class="rwd-table">
  <tr>
    <th>Dislexia</th>
    <th>Autism</th>
    <th>ADHD  </th>
    <th>   Dyscalculia</th>
    <th>  Dysgraphia</th>
    <th>  Dyspraxia</th>
  </tr>
  <tr className='questions'>
    <td data-th={props.result.dyslexiaRL}> </td>
    <td data-th={props.result.autimsRL}></td>
    <td data-th={props.result.adhdRL}></td>
    <td data-th={props.result.dyscalculiaRL}></td>
    <td data-th={props.result.dysgraphiaRL}></td>
    <td data-th={props.result.dyspraxiaRL}></td>
  </tr>
  <tr>
    <td data-th="Movie Title"></td>
    <td data-th="Genre"></td>
    <td data-th="Year"></td>
    <td data-th="Gross"></td>
  </tr>
  <tr>
    <td data-th="Movie Title"></td>
    <td data-th="Genre"></td>
    <td data-th="Year"></td>
    <td data-th="Gross"></td>
  </tr>
</table>

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br />
    </div>
  )
}
