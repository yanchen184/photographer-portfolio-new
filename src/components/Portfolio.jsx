import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Portfolio = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const sectionRef = useRef(null)

  const translations = {
    zh: {
      title: '作品集',
      subtitle: '精選作品展示',
      all: '全部',
      wedding: '婚禮',
      portrait: '人像',
      commercial: '商業',
    },
    en: {
      title: 'Portfolio',
      subtitle: 'Featured Works',
      all: 'All',
      wedding: 'Wedding',
      portrait: 'Portrait',
      commercial: 'Commercial',
    },
  }

  const t = translations[language]

  const portfolioItems = [
    { id: 1, category: 'wedding', title: language === 'zh' ? '婚禮系列 #1' : 'Wedding #1', bgColor: 'bg-pink-100' },
    { id: 2, category: 'portrait', title: language === 'zh' ? '人像系列 #1' : 'Portrait #1', bgColor: 'bg-blue-100' },
    { id: 3, category: 'commercial', title: language === 'zh' ? '商業系列 #1' : 'Commercial #1', bgColor: 'bg-yellow-100' },
    { id: 4, category: 'wedding', title: language === 'zh' ? '婚禮系列 #2' : 'Wedding #2', bgColor: 'bg-purple-100' },
    { id: 5, category: 'portrait', title: language === 'zh' ? '人像系列 #2' : 'Portrait #2', bgColor: 'bg-green-100' },
    { id: 6, category: 'commercial', title: language === 'zh' ? '商業系列 #2' : 'Commercial #2', bgColor: 'bg-red-100' },
  ]

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  useEffect(() => {
    // Animate items on scroll
    const items = sectionRef.current?.querySelectorAll('.portfolio-item')
    if (items && items.length > 0) {
      items.forEach((item, idx) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            markers: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: idx * 0.05,
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [filteredItems])

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {['all', 'wedding', 'portrait', 'commercial'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded transition-all font-medium ${
                selectedCategory === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              {t[cat]}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`portfolio-item ${item.bgColor} rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-64 flex items-center justify-center cursor-pointer group opacity-0 translate-y-10`}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
