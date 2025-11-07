import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = ({ language }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const featuresRef = useRef(null)

  const translations = {
    zh: {
      title: '關於我',
      subtitle: '攝影風格與理念',
      description: '我是一位擁有15年專業攝影經驗的攝影師，致力於通過鏡頭捕捉人生中最珍貴的時刻。我的攝影風格融合了當代美學和經典技巧，為每一個客戶提供獨特而富有藝術性的視角。',
      features: [
        { title: '專業素養', desc: '運用最新的設備與技術，確保每一張照片都達到業界最高標準。' },
        { title: '創意視角', desc: '不同於常規的構圖方式，我尋求在平凡中發現非凡的美。' },
        { title: '客戶導向', desc: '每一個項目都是獨特的，我重視與客戶的溝通與合作。' },
      ],
    },
    en: {
      title: 'About Me',
      subtitle: 'Photography Style & Philosophy',
      description: 'With 15 years of professional photography experience, I am dedicated to capturing the most precious moments in life through my lens. My photography style combines contemporary aesthetics with classic techniques.',
      features: [
        { title: 'Professional Excellence', desc: 'Using the latest equipment and techniques to ensure every photo meets industry standards.' },
        { title: 'Creative Vision', desc: 'Seeking to find the extraordinary in the ordinary through unconventional composition.' },
        { title: 'Client-Focused', desc: 'Every project is unique, and I value communication and collaboration with clients.' },
      ],
    },
  }

  const t = translations[language]

  useEffect(() => {
    // Set initial state
    gsap.set([titleRef.current, descriptionRef.current], { opacity: 0, y: 30 })
    
    const featureItems = featuresRef.current?.querySelectorAll('.feature-item')
    gsap.set(featureItems, { opacity: 0, y: 30 })

    // Animate title when section comes into view
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

    // Animate description
    gsap.to(descriptionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center+=100',
        markers: false,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      delay: 0.2,
    })

    // Animate features one by one
    if (featureItems && featureItems.length > 0) {
      featureItems.forEach((feature, idx) => {
        gsap.to(feature, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center+=100',
            markers: false,
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3 + idx * 0.1,
          ease: 'power2.out',
        })
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <p className="text-lg font-medium">{language === 'zh' ? '攝影師照片' : 'Photographer Photo'}</p>
            </div>
          </div>

          {/* Text */}
          <div ref={descriptionRef}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.description}</p>
          </div>
        </div>

        {/* Features */}
        <div ref={featuresRef} className="grid md:grid-cols-3 gap-8">
          {t.features.map((feature, idx) => (
            <div
              key={idx}
              className="feature-item bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
