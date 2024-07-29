import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Sociallinks from './component/Sociallinks'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Experience from './component/Experience'
import Contact from './component/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Sociallinks/>
    </div>
  )
}

export default App
