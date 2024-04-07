import React from 'react'
import Nav from './Nav'
import './Header.css'
import { Link } from 'react-router-dom'
import { useContextHook } from './AppContext'

const Header = () => {
  // const data= useContextHook()

  // const toogleData = ()=>{
  //     data((prevState)=> !prevState)
  // }
  const {data, toogleData} = useContextHook()


  return (
    <div className='headerMainContainer'>
      <Link className='link' to={'/'}>
         <div className="headerImageAndNameContainer">
                <div className="headerImgContainer">
                    <img src="/Myimg.svg" alt=""/>
                </div>

                <div className="headerNameContainer">
                    <h3 className="headerPreciousText">Precious</h3>
                </div>
        </div>
      </Link>

      <Nav></Nav>


            <div onClick={()=>{toogleData()}} className="menuContainer" >
                <img className="menu" src="public/menu.svg" alt=""/>
            </div>
    </div>
  )
}

export default Header
