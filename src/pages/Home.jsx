import React from 'react'
import HeroSection from '../components/HeroSection'
import DesignAndDevSection from '../components/DesignAndDevSection'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ConnectSection from '../components/ConnectSection'
import Footer from '../components/Footer'
import './Home.css'


const Home = () => {
  return (
    <div className='Home'>
      <HeroSection></HeroSection>
      <DesignAndDevSection></DesignAndDevSection>
      <SkillsSection></SkillsSection>
      <ProjectSection></ProjectSection>
      <ConnectSection></ConnectSection>
      <Footer></Footer>
    </div>
  )
}

export default Home


