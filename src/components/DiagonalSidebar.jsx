import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Fixed diagonal sidebar on the left side - with fade-in animation
const DiagonalSidebar = ({ language, setLanguage }) => {
  const sidebarRef = useRef(null)
  const menuRef = useRef(null)
  const langRef = useRef(null)

  const translations = {
    zh: {
      home: '首頁',
      about: '關於',
      portfolio: '作品集',
      contact: '聯絡',
    },
    en: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
  }

  const t = translations[language]

  const menuItems = [
    { id: 'home', label: t.home, href: '#home' },
    { id: 'about', label: t.about, href: '#about' },
    { id: 'portfolio', label: t.portfolio, href: '#portfolio' },
    { id: 'contact', label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    // Set initial state - sidebar elements start invisible
    gsap.set([sidebarRef.current, menuRef.current, langRef.current], {
      opacity: 0,
    })

    // Create animation timeline that starts after page transition (2 seconds)
    const timeline = gsap.timeline()

    // Fade in the entire sidebar
    timeline.to(sidebarRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, 2)

    // Fade in menu items
    timeline.to(menuRef.current, {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
    }, 2.2)

    // Fade in language switcher
    timeline.to(langRef.current, {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
    }, 2.4)
  }, [])

  return (
    <div 
      ref={sidebarRef}
      className="fixed left-0 top-0 h-screen z-30"
      style={{ opacity: 0 }}
    >
      {/* White diagonal stripe - adjusted to 35vw */}
      <div
        className="absolute inset-0 bg-white"
        style={{
          width: '35vw',
          clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
        }}
      ></div>

      {/* Navigation menu content */}
      <div className="relative z-10 h-full flex flex-col justify-between items-start py-20 px-12" style={{ width: '35vw' }}>
        {/* Navigation links */}
        <nav ref={menuRef} className="flex flex-col gap-10 flex-1 justify-start pt-12" style={{ opacity: 0 }}>
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-gray-900 font-bold hover:text-red-600 transition-colors duration-300"
              style={{
                fontSize: '16px',
                fontWeight: '700',
                letterSpacing: '1px',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Language Switcher - at bottom */}
        <div ref={langRef} className="flex gap-3 w-full" style={{ opacity: 0 }}>
          <button
            onClick={() => setLanguage('zh')}
            className={`px-4 py-2 text-xs font-bold rounded-sm transition-colors duration-300 ${
              language === 'zh'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            style={{ fontSize: '11px' }}
          >
            中文
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 text-xs font-bold rounded-sm transition-colors duration-300 ${
              language === 'en'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            style={{ fontSize: '11px' }}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiagonalSidebar
