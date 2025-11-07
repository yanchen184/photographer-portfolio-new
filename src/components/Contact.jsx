import { useState, useRef, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)

  const translations = {
    zh: {
      title: '聯絡我們',
      subtitle: '有任何問題？我很樂意聽到您的聲音',
      phone: '電話',
      email: '郵件',
      address: '地址',
      form: {
        name: '姓名',
        email: '電子郵件',
        phone: '電話號碼',
        message: '訊息',
        submit: '發送訊息',
        success: '訊息已發送！我會盡快回覆您。',
      },
    },
    en: {
      title: 'Get In Touch',
      subtitle: 'Have any questions? I\'d love to hear from you',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        phone: 'Phone Number',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent! I\'ll get back to you soon.',
      },
    },
  }

  const t = translations[language]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: t.phone,
      content: '+886 3 434 3838',
    },
    {
      icon: FaEnvelope,
      title: t.email,
      content: 'photographer@example.com',
    },
    {
      icon: FaMapMarkerAlt,
      title: t.address,
      content: language === 'zh' ? '台灣 台北市' : 'Taipei, Taiwan',
    },
  ]

  useEffect(() => {
    // Set initial state
    gsap.set(titleRef.current, { opacity: 0, y: 30 })
    gsap.set(contactInfoRef.current?.querySelectorAll('.contact-card'), { opacity: 0, y: 30 })
    gsap.set(formRef.current, { opacity: 0, y: 30 })

    // Animate title
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        markers: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    })

    // Animate contact info cards
    const contactCards = contactInfoRef.current?.querySelectorAll('.contact-card')
    if (contactCards && contactCards.length > 0) {
      contactCards.forEach((card, idx) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            markers: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2 + idx * 0.1,
          ease: 'power2.out',
        })
      })
    }

    // Animate form
    gsap.to(formRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        markers: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.5,
      ease: 'power2.out',
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Contact Info */}
        <div ref={contactInfoRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <div key={idx} className="contact-card bg-gray-50 p-8 rounded-lg text-center">
                <Icon className="text-3xl text-gray-900 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div ref={formRef} className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  {t.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                {t.form.phone}
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-bold text-gray-900 mb-2">
                {t.form.message}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
            >
              {t.form.submit}
            </button>

            {/* Success Message */}
            {submitted && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                {t.form.success}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
