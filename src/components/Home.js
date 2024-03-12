import React from 'react'
import "../App.css"
import CoverImg from "../images/CoverImg.png"

import { OverlayTrigger, Popover } from 'react-bootstrap';

export default function Home(props) {

    const banner = {
        background: `linear-gradient(rgb(0,0,0,0.5),#28c792),url(${CoverImg}) no-repeat center center / cover`, /*/url */
        // backgroundsize: "cover",
        // backgroundposition: "center",
        height: "100vh",
    };

   

    const firsttest = {
        textalign: "center",
        paddingbottom: "70px",
        fontsize: "50px",
      fontfamily: `'Ibarra Real Nova', serif`,
      fontweight: "bold"
    };
  return (
   <>
    <section id="banner" style={banner}>
        <div className="banner-text">
            <h1 style={{fontfamily:"'Kaushan Script', cursive"}}><b>Green wood</b></h1>    
            <p>Never doubt your abilities</p>
            <div className="banner-btn">
                
                <a href="http://127.0.0.1:5500/pages/greenwood/Greenwood.html" ><span></span><b>Read More</b></a>
            </div>
        </div>
        </section>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#28c792" fill-opacity="1" d="M0,192L48,165.3C96,139,192,85,288,53.3C384,21,480,11,576,10.7C672,11,768,21,864,53.3C960,85,1056,139,1152,138.7C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
         
   
  
    {/* <!-- features --> */}

    <section className="feature" >
    <div className="title-text" style={{position:"relative",margin_top:"-1000px", marginLeft:"0px"}}>
        <p>FEATURES</p>
        <h1>Learning Disorder Assesments</h1>
        <br/> </div>
    <div className="assesment">

               {/* fundamental test hyperlink */}

        <div className="assesment-feature">
            <img src="himages/autism.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>FUNDAMENTAL TEST</h3>
                <hr/>
              <a href="/test/basic"  className="overlay-link" >  <p style={{text_decoration:"none"}}>This fundamental test is common test for all learning disabilities used to indentify which disorder a student can have to advocate for subsequent test</p></a>
            </div>
              {/* <h2>Fundamental Test </h2> */}
              </div>






        {/* <div className="assesment-feature">
           <img src="himages/dislexia.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>DISLEXIA</h3>
                <hr/>
                <a href="http://127.0.0.1:5500/pages/dyslexia/dyslexia.html"  className="overlay-link"> <p style={{marginTop:"10px"}}>Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called reading disability, dyslexia affects areas of the brain that process language.</p></a>
            </div>
        </div> */}
        {/* <div className="assesment-feature">
            <img src="himages/ADHD.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>ADHD</h3>
                <hr/>
                <a href="http://127.0.0.1:5500/pages/ADHD/ADHD.html"  className="overlay-link"><p>Attention deficit hyperactivity disorder (ADHD) is a brain disorder that affects how you pay attention, sit still, and control your behavior. It happens in children and teens and can continue into adulthood.</p></a>
            </div></div> */}
        {/* <div className="assesment-feature">
            <img src="himages/disgraphia.png" alt=""/ ><div className="overlay"></div>
            <div className="discription">
                <h3>DISGRAPHIA</h3>
                <hr/>
                <a href="http://127.0.0.1:5500/pages/Disgraphia/disgraphia.html"  className="overlay-link"><p>Dysgraphia is a learning disability characterized by writing difficulties, such as impared handwriting, poor spelling and problems selecting the correct words to use. Dysgraphia can affect children or adults.</p></a>
            </div></div>
        <div className="assesment-feature">
            <img src="himages/dispraxia.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>DISPRAXIA</h3>
                <hr/>
             <a href="http://127.0.0.1:5500/pages/dispraxia/dispraxia.html"  className="overlay-link"> <p>Dyspraxia is a brain-based motor disorder.It affects fine and gross motor skills,motor planning and co-ordination </p></a>
            </div></div> */}
        {/* <div className="assesment-feature">
            <img src="himages/discalculia.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>DISCALCULIA</h3>
                <hr/>
              <a href="http://127.0.0.1:5500/pages/Discalculia/discalculia.html"  className="overlay-link">  <p>Dyscalculia is a disability resulting in difficulty learning, such as difficulty in understanding numbers, learning how to manipulate numbers, performing mathematical calculations and learning facts in mathematics.</p></a>
            </div></div> */}
          
            
            </div>

           
            </section>
            <h2 style={firsttest}>.</h2>

            <br />
            <br />
            <br />
            
            {/* <div> <lord-icon
    src="https://cdn.lordicon.com/cnhaewqi.json"
    trigger="hover"
    style={{width:"300px" ,height:"300px"}}>
</lord-icon></div> */}

</>
  )
}
