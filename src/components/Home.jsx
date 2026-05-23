import heroImage from '../assets/images/menu_banana_bread1.jpeg'

const HeroImage = () => (
  <div className='relative flex items-center justify-center'>
    <div
      className='w-full max-w-md aspect-[4/5] md:aspect-[5/6] rounded-2xl overflow-hidden border shadow-sm'
      style={{ backgroundColor: 'var(--border-color)', borderColor: 'var(--border-color)' }}
    >
      <img
        src={heroImage}
        alt="Fresh Oreo banana bread from Beckery's"
        className='w-full h-full object-cover'
      />
    </div>

    <div
      className='absolute bottom-4 right-0 md:-right-6 px-4 py-3 rounded-xl shadow-sm border'
      style={{ backgroundColor: 'white', borderColor: 'var(--border-color)', minWidth: '160px' }}
    >
      <p className='text-xs font-bold mb-1' style={{ color: 'var(--body-text)' }}>Most popular</p>
      <p className='font-serif font-bold text-base' style={{ color: 'var(--dark-text)' }}>Banana Bread</p>
      <p className='text-sm font-bold' style={{ color: 'var(--button-color)' }}>from 15 GHS</p>
    </div>
  </div>
)

const Home = () => {
  return (
    <section id="home" className='min-h-screen pt-20' style={{ backgroundColor: 'var(--footer-bg)' }}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-16'>
          <div>
            <p
              className='uppercase font-bold text-xs tracking-widest pb-6'
              style={{ color: 'var(--button-color)', letterSpacing: '0.15em' }}
            >
              Home-baked goodness
            </p>
            <h1
              className='font-serif font-bold text-5xl md:text-6xl leading-tight'
              style={{ color: 'var(--dark-text)' }}
            >
              Fresh bakes made for sweeter days.
            </h1>
            <p className='pt-6 text-lg leading-relaxed' style={{ color: 'var(--body-text)' }}>
              Pre-order banana bread, cupcakes, loaf cakes, shortbread cookies, and decorated cakes from Beckery's. Soft, homemade flavor with a premium finish for gifts, birthdays, and everyday treats.
            </p>

            <div className='flex flex-wrap gap-4 mt-10'>
              <a href="#how-it-works">
                <button
                  className='rounded-lg text-center py-3.5 px-6 font-bold cursor-pointer hover:opacity-90 transition-all hover:scale-105 duration-150'
                  style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
                >
                  Pre-order now
                </button>
              </a>
              <a href="#menu">
                <button
                  className='rounded-lg text-center py-3.5 px-6 font-bold cursor-pointer hover:scale-105 duration-150 transition-all border'
                  style={{ color: 'var(--dark-text)', borderColor: 'var(--border-color)', backgroundColor: 'transparent' }}
                >
                  View Menu
                </button>
              </a>
            </div>

            <p className='pt-5 text-sm font-medium' style={{ color: 'var(--body-text)' }}>
              Pick-up and delivery available | Payment validates order
            </p>
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  )
}

export default Home
