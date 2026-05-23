import { useState } from 'react'
import customCakeImage from '../assets/images/menu_birthday_cake.jpg'

const CustomCakes = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [size, setSize] = useState('')
  const [flavour, setFlavour] = useState('')
  const [delivery, setDelivery] = useState('Pickup')
  const [budget, setBudget] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hello! I'd like to inquire about a custom cake.\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nSize: ${size}\nFlavour/Theme: ${flavour}\nPickup/Delivery: ${delivery}\nBudget: ${budget}`
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/233507011697?text=${encoded}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section
      id="custom-cakes"
      className='py-20'
      style={{ backgroundColor: 'var(--dark-text)' }}
    >
      <div className='mx-auto max-w-7xl px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <p
              className='uppercase font-bold text-xs tracking-widest mb-6'
              style={{ color: '#F2D79B', letterSpacing: '0.15em' }}
            >
              Custom cakes
            </p>
            <h2 className='font-serif font-bold text-4xl md:text-5xl leading-tight' style={{ color: '#FFF9EE' }}>
              Make birthdays and events feel personal
            </h2>
            <p className='mt-6 text-lg leading-relaxed' style={{ color: '#EEDFC9' }}>
              A dedicated inquiry section turns cake requests into useful details: size, date, flavour, theme, pickup or delivery, and budget. This reduces back-and-forth and helps Becky confirm orders faster.
            </p>

            <div className='mt-8 rounded-xl overflow-hidden border shadow-sm' style={{ borderColor: 'rgba(255, 249, 238, 0.22)' }}>
              <img
                src={customCakeImage}
                alt="Decorated custom cake from Beckery's"
                className='w-full h-72 object-cover'
              />
            </div>

            <div className='mt-10 flex flex-col gap-4'>
              {[
                'Bento cakes & bento cake + cupcake bundles',
                '6 inch and 8 inch round cakes',
                'Custom decorations, themes & messages',
                'Available for birthdays, graduations & gifting',
              ].map((point) => (
                <div key={point} className='flex items-start gap-3'>
                  <span className='mt-1 text-sm' style={{ color: 'var(--button-color)' }}>*</span>
                  <p className='text-base' style={{ color: '#EEDFC9' }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div
                className='rounded-xl border p-8 text-center'
                style={{ backgroundColor: 'var(--footer-bg)', borderColor: 'var(--border-color)' }}
              >
                <p className='text-sm font-bold uppercase tracking-wider mb-3' style={{ color: 'var(--button-color)', letterSpacing: '0.12em' }}>
                  Request received
                </p>
                <h3 className='font-serif font-bold text-2xl mb-2' style={{ color: 'var(--dark-text)' }}>
                  Inquiry sent!
                </h3>
                <p style={{ color: 'var(--body-text)' }}>Becky will confirm your order shortly via WhatsApp.</p>
                <button
                  className='mt-6 py-2.5 px-6 rounded-lg font-bold text-sm'
                  style={{ backgroundColor: 'var(--dark-text)', color: 'var(--footer-bg)' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='rounded-xl border flex flex-col gap-4 p-6'
                style={{ backgroundColor: 'var(--footer-bg)', borderColor: 'var(--border-color)' }}
              >
                <p className='text-xs font-bold uppercase tracking-wider' style={{ color: 'var(--button-color)', letterSpacing: '0.12em' }}>
                  Cake inquiry
                </p>

                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold' style={{ color: 'var(--body-text)' }}>Your name</label>
                    <input
                      className='w-full h-10 rounded-lg border px-3 text-sm focus:outline-none focus:ring-2'
                      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--dark-text)' }}
                      placeholder='e.g. Ama Mensah'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold' style={{ color: 'var(--body-text)' }}>Phone number</label>
                    <input
                      className='w-full h-10 rounded-lg border px-3 text-sm focus:outline-none'
                      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--dark-text)' }}
                      placeholder='0XX XXX XXXX'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {[
                  { label: 'Event date', placeholder: 'e.g. 20 Aug 2025', val: date, set: setDate },
                  { label: 'Cake size', placeholder: 'e.g. 8 inch round, bento', val: size, set: setSize },
                  { label: 'Flavour & theme', placeholder: 'e.g. chocolate, floral / elegant', val: flavour, set: setFlavour },
                  { label: 'Budget (optional)', placeholder: 'e.g. 200 GHS', val: budget, set: setBudget },
                ].map((field) => (
                  <div key={field.label} className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold' style={{ color: 'var(--body-text)' }}>{field.label}</label>
                    <input
                      className='w-full h-10 rounded-lg border px-3 text-sm focus:outline-none'
                      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-color)', color: 'var(--dark-text)' }}
                      placeholder={field.placeholder}
                      value={field.val}
                      onChange={(e) => field.set(e.target.value)}
                    />
                  </div>
                ))}

                <div className='flex flex-col gap-1.5'>
                  <label className='text-xs font-bold' style={{ color: 'var(--body-text)' }}>Pickup or delivery?</label>
                  <div className='flex gap-3'>
                    {['Pickup', 'Delivery'].map((opt) => (
                      <button
                        type='button'
                        key={opt}
                        onClick={() => setDelivery(opt)}
                        className='flex-1 h-10 rounded-lg border text-sm font-bold transition-all'
                        style={{
                          borderColor: delivery === opt ? 'var(--button-color)' : 'var(--border-color)',
                          color: delivery === opt ? 'var(--button-color)' : 'var(--body-text)',
                          backgroundColor: delivery === opt ? '#FFF9EE' : 'var(--bg-color)',
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type='submit'
                  className='w-full py-3 rounded-lg font-bold text-sm mt-1 hover:opacity-90 transition-all'
                  style={{ backgroundColor: 'var(--button-color)', color: 'var(--dark-text)' }}
                >
                  Send inquiry via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomCakes
