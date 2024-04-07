import React from 'react'
import './SkillSection.css'

const SkillsSection = () => {
  return (
    <div className='skillsSection'>
      <div className='skillsSectionMainDiv'>
            <div className="skillsTextContainer">
                <h2>Technical Skills</h2>
            </div>

            <div className='skillIconContainer'>
                <div className='firstRowOfSkillsIcon'>
                    <img src="/logos_html-5.svg" alt="" />
                    <img src="/logos_css-3.svg" alt="" />
                    <img src="/skill-icons_javascript.svg" alt="" />
                    <img src="/skill-icons_typescript.svg" alt="" />
                    <img src="/skill-icons_react-light.svg" alt="" />
                </div>

                <div className='secondRowOfSkillsIcon'>
                    <img src="/logos_git.svg" alt="" />
                    <img src="/mage_github.svg" alt="" />
                    <img src="/logos_figma.svg" alt="" />
                    <img src="/Node.svg" alt="" />
                </div>
            </div>

            <div className="skillIconContainertwo">
                <div className="firstRowOfSkillsIcon">
                    <img src="/logos_html-5.svg" alt=""/>
                    <img src="/logos_css-3.svg" alt=""/>
                </div>

                <div className="firstRowOfSkillsIcon">
                    <img src="/skill-icons_javascript.svg" alt=""/>
                    <img src="/skill-icons_typescript.svg" alt=""/>
                </div>

                <div className="firstRowOfSkillsIcon">
                    <img src="/mage_github.svg" alt=""/>
                    <img src="/logos_figma.svg" alt=""/>
                </div>

                <div className="firstRowOfSkillsIcon">
                    <img className="reduceImage" src="/skill-icons_react-light.svg" alt=""/>
                    <img className="reduceImage" src="/logos_git.svg" alt=""/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default SkillsSection
