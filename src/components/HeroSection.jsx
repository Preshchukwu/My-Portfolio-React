import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='heroSectionContainer'>
      <div className="heroTextContainer">
                <div className="heroNameAndProfessionContainer">
                    <div className="heroHelloNameContainer">
                        <h2>Hello! I'm Precious, a</h2>
                    </div>
                    
        
                    <div className="heroProfessionNameContainer">
                        <h2>UI/UX Engineer And Front-end Developer</h2>
                    </div>
                </div>
    
                <div className="heroDescriptionTextContainer">
                    <p>I specialize in building scalable products that are both user-friendly and technically robust. I love combining great aesthetics with smart development</p>
                </div>
    </div>

            <div className="heroButtonContainer">
                <a href="#connect">
                    <button className="heroConnectButton">Connect With Me</button>
                </a>
            </div>

            {/* <div className="buttonContainerTwo">
                <a href="#connect">
                    <button className="connectButton">Connect With Me</button>
                </a>
            </div> */}
    </div>
  )
}

export default HeroSection
