import React from 'react'


export default function Home() {
  return (
   <>
   <html>
    {/* <!-- navitgation bar --> */}
    <nav>
        <ul>
            <li className="ourlogo"><img src="himages/softwarelogo.png" alt="ourlogo"/>GreenWood </li>
            <li>Home</li>
            <li>About</li>
           <a href="http://127.0.0.1:5500/index.html"><li className="left">Login</li></a>
            <a href="http://127.0.0.1:5500/pages/signup/signup.html"><li className="left">Signup</li></a>
            
        </ul>
    </nav> 
    <section id="banner">
        <div className="banner-text">
            <h1>Green wood</h1>    
            <p>Never doubt your abilities</p>
            <div className="banner-btn">
                <a href="http://127.0.0.1:5500/pages/greenwood/Greenwood.html" ><span></span>Read More</a>
            </div>
        </div>
    </section>

    {/* <!-- features --> */}
    <section className="feature">
    <div className="title-text">
        <p>FEATURES</p>
        <h1>Learning Disorder Assesments</h1>
        <br/> </div>
    <div className="assesment">
        <div className="assesment-feature">
           <img src="himages/dislexia.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>DISLEXIA</h3>
                <hr/>
                <a href="http://127.0.0.1:5500/pages/dyslexia/dyslexia.html"  className="overlay-link"> <p>Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words (decoding). Also called reading disability, dyslexia affects areas of the brain that process language.</p></a>
            </div>
        </div>
        <div className="assesment-feature">
            <img src="himages/ADHD.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>ADHD</h3>
                <hr/>
                <a href="http://127.0.0.1:5500/pages/ADHD/ADHD.html"  className="overlay-link"><p>Attention deficit hyperactivity disorder (ADHD) is a brain disorder that affects how you pay attention, sit still, and control your behavior. It happens in children and teens and can continue into adulthood.</p></a>
            </div></div>
        <div className="assesment-feature">
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
            </div></div>
        <div className="assesment-feature">
            <img src="himages/autism.png" alt="" /><div className="overlay"></div>
            <div className="discription">
                <h3>AUTISM</h3>
                <hr/>
              <a href="http://127.0.0.1:5500/pages/Autism/autism.html"  className="overlay-link">  <p>Autism spectrum disorder is a condition related to brain development that impacts how a person perceives and socializes with others, causing problems in social interaction and communication. The disorder also includes limited and repetitive patterns of behavior.</p></a>
            </div></div>
        <div className="assesment-feature">
            <img src="himages/discalculia.png" alt="" /><div className="overlay"/></div>
            <div className="discription">
                <h3>DISCALCULIA</h3>
                <hr/>
              <a href="http://127.0.0.1:5500/pages/Discalculia/discalculia.html"  className="overlay-link">  <p>Dyscalculia is a disability resulting in difficulty learning, such as difficulty in understanding numbers, learning how to manipulate numbers, performing mathematical calculations and learning facts in mathematics.</p></a>
            </div></div>
            </section>
            </html>
</>
            

            
    
  )
    
}
