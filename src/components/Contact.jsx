import React, { useState } from 'react'

const faqs = [
  {
    q: 'How far in advance do I need to pre-order?',
    a: 'We recommend ordering at least 48 hours in advance for standard items and 3–5 days for custom/decorated cakes to ensure freshness and availability.',
  },
  {
    q: 'How does delivery work?',
    a: 'Delivery is available and arranged directly with Becky during the order confirmation. Pricing depends on your location.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'Mobile money (MTN MoMo, Vodafone Cash, AirtelTigo Money) is accepted. Payment must be validated to confirm your order slot.',
  },
  {
    q: 'Can I order a cake with a custom message?',
    a: 'Yes! Custom messages, themes, and decorations are available for decorated cakes. Use the Custom Cakes inquiry form to describe what you need.',
  },
  {
    q: 'Where do I pick up my order?',
    a: 'Collection is near Madina UN, close to Amanth Beauty Parlor. The exact address is shared on order confirmation.',
  },
  {
    q: 'What cake sizes do you offer?',
    a: 'For banana bread: mini, medium, and large. For round cakes: 6 inch and 8 inch. Bento cakes and bento + cupcake bundles are also available.',
  },
]

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className='border-b cursor-pointer'
      style={{ borderColor: 'var(--border-color)' }}
      onClick={() => setOpen(!open)}
    >
      <div className='flex justify-between items-center py-4 gap-4'>
        <p className='font-bold text-base' style={{ color: 'var(--dark-text)' }}>{q}</p>
        <span
          className='flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-transform duration-200'
          style={{
            backgroundColor: 'var(--border-color)',
            color: 'var(--dark-text)',
            transform: open ? 'rotate(45deg)' : 'none',
          }}
        >
          +
        </span>
      </div>
      {open && (
        <p className='pb-4 text-sm leading-relaxed' style={{ color: 'var(--body-text)' }}>
          {a}
        </p>
      )}
    </div>
  )
}

const Contact = () => {
  return (
    <section id="contact" className='py-20' style={{ backgroundColor: 'var(--footer-bg)' }}>
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Left: contact */}
          <div>
            <p
              className='uppercase font-bold text-xs tracking-widest mb-4'
              style={{ color: 'var(--button-color)', letterSpacing: '0.15em' }}
            >
              Contact & location
            </p>
            <h2 className='font-serif font-bold text-4xl md:text-5xl' style={{ color: 'var(--dark-text)' }}>
              Ready to order?
            </h2>
            <p className='mt-4 text-lg' style={{ color: 'var(--body-text)' }}>
              Call, message, or find Beckery's near Madina UN, Accra.
            </p>

            <div className='mt-8 flex flex-col gap-5'>
              {[
                { label: 'Phone / WhatsApp', value: '0557 443 430 / 0507 011 697', href: 'tel:+233557443430' },
                { label: 'Instagram', value: '@beckerys_', href: 'https://instagram.com/beckerys_' },
                { label: 'Location', value: 'Madina UN, near Amanth Beauty Parlor, Accra', href: null },
              ].map((item) => (
                <div
                  key={item.label}
                  className='p-4 rounded-xl border'
                  style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}
                >
                  <p className='text-xs font-bold mb-1' style={{ color: 'var(--button-color)' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className='font-bold text-base hover:opacity-70 transition-opacity'
                      style={{ color: 'var(--dark-text)' }}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className='font-bold text-base' style={{ color: 'var(--dark-text)' }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className='flex flex-wrap gap-3 mt-8'>
              <a
                href="tel:+233557443430"
                className='py-3 px-6 rounded-lg font-bold text-sm hover:opacity-90 transition-all'
                style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
              >
                Call to pre-order
              </a>
              <a
                href="https://wa.me/233557443430"
                target="_blank"
                rel="noreferrer"
                className='py-3 px-6 rounded-lg font-bold text-sm border hover:scale-105 transition-all'
                style={{ borderColor: 'var(--border-color)', color: 'var(--dark-text)', backgroundColor: 'transparent' }}
              >
                WhatsApp →
              </a>
            </div>
          </div>

          {/* Right: FAQ */}
          <div>
            <h3 className='font-serif font-bold text-2xl mb-6' style={{ color: 'var(--dark-text)' }}>
              Frequently asked questions
            </h3>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
