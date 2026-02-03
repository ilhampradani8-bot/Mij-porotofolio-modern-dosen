import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Testimonials() {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = language === 'bm' ? [
    {
      name: 'Dato\' Seri Ahmad Razali',
      position: 'CEO, Warisan Holdings',
      content: 'Faizal bukan sekadar pereka, beliau adalah pemikir strategik. Kerja penjenamaan semula yang beliau lakukan untuk syarikat kami telah mengubah sepenuhnya persepsi pasaran terhadap jenama kami.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      name: 'Puan Siti Nurhaliza',
      position: 'Pengarah Pemasaran, Seri Angkasa',
      content: 'Profesionalisme dan kreativiti Faizal tiada tandingan. Aplikasi yang beliau reka untuk kami menerima pelbagai anugerah dan meningkatkan penglibatan pengguna sebanyak 300%.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Encik Muhammad Hafiz',
      position: 'Pengasas, Kopi Nusantara',
      content: 'Dari identiti jenama hingga laman web, Faizal membantu kami membina jenama dari awal. Kini Kopi Nusantara dikenali di seluruh Malaysia.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ] : [
    {
      name: 'Dato\' Seri Ahmad Razali',
      position: 'CEO, Warisan Holdings',
      content: 'Faizal is not just a designer, he is a strategic thinker. The rebranding work he did for our company has completely transformed the market\'s perception of our brand.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      name: 'Puan Siti Nurhaliza',
      position: 'Marketing Director, Seri Angkasa',
      content: 'Faizal\'s professionalism and creativity are unmatched. The app he designed for us received multiple awards and increased user engagement by 300%.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      name: 'Encik Muhammad Hafiz',
      position: 'Founder, Kopi Nusantara',
      content: 'From brand identity to website, Faizal helped us build our brand from scratch. Now Kopi Nusantara is recognized throughout Malaysia.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  return (
    <section className={`relative py-20 lg:py-32 overflow-hidden ${
      isDark ? 'bg-neutral-900' : 'bg-neutral-50'
    }`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
            isDark ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-200'
          }`}>
            <span className="w-2 h-2 bg-amber-500 rounded-full" />
            <span className="text-amber-500 text-sm font-medium">{t('testimonials.label')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className={isDark ? 'text-white' : 'text-neutral-900'}>{t('testimonials.title.1')}</span>
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"> {t('testimonials.title.2')}</span>
          </h2>

          <p className={`max-w-2xl mx-auto text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonials Carousel with 3D Effect */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative p-6 md:p-10 lg:p-14 rounded-2xl lg:rounded-3xl border ${
              isDark 
                ? 'bg-neutral-800/50 border-neutral-700' 
                : 'bg-white border-neutral-200 shadow-xl'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Quote Icon */}
            <div className={`absolute top-6 left-6 lg:top-8 lg:left-8 text-5xl lg:text-6xl font-serif ${
              isDark ? 'text-amber-500/20' : 'text-amber-500/30'
            }`}>
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4 lg:mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <p className={`text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 lg:mb-8 relative z-10 ${
              isDark ? 'text-white' : 'text-neutral-800'
            }`}>
              "{testimonials[activeIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[activeIndex].avatar}
                alt={testimonials[activeIndex].name}
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-amber-500/30"
              />
              <div>
                <h4 className={`font-semibold text-sm lg:text-base ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                  {testimonials[activeIndex].name}
                </h4>
                <p className={`text-xs lg:text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>

            {/* Decorative Corner */}
            <div className={`absolute bottom-0 right-0 w-16 lg:w-24 h-16 lg:h-24 border-b-2 border-r-2 rounded-br-2xl lg:rounded-br-3xl ${
              isDark ? 'border-amber-500/20' : 'border-amber-500/30'
            }`} />
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-6 lg:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 lg:h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-amber-500 w-6 lg:w-8'
                    : isDark 
                      ? 'bg-neutral-700 hover:bg-neutral-600 w-2.5 lg:w-3' 
                      : 'bg-neutral-300 hover:bg-neutral-400 w-2.5 lg:w-3'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none">
            <button
              onClick={() => setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className={`pointer-events-auto -translate-x-4 lg:-translate-x-16 w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center transition-colors ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700 hover:border-amber-500/50 text-white hover:text-amber-500' 
                  : 'bg-white border-neutral-200 hover:border-amber-500/50 text-neutral-700 hover:text-amber-500 shadow-lg'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className={`pointer-events-auto translate-x-4 lg:translate-x-16 w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center transition-colors ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700 hover:border-amber-500/50 text-white hover:text-amber-500' 
                  : 'bg-white border-neutral-200 hover:border-amber-500/50 text-neutral-700 hover:text-amber-500 shadow-lg'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
