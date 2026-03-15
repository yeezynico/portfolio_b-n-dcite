import { Routes, Route } from 'react-router-dom'
import './index.css'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import Portfolio from './components/sections/Portfolio'
import Service from './components/sections/Service'
import About from './components/sections/About'
import Process from './components/sections/Process'
import Testimony from './components/sections/Testimony'
import Meeting from './components/sections/Meeting'

function App() {

  return (
    <Routes>
      <Route path="/" element= {
      <>
        <Header />
        <About />
        <Service />
        <Process />
        <Portfolio />
        <Testimony />
        <Footer />
      </>
      }/>
      <Route path="/meeting" element={<Meeting />}/>
    </Routes>
  )
}

export default App
