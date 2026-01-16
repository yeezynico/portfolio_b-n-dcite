// import { useState } from 'react'
import './index.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import Portfolio from './components/sections/Portfolio'
import Service from './components/sections/Service'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Testimony from './components/sections/Testimony'

function App() {

  return (
      <div>
        <Header />
        <About />
        <Service />
        <Process />
        <Portfolio />
        <Testimony />
        <Footer />
      </div>
  )
}

export default App
