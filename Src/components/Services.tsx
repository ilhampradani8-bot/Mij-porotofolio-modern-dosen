import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Services() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const services = [
    { icon: '🎨', title: t('services.1.title'), desc: t('services.1.desc') },
    { icon: '📱', title: t('services.2.title'), desc: t('services.2.desc') },
    { icon: '💻', title: t('services.3.title'), desc: t('services.3.desc') },
    { icon: '📊', title: t('services.4.title'), desc: t('services.4.desc') },
    { icon: '✍️', title: t('services.5.title'), desc: t('services.5.desc') },
    { icon: '💡', title: t('services.6.title'), desc: t('services.6.desc') },
  ];

  const process = [
    t('services.process.1'),
    t('services.process.2'),
    t('services.process.3'),
    t('services.process.4'),
    t('services.process.5'),
  ];

  return (
    <section id="services" className={`relative py-20 lg:py-32 overflow-hidden ${
      isDark ? 'bg-neutral-950' : 'bg-white'
    }`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-amber-500/5' : 'bg-amber-100/50'
        }`} />
      </div>

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
            <span className="text-amber-500 text-sm font-medium">{t('services.label')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className={isDark ? 'text-white' : 'text-neutral-900'}>{t('services.title.1')}</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{t('services.title.2')}</span>
          </h2>

          <p className={`max-w-2xl mx-auto text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
              className={`group relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all duration-500 overflow-hidden ${
                isDark 
                  ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/30' 
                  : 'bg-white border-neutral-200 hover:border-amber-500/50 hover:shadow-xl'
              }`}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                isDark 
                  ? 'bg-gradient-to-br from-amber-500/5 to-transparent' 
                  : 'bg-gradient-to-br from-amber-50 to-transparent'
              }`} />

              <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </span>
                <h3 className={`text-lg lg:text-xl font-bold mt-4 lg:mt-6 mb-2 lg:mb-3 ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm lg:text-base leading-relaxed ${
                  isDark ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                  {service.desc}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute bottom-0 right-0 w-16 lg:w-20 h-16 lg:h-20 border-b border-r rounded-br-2xl lg:rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity ${
                isDark ? 'border-amber-500/20' : 'border-amber-500/30'
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Process - Horizontal Scroll on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <h3 className={`text-xl lg:text-2xl font-bold text-center mb-8 lg:mb-12 ${
            isDark ? 'text-white' : 'text-neutral-900'
          }`}>
            {t('services.process.title')}
          </h3>

          {/* Desktop Process */}
          <div className="hidden md:flex justify-center items-center gap-0">
            {process.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-neutral-900 font-bold text-lg lg:text-xl shadow-lg shadow-amber-500/25">
                    {index + 1}
                  </div>
                  <span className={`mt-3 font-medium text-sm lg:text-base ${
                    isDark ? 'text-white' : 'text-neutral-900'
                  }`}>
                    {step}
                  </span>
                </motion.div>

                {index < process.length - 1 && (
                  <div className="w-12 lg:w-20 xl:w-24 h-0.5 bg-gradient-to-r from-amber-500 to-amber-500/20 mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Process - Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex items-center gap-4 min-w-max">
              {process.map((step, index) => (
                <div key={index} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-neutral-900 font-bold shadow-lg shadow-amber-500/25">
                      {index + 1}
                    </div>
                    <span className={`mt-2 font-medium text-sm whitespace-nowrap ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {step}
                    </span>
                  </motion.div>

                  {index < process.length - 1 && (
                    <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-amber-500/20 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Floating Decorative Elements */}
        <div className="hidden lg:block">
          <motion.div
            className={`absolute top-20 left-10 w-24 h-24 rounded-3xl border ${
              isDark ? 'border-amber-500/10 bg-amber-500/5' : 'border-amber-200 bg-amber-100/30'
            }`}
            animate={{ 
              rotateX: [0, 15, 0],
              rotateY: [0, -15, 0],
              rotateZ: [0, 5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            className={`absolute bottom-20 right-20 w-16 h-16 rounded-2xl border ${
              isDark ? 'border-purple-500/10 bg-purple-500/5' : 'border-purple-200 bg-purple-100/30'
            }`}
            animate={{ 
              rotateX: [0, -20, 0],
              rotateY: [0, 20, 0],
              rotateZ: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </div>
    </section>
  );
}
