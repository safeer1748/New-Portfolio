import react from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
