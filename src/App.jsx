import { useState } from 'react'
import './index.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { Project } from './components/sections/Project'
import Service from './components/sections/Service'

function App() {

  return (
      <div>
        <Header />
        <Service />
        <Project />
        <Footer />
      </div>
  )
}

export default App
