import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

const Contact = ({ language }) => {
  const [ref, isVisible] = useScrollFadeIn();

  const translations = {
    zh: {
      title: '聯絡我們',
      subtitle: '有任何拍攝需求？聯絡我們！',
      phone: '電話',
      facebook: 'Facebook',
      instagram: 'Instagram',
      studio: '工作室地址',
      phoneValue: '+886-2-1234-5678',
      facebookHandle: '@photographer.studio',
      instagramHandle: '@photographer.studio',
      studioValue: '台北市信義區光復路1號',
      followUs: '跟我們聯繫'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Any photography needs? Get in touch!',
      phone: 'Phone',
      facebook: 'Facebook',
      instagram: 'Instagram',
      studio: 'Studio Address',
      phoneValue: '+886-2-1234-5678',
      facebookHandle: '@photographer.studio',
      instagramHandle: '@photographer.studio',
      studioValue: '1 Guangfu Road, Xinyi District, Taipei',
      followUs: 'Connect With Us'
    }
  };

  const t = translations[language] || translations.zh;

  const contactMethods = [
    {
      icon: '📞',
      label: t.phone,
      value: t.phoneValue,
      link: `tel:+886212345678`,
      type: 'phone',
      bgColor: 'from-pink-400 to-pink-500'
    },
    {
      icon: '👍',
      label: t.facebook,
      value: t.facebookHandle,
      link: 'https://facebook.com',
      type: 'social',
      bgColor: 'from-blue-400 to-blue-500'
    },
    {
      icon: '📷',
      label: t.instagram,
      value: t.instagramHandle,
      link: 'https://instagram.com',
      type: 'social',
      bgColor: 'from-purple-400 to-purple-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Three Trapezoid Cards - Horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Trapezoid Card */}
                <a
                  href={method.link}
                  {...(method.type === 'social' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group block h-80 bg-gradient-to-br ${method.bgColor} rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-8 flex flex-col items-center justify-center text-white overflow-hidden relative`}
                  style={{
                    clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)'
                  }}
                >
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {method.label}
                    </h3>
                    <p className="text-lg font-semibold opacity-90 break-words">
                      {method.value}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Google Map Section */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? '450ms' : '0ms'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Left - Address Info with Trapezoid */}
              <div
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 md:p-12 rounded-2xl shadow-lg border-2 border-amber-200 flex flex-col justify-center overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%)'
                }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  {t.studio}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">📍</div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-2">{t.studioValue}</p>
                      <p className="text-gray-700">
                        {language === 'zh' 
                          ? '營業時間：週一至週五 10:00-18:00'
                          : 'Hours: Mon-Fri 10:00-18:00'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mt-8 pt-8 border-t-2 border-amber-200">
                    <div className="text-5xl">☎️</div>
                    <div>
                      <p className="text-gray-600 font-semibold mb-2">{language === 'zh' ? '直接撥號' : 'Call'}</p>
                      <a 
                        href={`tel:+886212345678`}
                        className="text-amber-600 hover:text-amber-700 font-bold text-lg transition-colors"
                      >
                        +886-2-1234-5678
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Google Map with Trapezoid */}
              <div
                className="rounded-2xl shadow-lg overflow-hidden h-96 lg:h-auto border-2 border-amber-200"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)'
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  loading="lazy"
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.0499999999997!2d121.56391!3d25.033889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9d5a5a5a5a5%3A0x0!2sGuangfu%20Rd%2C%20Xinyi%20District%2C%20Taipei!5e0!3m2!1szh-TW!2stw!4v1234567890"
                  title="Photographer Studio Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div
            className={`mt-20 text-center transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              transitionDelay: isVisible ? '600ms' : '0ms'
            }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t.followUs}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {language === 'zh' 
                ? '立即跟我們聯繫，開始你的攝影旅程' 
                : 'Get in touch now and start your photography journey'}
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                f
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                📷
              </a>
              <a
                href="tel:+886212345678"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
              >
                ☎️
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
