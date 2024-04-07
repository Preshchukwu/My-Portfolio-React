import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import {useContextHook} from './AppContext'

const Nav = () => {
  const {data, toogledata} = useContextHook()



  return (
    


    <>

    <div className='navMainContainer'>
      {/* <Link className='link' >
        <p>My Projects</p>
      </Link> */}

      <a className='link' href="#projectSection">
        <p>My Projects</p>
      </a>
    

      <Link className='link' to={'/about me'} >
        <p>About Me</p>
      </Link>

      <Link className='link' to={'https://drive.google.com/file/d/1udY_4QsoIFceXRAvXUTf9UU8ijFdbMK0/view?usp=drivesdk'} target='_blank'>
        <p>Resume</p>
      </Link>

      
    </div>


      {
        data ? <div className="navigationLinksContainerTwo" id="navigationLinksContainerTwo">
                 {/* <div class="iconContainer" id="closeIcon">
                    <img src="public/close.svg" alt=""/>
                </div>  */}

                <div className="navTwoContainer">
                    <a href="#projectSection" className="projectLink" id="projectLink">
                        <h3>Projects</h3>
                    </a>

                    {/* <a href="./pages/About.jsx" className="projectLink" id="projectLink">
                        <h3>About Me</h3>
                    </a> */}

                    
                    <Link style={{textDecoration: `none`, fontSize: `1.1rem`, color: `black`, fontWeight: `700`}}  to={'/about me'} >
                      <p>About Me</p>
                    </Link>

                    <a href="https://drive.google.com/file/d/1udY_4QsoIFceXRAvXUTf9UU8ijFdbMK0/view?usp=drivesdk" className="projectLink" id="projectLink" target='_blank'>
                        <h3>Resume</h3>
                    </a>
    
                    
                </div>
            </div> : ``
      }

    
            </>
  )
}

export default Nav
