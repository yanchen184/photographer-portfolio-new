import { useState } from 'react'
import PageTransition from './components/animations/PageTransition'
import DiagonalSidebar from './components/DiagonalSidebar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState('zh')

  return (
    <div className="bg-white text-gray-900">
      {/* Page transition animation - shows on page load */}
      <PageTransition />

      {/* Fixed diagonal sidebar - always visible on the left with language switcher */}
      <DiagonalSidebar language={language} setLanguage={setLanguage} />

      {/* Hero section with fade-in after transition */}
      <Hero language={language} />

      {/* Other page sections */}
      <About language={language} />
      <Portfolio language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  )
}

export default App
