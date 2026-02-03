import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { CompanyLogos } from './CompanyLogos';

export function Hero() {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  return (
    <section id="home" className={`relative min-h-screen overflow-hidden ${
      isDark ? 'bg-neutral-950' : 'bg-gradient-to-br from-neutral-50 via-amber-50/30 to-neutral-100'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-72 md:w-96 h-72 md:h-96 rounded-full blur-3xl ${
          isDark ? 'bg-amber-500/10' : 'bg-amber-300/20'
        }`} />
        <div className={`absolute bottom-20 right-10 w-64 md:w-80 h-64 md:h-80 rounded-full blur-3xl ${
          isDark ? 'bg-yellow-500/5' : 'bg-yellow-300/15'
        }`} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Mobile Layout - Photo First, Clean View */}
        <div className="lg:hidden flex flex-col pt-20">
          {/* Hero Photo - Full Width Mobile */}
          <motion.div 
            className="relative px-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-sm">
              {/* Main Photo */}
              <motion.div
                className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=667&fit=crop&crop=face"
                  alt="Ahmad Faizal - Professional Portrait"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Name Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div 
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h1 className="text-2xl font-bold text-white">{t('hero.name')}</h1>
                    <p className="text-amber-400 text-sm">{t('hero.title')}</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Badge - Top Right */}
              <motion.div
                className="absolute -top-2 -right-2 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
              >
                <span className="text-2xl">🏆</span>
                <p className="text-neutral-900 text-xs font-bold mt-1">15+</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Content */}
          <motion.div 
            className="px-6 py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-500 text-xs font-medium">{t('hero.available')}</span>
            </div>

            {/* Description */}
            <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <motion.a 
                href="#portfolio" 
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-900 font-bold rounded-full text-center flex items-center justify-center gap-2"
              >
                {t('hero.cta.work')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a 
                href="#contact" 
                whileTap={{ scale: 0.98 }}
                className={`flex-1 px-6 py-3.5 border-2 font-bold rounded-full text-center ${
                  isDark 
                    ? 'border-amber-500/50 text-amber-400' 
                    : 'border-amber-500 text-amber-600'
                }`}
              >
                {t('hero.cta.contact')}
              </motion.a>
            </div>

            {/* Stats Grid - 2x2 Mobile */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { number: '8+', label: t('hero.stats.experience'), icon: '📅' },
                { number: '150+', label: t('hero.stats.projects'), icon: '📁' },
                { number: '80+', label: t('hero.stats.clients'), icon: '👥' },
                { number: '12', label: t('hero.stats.awards'), icon: '🏅' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`text-center p-4 rounded-2xl border tilt-3d ${
                    isDark 
                      ? 'bg-neutral-900/50 border-neutral-800' 
                      : 'bg-white/80 border-neutral-200 shadow-sm'
                  }`}
                >
                  <span className="text-lg">{stat.icon}</span>
                  <div className="text-xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trusted By - Mobile */}
            <div className={`pt-6 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
              <CompanyLogos 
                variant="compact" 
                labelText={language === 'en' ? '✦ Trusted by leading companies' : '✦ Dipercayai syarikat terkemuka'}
              />
            </div>
          </motion.div>
        </div>

        {/* Desktop Layout - Split Screen */}
        <div className="hidden lg:flex flex-row min-h-screen">
          {/* LEFT - Photo with 3D Effect */}
          <motion.div 
            className="w-1/2 relative flex items-center justify-center p-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative perspective-1000">
              {/* Decorative Frames */}
              <motion.div 
                className="absolute -inset-6 border-2 border-amber-500/30 rounded-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div 
                className="absolute -inset-12 border border-amber-500/10 rounded-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              />
              
              {/* Main Photo with 3D Tilt */}
              <motion.div
                className="relative w-[380px] h-[500px] rounded-3xl overflow-hidden shadow-2xl card-3d"
                initial={{ opacity: 0, rotateY: -15 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
                whileHover={{ 
                  rotateY: 5, 
                  rotateX: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                  alt="Ahmad Faizal - Professional Portrait"
                  className="w-full h-full object-cover object-top"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
                
                {/* Name Badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <div className={`backdrop-blur-md border rounded-2xl p-5 ${
                    isDark 
                      ? 'bg-neutral-900/80 border-amber-500/20' 
                      : 'bg-white/80 border-amber-500/30'
                  }`}>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {t('hero.name')}
                    </h3>
                    <p className="text-amber-500">{t('hero.title')}</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating 3D Badges */}
              <motion.div
                className={`absolute -right-16 top-8 backdrop-blur-sm border rounded-2xl p-4 shadow-xl animate-float-3d ${
                  isDark 
                    ? 'bg-neutral-900/90 border-amber-500/30' 
                    : 'bg-white/90 border-amber-500/30'
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                style={{ animationDelay: '0s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-neutral-900'}`}>15+</p>
                    <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {language === 'en' ? 'Awards Won' : 'Anugerah'}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`absolute -left-16 bottom-40 backdrop-blur-sm border rounded-2xl p-4 shadow-xl animate-float-3d ${
                  isDark 
                    ? 'bg-neutral-900/90 border-emerald-500/30' 
                    : 'bg-white/90 border-emerald-500/30'
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                style={{ animationDelay: '2s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className={`font-bold text-lg ${isDark ? 'text-white' : 'text-neutral-900'}`}>100%</p>
                    <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {language === 'en' ? 'Satisfaction' : 'Kepuasan'}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Client Avatars */}
              <motion.div
                className={`absolute -right-12 bottom-52 backdrop-blur-sm border rounded-2xl p-3 shadow-xl animate-float-3d ${
                  isDark 
                    ? 'bg-neutral-900/90 border-amber-500/30' 
                    : 'bg-white/90 border-amber-500/30'
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                style={{ animationDelay: '4s' }}
              >
                <div className="flex -space-x-2">
                  {[32, 44, 67, 17].map((id, i) => (
                    <img 
                      key={i}
                      src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${id}.jpg`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-neutral-900 object-cover"
                    />
                  ))}
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-full flex items-center justify-center border-2 border-neutral-900">
                    <span className="text-neutral-900 text-xs font-bold">80+</span>
                  </div>
                </div>
                <p className={`text-xs mt-2 text-center ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  {language === 'en' ? 'Happy Clients' : 'Klien Gembira'}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div 
            className="w-1/2 flex items-center justify-center px-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-xl">
              {/* Available Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-500 text-sm font-medium">{t('hero.available')}</span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-amber-500 font-medium mb-3 text-lg"
              >
                {t('hero.greeting')}
              </motion.p>

              {/* Main Heading */}
              <motion.h1 
                className="text-5xl xl:text-6xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {t('hero.name')}
                </span>
              </motion.h1>

              {/* Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <p className={`text-xl xl:text-2xl font-light ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {t('hero.title')}
                </p>
                <motion.div 
                  className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mt-4"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </motion.div>

              {/* Description */}
              <motion.p 
                className={`text-lg mb-10 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {t('hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a 
                  href="#portfolio" 
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-900 font-bold rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  {t('hero.cta.work')}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a 
                  href="#contact" 
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-8 py-4 border-2 font-bold rounded-full transition-all duration-300 ${
                    isDark 
                      ? 'border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500' 
                      : 'border-amber-500 text-amber-600 hover:bg-amber-500/10'
                  }`}
                >
                  {t('hero.cta.contact')}
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-4 gap-4 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {[
                  { number: '8+', label: t('hero.stats.experience'), icon: '📅' },
                  { number: '150+', label: t('hero.stats.projects'), icon: '📁' },
                  { number: '80+', label: t('hero.stats.clients'), icon: '👥' },
                  { number: '12', label: t('hero.stats.awards'), icon: '🏅' }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className={`text-center p-4 rounded-xl border tilt-3d cursor-default ${
                      isDark 
                        ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/30' 
                        : 'bg-white/80 border-neutral-200 hover:border-amber-500/50 shadow-sm'
                    }`}
                    whileHover={{ y: -5, rotateX: 5, rotateY: -5 }}
                  >
                    <span className="text-xl">{stat.icon}</span>
                    <div className="text-xl xl:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className={`text-xs mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Trusted By - Real Logos */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className={`pt-8 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}
              >
                <CompanyLogos 
                  variant="full" 
                  labelText={language === 'en' ? '✦ Trusted by leading Malaysian companies' : '✦ Dipercayai oleh syarikat terkemuka Malaysia'}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <motion.div 
          className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>{t('hero.scroll')}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-amber-500/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-2.5 bg-amber-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
