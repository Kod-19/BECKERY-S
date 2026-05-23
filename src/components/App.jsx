import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Menu from '../components/Menu'
import CustomCakes from '../components/CustomCakes'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => {
  return (
    <div className='min-h-screen' style={{ backgroundColor: 'var(--bg-color)' }}>
      <Navbar />
      <main>
        <Home />
        <Menu />
        <CustomCakes />
        <HowItWorks />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
