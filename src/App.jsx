import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import CustomCakes from './components/CustomCakes'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className='min-h-screen bg-(--bg-color)'>
      <div className='mx-auto max-w-7xl'>
        <Navbar />
        <Home />
        <Menu />
        <CustomCakes />
        <HowItWorks />
        <Contact />
      </div>
    </div>
  )
}

export default App
