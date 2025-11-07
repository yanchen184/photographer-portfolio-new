import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = ({ language }) => {
  const titleRef = useRef(null)
  const dividerRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  const translations = {
    zh: {
      title: '捕捉每一刻的美麗',
      subtitle: '專業攝影師致力於記錄人生中最珍貴的時刻',
      cta: '查看作品集',
      contact: '聯絡我',
    },
    en: {
      title: 'Capture Every Moment',
      subtitle: 'Professional photographer dedicated to capturing the most precious moments in life',
      cta: 'View Portfolio',
      contact: 'Contact',
    },
  }

  const t = translations[language]

  useEffect(() => {
    // Set initial state - all elements start invisible
    gsap.set([titleRef.current, dividerRef.current, subtitleRef.current, ctaRef.current, imageRef.current], {
      opacity: 0,
    })

    // Create animation timeline that starts after page transition (2 seconds)
    const timeline = gsap.timeline()

    // Staggered fade-in sequence
    const startDelay = 2

    // 1. Title fades in first
    timeline.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
    }, startDelay)

    // 2. Divider line fades in
    timeline.to(dividerRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    }, startDelay + 0.2)

    // 3. Subtitle fades in
    timeline.to(subtitleRef.current, {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
    }, startDelay + 0.35)

    // 4. CTA buttons fade in
    timeline.to(ctaRef.current, {
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out',
    }, startDelay + 0.55)

    // 5. Hero image fades in (with slight scale)
    timeline.to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, startDelay + 0.3)
  }, [])

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Full width container */}
      <div className="absolute inset-0 flex">
        {/* Left content - positioned over white diagonal sidebar area */}
        <div 
          className="relative flex flex-col justify-center pl-12 pr-8 py-20 z-20"
          style={{ width: '28vw', maxWidth: '28vw' }}
        >
          {/* Title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
            style={{ transform: 'translateY(40px)' }}
          >
            {t.title}
          </h1>

          {/* Decorative divider line */}
          <div
            ref={dividerRef}
            className="w-20 h-1 bg-red-600 mb-6"
          ></div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-sm md:text-base text-gray-700 mb-10 leading-relaxed"
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex gap-4 flex-wrap">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-red-600 text-white font-semibold rounded-sm hover:bg-red-700 transition-colors duration-300 text-sm"
            >
              {t.cta}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-sm hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm"
            >
              {t.contact}
            </a>
          </div>
        </div>

        {/* Right content - Image section (full remaining width, full height) */}
        <div
          className="flex-1 h-screen relative overflow-hidden"
          style={{
            marginLeft: 'calc(-28vw * 0.3)', // Image extends under the diagonal edge - adjusted for 28vw
          }}
        >
          {/* Image with background */}
          <div
            ref={imageRef}
            className="w-full h-full flex items-center justify-center relative bg-cover bg-center"
            style={{
              transform: 'scale(1.05)',
              backgroundImage: 'url(https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=1200&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Dark overlay to improve contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 to-gray-900/10"></div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-red-900 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
    </section>
  )
}

export default Hero
