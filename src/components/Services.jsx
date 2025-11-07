import { motion } from 'framer-motion'
import { FaCamera, FaHeart, FaBriefcase, FaStar } from 'react-icons/fa'

const Services = ({ language }) => {
  const translations = {
    zh: {
      title: '服務項目',
      subtitle: '提供多種專業攝影服務',
      wedding: '婚禮攝影',
      weddingDesc: '捕捉你人生中最重要的時刻，記錄每個溫暖的瞬間和幸福的淚水。',
      portrait: '人像攝影',
      portraitDesc: '展現你的獨特氣質和風格，通過光影和構圖呈現最美的自己。',
      commercial: '商業攝影',
      commercialDesc: '為企業品牌打造專業形象，提供產品和活動的高質量拍攝。',
      event: '活動攝影',
      eventDesc: '完整記錄活動全程，捕捉每一個精彩時刻和互動瞬間。',
    },
    en: {
      title: 'Services',
      subtitle: 'Professional Photography Services',
      wedding: 'Wedding Photography',
      weddingDesc: 'Capture the most important moments in your life, recording every warm moment and happy tears.',
      portrait: 'Portrait Photography',
      portraitDesc: 'Showcase your unique personality and style through light, shadow, and composition.',
      commercial: 'Commercial Photography',
      commercialDesc: 'Build professional brand image for businesses and provide high-quality product and event photography.',
      event: 'Event Photography',
      eventDesc: 'Completely record the entire event and capture every exciting moment and interaction.',
    },
  }

  const t = translations[language]

  const services = [
    {
      icon: FaHeart,
      title: t.wedding,
      description: t.weddingDesc,
      gradient: 'from-red-400 to-pink-600',
    },
    {
      icon: FaCamera,
      title: t.portrait,
      description: t.portraitDesc,
      gradient: 'from-blue-400 to-purple-600',
    },
    {
      icon: FaBriefcase,
      title: t.commercial,
      description: t.commercialDesc,
      gradient: 'from-yellow-400 to-orange-600',
    },
    {
      icon: FaStar,
      title: t.event,
      description: t.eventDesc,
      gradient: 'from-green-400 to-emerald-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{t.subtitle}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center group cursor-pointer overflow-hidden relative"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                  <Icon size={32} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 relative z-10">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 relative z-10">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
