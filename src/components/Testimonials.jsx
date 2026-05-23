import React from 'react'

const testimonials = [
  {
    name: 'Abena K.',
    initials: 'AK',
    text: "Ordered banana bread for my office and everyone loved it! The Oreo flavour is absolutely amazing. Will definitely pre-order again.",
    item: 'Banana Bread – Oreo',
  },
  {
    name: 'Kofi A.',
    initials: 'KA',
    text: "Got a bento cake for my wife's birthday. Becky was so responsive and the cake was beautiful and delicious. Highly recommend!",
    item: 'Bento Cake',
  },
  {
    name: 'Maame O.',
    initials: 'MO',
    text: "The cupcakes were a hit at our family gathering. Red velvet is my new favourite. Easy ordering process and on time delivery.",
    item: 'Cupcakes – Red Velvet',
  },
]

const Testimonials = () => {
  return (
    <section className='py-20' style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className='mx-auto max-w-7xl px-6'>
        <p
          className='uppercase font-bold text-xs tracking-widest mb-4'
          style={{ color: 'var(--button-color)', letterSpacing: '0.15em' }}
        >
          Reviews
        </p>
        <h2 className='font-serif font-bold text-4xl md:text-5xl' style={{ color: 'var(--dark-text)' }}>
          What customers say
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-12'>
          {testimonials.map((t) => (
            <div
              key={t.name}
              className='rounded-xl border p-6 flex flex-col gap-4'
              style={{ backgroundColor: 'var(--footer-bg)', borderColor: 'var(--border-color)' }}
            >
              {/* Stars */}
              <div className='flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: 'var(--button-color)' }}>★</span>
                ))}
              </div>

              <p className='text-base leading-relaxed italic flex-1' style={{ color: 'var(--body-text)' }}>
                "{t.text}"
              </p>

              <div className='flex items-center gap-3 pt-2 border-t' style={{ borderColor: 'var(--border-color)' }}>
                <div
                  className='w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0'
                  style={{ backgroundColor: 'var(--border-color)', color: 'var(--dark-text)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className='font-bold text-sm' style={{ color: 'var(--dark-text)' }}>{t.name}</p>
                  <p className='text-xs' style={{ color: 'var(--button-color)' }}>{t.item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
