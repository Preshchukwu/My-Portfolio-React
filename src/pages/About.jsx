import React, { useState } from 'react'
import './About.css'
import Footer from '../components/Footer'

const About = () => {
  const [about, setAbout] = useState(true)
  
  return (
    <div className='aboutAndFooter'>
      <div className='aboutSectionContainer'>
      <div className="aboutTextContainer">
                <div className="aboutnameAndProfessionContainer">
                    <div className="aboutHelloNameContainer">
                        <h2>Hi!<span><img src="public/wave.svg" alt=""/></span>  I'm Precious!</h2>
                    </div>
                </div>
    
                <div className="aboutDescriptionTextContainer">
                    <p>I'm a Front-end Developer with a foundation in User Experience Design. My journey into development stems from a desire to actively participate in the product life cycle and transform design concepts into tangible, user-friendly experiences. I'm passionate about leveraging my dual skill set to create products that directly impact people's lives. In addition to my coding and pixel-perfect pursuits, you'll often find me immersed in books or lost in the world of music. My passion extends beyond pixels, I am ready to bring fresh ideas to the table and play a pivotal role in creating impactful digital experiences.</p>
                </div>
            </div>

            <div className="aboutButtonContainer">
                <a href="#footer">
                    <button className="aboutConnectButton">Connect With Me</button>
                </a>
            </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default About
