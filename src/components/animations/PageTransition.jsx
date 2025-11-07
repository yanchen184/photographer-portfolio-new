import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Diagonal stripe overlay animation component
const PageTransition = () => {
  const sliderRef = useRef(null)

  useEffect(() => {
    if (!sliderRef.current) return

    // Set initial position - stripe starts from the right
    gsap.set(sliderRef.current, {
      x: '150%',
    })

    // Create animation timeline
    const timeline = gsap.timeline()

    // Red diagonal stripe slides from right to left (2 seconds)
    timeline.to(sliderRef.current, {
      x: '-150%',
      duration: 2,
      ease: 'power3.inOut',
    }, 0)

    // After animation completes, move it completely out of view
    timeline.set(sliderRef.current, {
      pointerEvents: 'none',
      zIndex: -10,
    }, 2)
  }, [])

  return (
    <svg
      ref={sliderRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-auto"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="none"
    >
      {/* Large diagonal red stripe that sweeps left to right */}
      <polygon points="200,0 1600,0 1400,1080 0,1080" fill="#dc2626" />
    </svg>
  )
}

export default PageTransition
