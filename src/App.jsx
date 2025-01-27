import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import AboutMe from './components/About'
import ProjectsSection from './components/Project'
import ContactSection from './components/Contact'
import "./App.css"



const App = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutMe/>
        <ProjectsSection/>
        <ContactSection/>
    </div>
  )
}

export default App