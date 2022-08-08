import React from 'react'

export default function RecentTest(props) {
    
  return (
    <div>
      <div className="recent-grid">
        <div className="projects">
            <div className="card">
                <div className="card-header" style={{background: "#c2f0c4"}}>
                    <h2>Recent Tests</h2>
                    <button type='button' className='btn btn-success'> <strong>See All</strong> <span className="las la-arrow-right"></span></button>
                </div>

                <div className="card-body">
                    <table style={{borderCollapse:"collapse", width:"100%"}} >
                        <thead>
                            <tr style={{borderTop:"1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0"}}>
                                <td style={{padding: ".5rem "}}><b>Name</b></td>
                                <td><b>Test</b></td>
                                <td><b>Status</b></td>
                            </tr>
                        </thead>
                        <tbody>     {/*      list idhar ayegiii */}
                            <tr>
                                <td>Jhonny sins</td>
                                <td>hiv</td>
                                <td>
                                    <span className="status"></span>review
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div> 
    </div>
  )
}
