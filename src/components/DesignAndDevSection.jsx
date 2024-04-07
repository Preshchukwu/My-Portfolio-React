import React from 'react'
import './DesignAndDevSection.css'

const DesignAndDevSection = () => {

  return (
    <div className='designAndDevelopment'>
       <div className="designContainer">
            <div className="designHeading">
                <h2>Design</h2>
            </div>

            <div className="designDescriptionContainer">
                <p className="deignDescription">I'm not your typical designer glued to an Illustrator artboard. Instead, I dive into code, fine-tuning fonts and pondering layouts with a smile. My passion is crafting trendy yet great user experiences for seamless digital journeys that engage and delight.</p>
            </div>
        </div>

        

        <div className="lineContainer">
            
        </div>


        <div className="developmentContainer">
            <div className="developmentHeading">
                <h2>Development</h2>
            </div>

            <div className="developmentDescriptionContainer">
                <p className="developmentDescription">Blending design finesse with coding skills,  I craft products that merge aesthetics with technical efficiency, delivering swift and resilient solutions. I bring a unique blend of creativity and technical proficiency to ensure a seamless user experience.</p>
            </div>
        </div>
    </div>
  )
}

export default DesignAndDevSection
