import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className='min-h-screen bg-(--bg-color)'>
      <div className='mx-auto max-w-7xl'>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App
