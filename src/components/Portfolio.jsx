import { useState } from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';
import { generateStaggerDelays } from '../utils/animationUtils';

const Portfolio = ({ language }) => {
  const [ref, isVisible] = useScrollFadeIn();
  const [activeCategory, setActiveCategory] = useState('all');

  const translations = {
    zh: {
      title: '作品集',
      description: '用鏡頭記錄世界的美麗',
      all: '全部作品',
      wedding: '婚禮',
      corporate: '企業',
      portrait: '肖像',
      landscape: '風景',
      viewAll: '查看所有作品'
    },
    en: {
      title: 'Portfolio',
      description: 'Capturing the beauty of the world through the lens',
      all: 'All Works',
      wedding: 'Wedding',
      corporate: 'Corporate',
      portrait: 'Portrait',
      landscape: 'Landscape',
      viewAll: 'View All Works'
    }
  };

  const t = translations[language] || translations.zh;

  // Sample portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: language === 'zh' ? '婚禮時刻' : 'Wedding Moment',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop',
      description: language === 'zh' ? '捕捉愛情的美好瞬間' : 'Capturing beautiful moments of love'
    },
    {
      id: 2,
      title: language === 'zh' ? '企業活動' : 'Corporate Event',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop',
      description: language === 'zh' ? '專業商業攝影' : 'Professional business photography'
    },
    {
      id: 3,
      title: language === 'zh' ? '肖像攝影' : 'Portrait',
      category: 'portrait',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
      description: language === 'zh' ? '氣質人物寫真' : 'Elegant portrait'
    },
    {
      id: 4,
      title: language === 'zh' ? '風景大片' : 'Landscape',
      category: 'landscape',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
      description: language === 'zh' ? '自然之美' : 'Beauty of nature'
    },
    {
      id: 5,
      title: language === 'zh' ? '產品展示' : 'Product',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=500&h=500&fit=crop',
      description: language === 'zh' ? '商品視覺呈現' : 'Product visualization'
    },
    {
      id: 6,
      title: language === 'zh' ? '活動紀錄' : 'Event',
      category: 'wedding',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop',
      description: language === 'zh' ? '精彩活動記錄' : 'Event coverage'
    }
  ];

  const categories = [
    { id: 'all', label: t.all },
    { id: 'wedding', label: t.wedding },
    { id: 'corporate', label: t.corporate },
    { id: 'portrait', label: t.portrait },
    { id: 'landscape', label: t.landscape }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const delays = generateStaggerDelays(filteredItems.length, 'normal');

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Category Filter with Trapezoid Style */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                activeCategory === category.id
                  ? 'text-white'
                  : 'text-gray-600 hover:text-amber-500'
              }`}
            >
              {/* Trapezoid background for active button */}
              {activeCategory === category.id && (
                <div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 -skew-x-12 z-0"
                  style={{
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
                  }}
                ></div>
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid with Trapezoid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-1000 transform ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? delays[index] : '0ms'
              }}
            >
              {/* Trapezoid Card Container */}
              <div
                className="relative h-80 overflow-hidden cursor-pointer"
                style={{
                  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'
                }}
              >
                {/* Image with Hover Effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
