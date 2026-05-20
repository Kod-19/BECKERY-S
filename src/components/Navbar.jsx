import React from 'react'
import logo from '../../public/logo.ico'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center text-(--body-text)'>
        <a href="#home"><img className='w-full h-20 hover:scale-105 duration-150' src={logo} alt="" /></a>

        <div className='gap-15 flex text-sm transition-all font-bold items-center'>
            <a className='hover:text-(--button-color) hover:scale-105 duration-150' href="#home">Home</a>
            <a className='hover:text-(--button-color) hover:scale-105 duration-150' href="#menu">Menu</a>
            <a className='hover:text-(--button-color) hover:scale-105 duration-150' href="#custom-cakes">Custom Cakes</a>
            <a className='hover:text-(--button-color) hover:scale-105 duration-150' href="#how-it-works">How it works</a>

            <button className='py-2 px-4  bg-(--dark-text) text-(--bg-color) rounded-lg'>Pre-order</button>
        </div>
    </div>
  )
}

export default Navbar