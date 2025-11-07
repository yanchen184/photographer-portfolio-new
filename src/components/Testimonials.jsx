import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const Testimonials = ({ language }) => {
  const translations = {
    zh: {
      title: '客戶評價',
      subtitle: '來自真實客戶的心聲',
    },
    en: {
      title: 'Testimonials',
      subtitle: 'What Our Clients Say',
    },
  }

  const t = translations[language]

  const testimonials = [
    {
      name: language === 'zh' ? '李太太' : 'Mrs. Lee',
      role: language === 'zh' ? '新娘' : 'Bride',
      content: language === 'zh'
        ? '非常感謝攝影師的專業和用心。婚禮那天的照片完美地記錄了我們的幸福時刻，每一張都令人驚艷。'
        : 'Thank you so much for your professionalism and dedication. The wedding photos perfectly captured our happiness, every single shot is stunning.',
      rating: 5,
      avatar: 'from-purple-400 to-pink-600',
    },
    {
      name: language === 'zh' ? '王先生' : 'Mr. Wang',
      role: language === 'zh' ? '企業經理' : 'Business Manager',
      content: language === 'zh'
        ? '公司產品拍攝效果超出預期，專業的角度和高質量的後期處理，大大提升了我們的品牌形象。'
        : 'The product photography exceeded our expectations. Professional angles and high-quality post-processing significantly improved our brand image.',
      rating: 5,
      avatar: 'from-blue-400 to-cyan-600',
    },
    {
      name: language === 'zh' ? '陳小姐' : 'Miss Chen',
      role: language === 'zh' ? '模特兒' : 'Model',
      content: language === 'zh'
        ? '人像拍攝中深深感受到攝影師的專業素養和創意思維。每個角度都經過精心設計，效果完美。'
        : 'Experienced the photographer\'s professionalism and creative thinking in portrait sessions. Every angle is carefully designed and perfectly executed.',
      rating: 5,
      avatar: 'from-green-400 to-emerald-600',
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
    <section className="py-20 bg-white">
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

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-lg p-8 shadow-lg relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={20} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic relative">
                <span className="text-4xl text-purple-600 absolute -left-3 -top-3">"</span>
                {testimonial.content}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.avatar}`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Name & Role */}
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
