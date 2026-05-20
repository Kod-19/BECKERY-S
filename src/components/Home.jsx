import React from 'react'
import heroPic from '../assets/images/menu_birthday_cake.jpg'

const Home = () => {
  return (
    <div className='grid grid-cols-2 gap-4 pt-30'>
        <div className='pt-20'>
            <p className='text-(--button-color) uppercase font-bold pb-10 text-lg'>Home-baked goodness</p>
            <p className='font-serif font-bold text-6xl text-(--dark-text)'>Fresh bakes made for sweeter days.</p>
            <p className='text-(--body-text) pt-10 font-medium text-lg'>
                Pre-order banana bread, cupcakes, loaf cakes, shortbread cookies, and decorated cakes from Beckery's. Soft, homemade flavor with a premium finish for gifts, birthdays, and everyday treats.
            </p>

            <a href="#">
                <button className='rounded-lg text-center py-3 px-4 mt-10 text-(--bg-color) bg-(--dark-text) font-bold cursor-pointer'>
                    Pre-order now
                </button>
            </a>
            <a href="#menu">
                <button className='rounded-lg text-center py-3 px-4 mt-10 ml-5 text-(--dark-text) border font-bold cursor-pointer hover:border-(--button-color)'>
                    View Menu
                </button>
            </a>

            <p className='text-(--body-text) pt-5 font-medium text-lg'>Pick-up and delivery available</p>
        </div>

        <div className='pt-20'>
            <div className='bg-(--border-color) p-10 rounded-2xl'>
                <img className='w-60 h-60 rounded-xl' src={heroPic} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home