import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Real company logos
const clientLogos = [
  { name: 'Petronas', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Petronas_2013_logo.svg' },
  { name: 'Maybank', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Maybank_logo.svg' },
  { name: 'AirAsia', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/AirAsia_New_Logo.svg' },
  { name: 'Grab', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Grab_Logo.svg' },
  { name: 'Axiata', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Axiata_logo.svg' },
  { name: 'CIMB', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/CIMB_logo.svg' },
];

export function About() {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();

  const values = [
    { icon: '◆', title: t('about.values.1.title'), desc: t('about.values.1.desc') },
    { icon: '◇', title: t('about.values.2.title'), desc: t('about.values.2.desc') },
    { icon: '○', title: t('about.values.3.title'), desc: t('about.values.3.desc') },
    { icon: '□', title: t('about.values.4.title'), desc: t('about.values.4.desc') },
  ];

  const achievements = [
    { number: '2016', label: language === 'en' ? 'Started' : 'Bermula', icon: '🚀' },
    { number: '50+', label: language === 'en' ? 'Global' : 'Global', icon: '🌏' },
    { number: '3x', label: language === 'en' ? 'Growth' : 'Pertumbuhan', icon: '📈' },
  ];

  return (
    <section id="about" className={`relative py-20 lg:py-32 overflow-hidden ${
      isDark ? 'bg-neutral-900' : 'bg-white'
    }`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-amber-500/5' : 'bg-amber-200/30'
        }`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
            <span className="text-amber-500 text-sm font-medium">{t('about.label')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className={isDark ? 'text-white' : 'text-neutral-900'}>{t('about.title.1')} </span>
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">{t('about.title.2')}</span>
            <br />
            <span className={isDark ? 'text-white' : 'text-neutral-900'}>{t('about.title.3')}</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 lg:-inset-4 border border-amber-500/20 rounded-3xl" />
              
              {/* Main Photo with 3D Effect */}
              <motion.div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl card-3d"
                whileHover={{ rotateY: 5, rotateX: -3 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=667&fit=crop&crop=face"
                  alt="Ahmad Faizal Working"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Quote on Photo */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className={`backdrop-blur-md border rounded-xl p-4 ${
                    isDark 
                      ? 'bg-neutral-900/90 border-amber-500/20' 
                      : 'bg-white/90 border-amber-500/30'
                  }`}>
                    <p className="text-amber-500 text-sm lg:text-base italic mb-1">
                      "{language === 'en' ? 'Design is how it works.' : 'Reka bentuk adalah cara ia berfungsi.'}"
                    </p>
                    <p className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>— Ahmad Faizal</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Achievement Cards - Desktop Only */}
              <div className="hidden lg:block absolute -right-12 top-8 space-y-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`backdrop-blur-sm border rounded-xl p-3 shadow-lg flex items-center gap-3 animate-float-3d ${
                      isDark 
                        ? 'bg-neutral-800/90 border-amber-500/20' 
                        : 'bg-white/90 border-amber-500/30 shadow-amber-100'
                    }`}
                    style={{ animationDelay: `${index * 2}s` }}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-amber-500 font-bold">{item.number}</p>
                      <p className={`text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Achievement Row */}
              <div className="flex lg:hidden justify-center gap-3 mt-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`border rounded-xl p-3 text-center ${
                      isDark 
                        ? 'bg-neutral-800 border-neutral-700' 
                        : 'bg-neutral-50 border-neutral-200'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <p className="text-amber-500 font-bold text-sm">{item.number}</p>
                    <p className={`text-xs ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:pl-8"
          >
            {/* Bio */}
            <div className="mb-8 lg:mb-10">
              <p className={`text-base lg:text-lg leading-relaxed mb-6 ${
                isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}>
                {t('about.description')}
              </p>
              
              {/* Why Choose Me */}
              <div className={`p-5 lg:p-6 rounded-2xl border ${
                isDark 
                  ? 'bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/20' 
                  : 'bg-gradient-to-br from-amber-50 to-transparent border-amber-200'
              }`}>
                <h3 className={`font-semibold mb-3 flex items-center gap-2 ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                  <span className="text-amber-500">✦</span>
                  {language === 'en' ? 'Why Work With Me?' : 'Mengapa Pilih Saya?'}
                </h3>
                <ul className={`space-y-2 text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {[
                    language === 'en' ? 'Results-driven with proven track record' : 'Berorientasikan hasil dengan rekod terbukti',
                    language === 'en' ? 'Deep understanding of Malaysian markets' : 'Pemahaman mendalam pasaran Malaysia',
                    language === 'en' ? 'Direct communication, no middlemen' : 'Komunikasi terus, tiada orang tengah'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-8 lg:mb-10">
              <h3 className={`text-base lg:text-lg font-semibold mb-4 lg:mb-6 flex items-center gap-2 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                <div className="w-8 h-[2px] bg-amber-500" />
                {t('about.values.title')}
              </h3>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, rotateX: 5, rotateY: -5 }}
                    className={`p-4 lg:p-5 rounded-xl border transition-all group cursor-default tilt-3d ${
                      isDark 
                        ? 'bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800 hover:border-amber-500/30' 
                        : 'bg-neutral-50 border-neutral-200 hover:bg-white hover:border-amber-500/50 hover:shadow-lg'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <span className="text-amber-500 text-2xl group-hover:scale-110 transition-transform inline-block mb-2 lg:mb-3">
                      {value.icon}
                    </span>
                    <h4 className={`font-medium text-sm lg:text-base ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                      {value.title}
                    </h4>
                    <p className={`text-xs lg:text-sm mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 lg:gap-4"
            >
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-neutral-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all text-sm lg:text-base"
              >
                {language === 'en' ? 'Start a Project' : 'Mulakan Projek'}
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#"
                className={`inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 border font-semibold rounded-full transition-all text-sm lg:text-base ${
                  isDark 
                    ? 'border-amber-500/30 text-amber-500 hover:bg-amber-500/10' 
                    : 'border-amber-500 text-amber-600 hover:bg-amber-50'
                }`}
              >
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {language === 'en' ? 'Download CV' : 'Muat Turun CV'}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Clients Logo Bar - Real Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`mt-16 lg:mt-24 pt-8 lg:pt-12 border-t ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}
        >
          <p className={`text-center text-sm mb-6 lg:mb-8 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
            {t('about.clients')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            {clientLogos.map((client, index) => (
              <motion.img
                key={client.name}
                src={client.logo}
                alt={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className={`h-5 lg:h-7 w-auto object-contain transition-all cursor-pointer ${
                  isDark ? 'brightness-0 invert opacity-40 hover:opacity-70' : 'opacity-30 hover:opacity-60'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
