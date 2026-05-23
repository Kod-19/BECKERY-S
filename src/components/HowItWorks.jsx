import React from 'react'

const steps = [
  {
    num: '1',
    title: 'Choose items',
    desc: 'Select menu items, sizes, flavors, and quantities from the menu.',
  },
  {
    num: '2',
    title: 'Confirm by phone',
    desc: 'Message or call 0557443430 / 0507011697 to confirm your order.',
  },
  {
    num: '3',
    title: 'Validate payment',
    desc: 'Payment confirms your slot and order details — no slot without payment.',
  },
  {
    num: '4',
    title: 'Pick up or deliver',
    desc: 'Collect near Madina UN (Amanth Beauty Parlor) or arrange delivery.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className='py-20' style={{ backgroundColor: 'var(--footer-bg)' }}>
      <div className='mx-auto max-w-7xl px-6'>
        <p
          className='uppercase font-bold text-xs tracking-widest mb-4'
          style={{ color: 'var(--button-color)', letterSpacing: '0.15em' }}
        >
          Preorder flow
        </p>
        <h2 className='font-serif font-bold text-4xl md:text-5xl' style={{ color: 'var(--dark-text)' }}>
          How ordering works
        </h2>
        <p className='mt-4 text-lg max-w-xl' style={{ color: 'var(--body-text)' }}>
          Simple steps make the business easier to run and make customers more confident placing orders.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12'>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className='rounded-xl border p-6 relative'
              style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className='hidden lg:block absolute top-10 left-full w-5 h-0.5 z-10'
                  style={{ backgroundColor: 'var(--border-color)' }}
                />
              )}

              <div
                className='w-10 h-10 rounded-full flex items-center justify-center font-bold text-base mb-4'
                style={{ backgroundColor: 'var(--button-color)', color: 'var(--footer-bg)' }}
              >
                {step.num}
              </div>
              <h3 className='font-serif font-bold text-xl mb-2' style={{ color: 'var(--dark-text)' }}>
                {step.title}
              </h3>
              <p className='text-sm leading-relaxed' style={{ color: 'var(--body-text)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className='mt-12 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6'
          style={{ backgroundColor: 'var(--bg-color)', border: '1px solid var(--border-color)' }}
        >
          <div>
            <h3 className='font-serif font-bold text-2xl md:text-3xl' style={{ color: 'var(--dark-text)' }}>
              Ready to pre-order?
            </h3>
            <p className='mt-2 text-base' style={{ color: 'var(--body-text)' }}>
              Browse the menu, then call or message Becky to confirm.
            </p>
          </div>
          <div className='flex flex-wrap gap-3'>
            <a
              href="tel:+233557443430"
              className='py-3 px-6 rounded-lg font-bold text-sm hover:opacity-90 transition-all hover:scale-105 duration-150'
              style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
            >
              Call 0557 443 430
            </a>
            <a
              href="https://wa.me/233557443430"
              target="_blank"
              rel="noreferrer"
              className='py-3 px-6 rounded-lg font-bold text-sm border hover:scale-105 duration-150 transition-all'
              style={{ borderColor: 'var(--border-color)', color: 'var(--dark-text)', backgroundColor: 'transparent' }}
            >
              WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
