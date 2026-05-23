import React from 'react'

const Footer = () => {
  return (
    <footer
      className='py-10 border-t'
      style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
    >
      <div className='mx-auto max-w-7xl px-6'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
          <div>
            <span className='font-serif italic text-2xl' style={{ color: 'var(--dark-text)' }}>
              Beckery's
            </span>
            <p className='text-sm mt-1' style={{ color: 'var(--body-text)' }}>
              Home-baked goodness · Madina UN, Accra
            </p>
          </div>

          <div className='flex flex-wrap gap-6 text-sm font-bold' style={{ color: 'var(--body-text)' }}>
            <a href="#menu" className='hover:opacity-70 transition-opacity'>Menu</a>
            <a href="#custom-cakes" className='hover:opacity-70 transition-opacity'>Custom Cakes</a>
            <a href="#how-it-works" className='hover:opacity-70 transition-opacity'>How it works</a>
            <a href="#contact" className='hover:opacity-70 transition-opacity'>Contact</a>
            <a
              href="https://instagram.com/beckerys_"
              target="_blank"
              rel="noreferrer"
              className='hover:opacity-70 transition-opacity'
              style={{ color: 'var(--button-color)' }}
            >
              @beckerys_
            </a>
          </div>
        </div>

        <div
          className='mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-2 text-xs'
          style={{ borderColor: 'var(--border-color)', color: 'var(--body-text)' }}
        >
          <p>© {new Date().getFullYear()} Beckery's. All rights reserved.</p>
          <p>Preorder timing · Delivery · Payment · Cake sizing</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
