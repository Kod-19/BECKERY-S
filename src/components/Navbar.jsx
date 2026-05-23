import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{ backgroundColor: 'var(--footer-bg)', borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent' }}
    >
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex w-full justify-between items-center h-20'>
          <a href="#home" className='flex items-center'>
            <span
              className='font-serif italic text-3xl hover:scale-105 duration-150 inline-block'
              style={{ color: 'var(--dark-text)' }}
            >
              Beckery's
            </span>
          </a>

          {/* Desktop nav */}
          <div className='hidden md:flex gap-10 text-sm font-bold items-center' style={{ color: 'var(--body-text)' }}>
            <a className='hover:opacity-70 hover:scale-105 duration-150 transition-all' href="#menu">Menu</a>
            <a className='hover:opacity-70 hover:scale-105 duration-150 transition-all' href="#custom-cakes">Custom Cakes</a>
            <a className='hover:opacity-70 hover:scale-105 duration-150 transition-all' href="#how-it-works">How it works</a>
            <a className='hover:opacity-70 hover:scale-105 duration-150 transition-all' href="#contact">Contact</a>
            <a
              href="#how-it-works"
              className='py-2.5 px-5 rounded-lg text-sm font-bold transition-all hover:opacity-90 hover:scale-105 duration-150'
              style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
            >
              Pre-order
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className='md:hidden flex flex-col gap-1.5 p-2'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--dark-text)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: 'var(--dark-text)' }}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--dark-text)' }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80 pb-6' : 'max-h-0'}`}
        >
          <div className='flex flex-col gap-4 pt-2' style={{ color: 'var(--body-text)' }}>
            <a className='font-bold text-sm hover:opacity-70' href="#menu" onClick={() => setMenuOpen(false)}>Menu</a>
            <a className='font-bold text-sm hover:opacity-70' href="#custom-cakes" onClick={() => setMenuOpen(false)}>Custom Cakes</a>
            <a className='font-bold text-sm hover:opacity-70' href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
            <a className='font-bold text-sm hover:opacity-70' href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a
              href="#how-it-works"
              className='py-2.5 px-5 rounded-lg text-sm font-bold text-center w-full transition-all'
              style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
              onClick={() => setMenuOpen(false)}
            >
              Pre-order
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
