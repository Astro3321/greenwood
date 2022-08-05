import React from 'react'
import ".//about.css"

export default function About() {
    return (<>
        <div className="about-section">
            <h1><strong>ABOUT US PAGE</strong></h1>
            <br/><h3>The given problem statement opts because in India majority of people are unaware of the importance of mental health and issues related to mental health, especially in kids.
</h3>
        </div>
        <h2 className='text-center mb-4'><strong>OUR TEAM</strong></h2>
        <div className="row">
            <div className="column">
                <div className="card">
                <img  img src="test-pic-1.jpg" alt="" className='square' height={150} width={150}/>
                <div className="container">
                    <h2>Animesh Raturi</h2>
                    <br/>Course: B.tech CSE with MLAI
                    <br/>College: Uttaranchal University
                    <br/>Email: animeshraturi44@gmail.com
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img  img src="test-pic-2.jpg" alt="" className='square' height={150} width={150}/>
                <div className="container">
                    <h2>Animesh2</h2>
                    <br/>Course: B.tech CSE with MLAI
                    <br/>College: Uttaranchal University
                    <br/>Email: animeshraturi44@gmail.com
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img  img src="test-pic-3.jpg" alt="" className='square' height={150} width={150}/> 
                <div className="container">
                    <h2>Animesh3</h2>
                    <br/>Course: B.tech CSE with MLAI
                    <br/>College: Uttaranchal University
                    <br/>Email: animeshraturi44@gmail.com
                </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="column">
                <div className="card">
                <img  img src="test-pic-1.jpg" alt="" className='rounded-circle' width={150}/>
                <div className="container">
                    <h2>Animesh Raturi</h2>
                    <br/>Course: B.tech CSE with MLAI
                    <br/>College: Uttaranchal University
                    <br/>Email: animeshraturi44@gmail.com
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img  img src="test-pic-2.jpg" alt="" className='rounded-circle' width={150}/>
                <div className="container">
                    <h2>Animesh2</h2>
                    <br/>Course: B.tech CSE with MLAI
                    <br/>College: Uttaranchal University
                    <br/>Email: animeshraturi44@gmail.com
                </div>
                </div>
            </div>
            <div className="column">
                <div className="card">
                <img  img src="test-pic-3.jpg" alt="" className='rounded-circle' width={150}/> 
                <div className="container">
                    <h2>Animesh3</h2>
                    <br/>Course: B.tech CSE with MLAI
                    <br/>College: Uttaranchal University
                    <br/>Email: animeshraturi44@gmail.com
                </div>
                </div>
            </div>
        </div>
    </>)
}