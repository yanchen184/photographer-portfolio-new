import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Footer = ({ language }) => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const socialRef = useRef(null)

  const translations = {
    zh: {
      copyright: '© 2024 攝影師工作室。版權所有。',
      followUs: '追蹤我們',
    },
    en: {
      copyright: '© 2024 Photography Studio. All rights reserved.',
      followUs: 'Follow Us',
    },
  }

  const t = translations[language]

  const socialLinks = [
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaInstagram, url: '#', label: 'Instagram' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
    { icon: FaEnvelope, url: 'mailto:photographer@example.com', label: 'Email' },
  ]

  useEffect(() => {
    // Set initial state
    gsap.set(contentRef.current?.querySelectorAll('.footer-column'), { opacity: 0, y: 30 })
    gsap.set(socialRef.current?.querySelectorAll('a'), { opacity: 0, scale: 0.8 })

    // Animate footer columns
    const columns = contentRef.current?.querySelectorAll('.footer-column')
    if (columns && columns.length > 0) {
      columns.forEach((col, idx) => {
        gsap.to(col, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            markers: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: idx * 0.1,
          ease: 'power2.out',
        })
      })
    }

    // Animate social links
    const socialLinks = socialRef.current?.querySelectorAll('a')
    if (socialLinks && socialLinks.length > 0) {
      socialLinks.forEach((link, idx) => {
        gsap.to(link, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            markers: false,
          },
          opacity: 1,
          scale: 1,
          duration: 0.5,
          delay: 0.3 + idx * 0.08,
          ease: 'back.out',
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <footer ref={sectionRef} className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div ref={contentRef} className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="footer-column">
            <h3 className="text-2xl font-bold mb-4">攝影師</h3>
            <p className="text-gray-400">
              {language === 'zh'
                ? '專業攝影師致力於捕捉人生中最珍貴的時刻。'
                : 'Professional photographer dedicated to capturing the most precious moments in life.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-4">
              {language === 'zh' ? '快速連結' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {language === 'zh' ? '關於' : 'About'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {language === 'zh' ? '作品集' : 'Portfolio'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {language === 'zh' ? '聯絡' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="text-lg font-bold mb-4">
              {language === 'zh' ? '聯絡資訊' : 'Contact Info'}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="tel:+886344343838" className="hover:text-white transition-colors">
                  +886 3 434 3838
                </a>
              </li>
              <li>
                <a href="mailto:photographer@example.com" className="hover:text-white transition-colors">
                  photographer@example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h4 className="text-center text-lg font-bold mb-6">{t.followUs}</h4>
          <div ref={socialRef} className="flex justify-center gap-8">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon
              return (
                <a
                  key={idx}
                  href={social.url}
                  title={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
