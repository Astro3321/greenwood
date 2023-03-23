import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { db } from '../config/firebase-config'

export default function RecentTest(props) {

    async function uploadData() {
        const data = [
            {
                "question": "Does the child make poor eye contact",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child lacks social smile",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child remains aloof",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child not reach out to others",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child unable to relate to people",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child unable to respond to social/ environmental cues",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child engages in solitary and repetitive play activities",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child unable to take turns in social interaction",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child not maintain peer relationships",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child shows inappropriate emotional response",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child shows exaggerated emotions",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child engages in self-stimulating emotions",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child lacks fear of danger",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child gets excited or agitated for no apparent reason",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child acquired speech and lost it",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child have difficulty in using non-verbal language or gestures to communicate",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child engages in stereotyped and repetitive use of language",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child engages in echolalic speech",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child produces infantile squeals/ unusual noises",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child unable to initiate or sustain conversation with others",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child uses jargon or meaningless words",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child uses pronoun reversals",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child unable to grasp pragmatics of communication (real meaning)",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child engages in stereotyped and repetitive motor mannerisms",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child shows attachment to inanimate objects",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child shows hyperactivity/ restlessness",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child exhibits aggressive behavior",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child throws temper tantrums",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child engages in self-injurious behavior",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child insists on sameness",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child unusually sensitive to sensory stimuli",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child stares into space for long periods of time",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child have difficulty in tracking objects",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child have unusual vision",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Is the child nsensitive to pain",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child responds to objects/people unusually by smelling, touching or tasting",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child suffer from inconsistent attention and concentration",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child shows delay in responding",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child have unusual memory of some kind",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            },
            {
                "question": "Does the child have \"savant\" ability",
                "option_1": "Rarely",
                "option_2": "Sometimes",
                "option_3": "Frequently",
                "option_4": "Mostly",
                "option_5": "Always"
            }
        ]
        

        data.forEach(async function(obj, index) {
            setDoc(doc(db, "autism", `${index+1}`), obj)
        })

    }

    useEffect(() => {
        uploadData()
    })
    

  return (
    <>
    
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
                                <td></td>
                                <td></td>
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
    </div>  <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /> </>
  )
}
