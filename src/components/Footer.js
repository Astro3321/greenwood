import React from 'react'
import "../components/Footer.css"
import Wave from "../images/Wave.png"

export default function Footer(props) {


  const wave = {
    background:  ` url(${Wave})` 
  }
  
  return (
      <div className='full'>
    <div className='body'>
    <footer>
        <div className="waves">
            <div className="wave" id="wave1" style={wave}></div>
            <div className="wave" id="wave2" style={wave}></div>
            <div className="wave" id="wave3" style={wave}></div>
            <div className="wave" id="wave4" style={wave}></div>
        </div>

        <ul className="social_icon">
            <li><a href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
            <li><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a></li>
        </ul>
        <ul className="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Abut</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Team</a></li>
            {/* <!-- <li><a href="#">Home</a></li> --> */}
        </ul>
        <p>hemlo guys</p>
    </footer>
    </div>
    </div>
       
  )
}
