import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// Fixed diagonal sidebar on the left side - with fade-in animation
const DiagonalSidebar = ({ language, setLanguage }) => {
  const sidebarRef = useRef(null)
  const menuRef = useRef(null)
  const langRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

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
    <>
      {/* Desktop Sidebar */}
      <div 
        ref={sidebarRef}
        className="hidden md:block fixed left-0 top-0 h-screen z-30"
        style={{ opacity: 0 }}
      >
        {/* White diagonal stripe */}
        <div
          className="absolute inset-0 bg-white"
          style={{
            width: '28vw',
            clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
          }}
        ></div>

        {/* Navigation menu content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start py-20 px-24" style={{ width: '28vw' }}>
          {/* Navigation links - Left aligned */}
          <nav ref={menuRef} className="flex flex-col gap-8 text-left" style={{ opacity: 0 }}>
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-900 font-bold hover:text-amber-600 transition-colors duration-300 transform hover:scale-110"
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  lineHeight: '1.2',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language Switcher - at bottom left */}
          <div ref={langRef} className="flex gap-4 mt-16 absolute bottom-12 left-24" style={{ opacity: 0 }}>
            <button
              onClick={() => setLanguage('zh')}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 ${
                language === 'zh'
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{ fontSize: '16px', fontWeight: '700' }}
            >
              中文
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-110 ${
                language === 'en'
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{ fontSize: '16px', fontWeight: '700' }}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 p-4 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Logo / Title */}
        <h1 className="text-xl font-bold text-gray-900">攝影師</h1>

        {/* Language Switcher */}
        <div className="flex gap-2">
          <button
            onClick={() => setLanguage('zh')}
            className={`px-3 py-1 text-sm font-bold rounded transition-all ${
              language === 'zh'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            中
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 text-sm font-bold rounded transition-all ${
              language === 'en'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            E
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40 p-4">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-900 font-bold hover:text-amber-600 transition-colors py-2 text-lg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default DiagonalSidebar
