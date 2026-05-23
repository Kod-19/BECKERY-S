import bananaBreadImage from '../assets/images/menu_banana_bread2.jpeg'
import decoratedCakeImage from '../assets/images/menu_birthday_cake.jpg'
import cupcakesImage from '../assets/images/menu_cupcakes.jpeg'
import loafCakesImage from '../assets/images/menu_loafcakes.jpeg'
import cookiesImage from '../assets/images/menu_cookies.jpeg'

const menuItems = [
  {
    image: bananaBreadImage,
    name: 'Banana Bread',
    desc: 'Plain, Oreo, dark chocolate, or raisins. Mini, medium, and large sizes.',
    price: '15 / 45 / 80-85 GHS',
  },
  {
    image: decoratedCakeImage,
    name: 'Decorated Cakes',
    desc: 'Bento cake, bento with cupcakes, 6 inch and 8 inch round cakes.',
    price: 'Custom order',
  },
  {
    image: cupcakesImage,
    name: 'Cupcakes',
    desc: 'Box of 6 or 12 in chocolate, red velvet, butterscotch, or vanilla.',
    price: 'Box options',
  },
  {
    image: loafCakesImage,
    name: 'Loaf Cakes',
    desc: 'Classic and flavored loaf cakes, perfect for gifting or slicing.',
    price: 'Ask for pricing',
  },
  {
    image: cookiesImage,
    name: 'Shortbread Cookies',
    desc: 'Small-batch cookies for gifting, tea time, and add-on orders.',
    price: '10 GHS',
  },
]

const Menu = () => {
  return (
    <section id="menu" className='py-20' style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className='mx-auto max-w-7xl px-6'>
        <p
          className='uppercase font-bold text-xs tracking-widest mb-4'
          style={{ color: 'var(--button-color)', letterSpacing: '0.15em' }}
        >
          Menu highlights
        </p>
        <h2 className='font-serif font-bold text-4xl md:text-5xl' style={{ color: 'var(--dark-text)' }}>
          Best sellers for pre-order
        </h2>
        <p className='mt-4 text-lg max-w-xl' style={{ color: 'var(--body-text)' }}>
          Clear prices and tasty categories help you decide quickly before you message or call.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-12'>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className='rounded-xl border flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-200'
              style={{ backgroundColor: 'var(--footer-bg)', borderColor: 'var(--border-color)' }}
            >
              <div className='h-44 overflow-hidden' style={{ backgroundColor: 'var(--border-color)' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                />
              </div>
              <div className='p-4 flex flex-col flex-1'>
                <h3 className='font-serif font-bold text-xl mb-2' style={{ color: 'var(--dark-text)' }}>
                  {item.name}
                </h3>
                <p className='text-sm leading-relaxed flex-1' style={{ color: 'var(--body-text)' }}>
                  {item.desc}
                </p>
                <div className='mt-4 pt-3 border-t' style={{ borderColor: 'var(--border-color)' }}>
                  <p className='font-bold text-base' style={{ color: 'var(--button-color)' }}>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <a href="#how-it-works">
            <button
              className='rounded-lg py-3.5 px-8 font-bold hover:opacity-90 transition-all hover:scale-105 duration-150'
              style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
            >
              Pre-order now
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Menu
