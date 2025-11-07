import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const About = ({ language }) => {
  const [ref, isVisible] = useScrollFadeIn();

  const translations = {
    zh: {
      title: '關於我',
      description: '我是一位擁有15年專業攝影經驗的攝影師，致力於通過鏡頭捕捉人生中最珍貴的時刻。我的攝影風格融合了當代美學和經典技巧，為每一個客戶提供獨特而富有藝術性的視角。',
      projects: '500+',
      projectsLabel: '完成專案',
      experience: '15+',
      experienceLabel: '年經驗',
      rating: '4.9★',
      ratingLabel: '客戶評分',
      learnMore: '了解更多'
    },
    en: {
      title: 'About Me',
      description: 'With 15 years of professional photography experience, I am dedicated to capturing the most precious moments in life through my lens. My photography style combines contemporary aesthetics with classic techniques.',
      projects: '500+',
      projectsLabel: 'Completed Projects',
      experience: '15+',
      experienceLabel: 'Years Experience',
      rating: '4.9★',
      ratingLabel: 'Client Rating',
      learnMore: 'Learn More'
    }
  };

  const t = translations[language] || translations.zh;

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Main Content with Trapezoid Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Trapezoid Shape with Image */}
          <div
            className={`relative transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Trapezoid background */}
            <div className="relative h-96 md:h-[500px]">
              {/* Trapezoid shape using clip-path */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              ></div>

              {/* Image overlay */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1606216174052-f3d5395c-89ac-43de-b635-b773526b9034?w=600&h=700&fit=crop"
                  alt={language === 'zh' ? '攝影師' : 'Photographer'}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Accent trapezoid */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-amber-400 opacity-50"
                style={{
                  clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)'
                }}
              ></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`transition-all duration-1000 transform delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t-2 border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-500">{t.projects}</div>
                  <p className="text-gray-600 text-sm mt-2">{t.projectsLabel}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-500">{t.experience}</div>
                  <p className="text-gray-600 text-sm mt-2">{t.experienceLabel}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-500">{t.rating}</div>
                  <p className="text-gray-600 text-sm mt-2">{t.ratingLabel}</p>
                </div>
              </div>

              {/* CTA Button */}
              <button className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                {t.learnMore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
