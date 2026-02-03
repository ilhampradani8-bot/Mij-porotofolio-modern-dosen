import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Portfolio() {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const projects = [
    {
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      gradient: 'from-amber-500 to-orange-600',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      size: 'large',
    },
    {
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      gradient: 'from-violet-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=500&fit=crop',
      size: 'small',
    },
    {
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      gradient: 'from-emerald-500 to-teal-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop',
      size: 'small',
    },
    {
      title: t('portfolio.project4.title'),
      category: t('portfolio.project4.category'),
      gradient: 'from-rose-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop',
      size: 'medium',
    },
    {
      title: t('portfolio.project5.title'),
      category: t('portfolio.project5.category'),
      gradient: 'from-blue-500 to-cyan-600',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=450&fit=crop',
      size: 'medium',
    },
    {
      title: t('portfolio.project6.title'),
      category: t('portfolio.project6.category'),
      gradient: 'from-amber-600 to-yellow-500',
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop',
      size: 'large',
    },
  ];

  return (
    <section id="portfolio" className={`relative py-20 lg:py-32 overflow-hidden ${
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
            <span className="text-amber-500 text-sm font-medium">{t('portfolio.label')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{t('portfolio.title.1')}</span>
            <span className={isDark ? 'text-white' : 'text-neutral-900'}> {t('portfolio.title.2')}</span>
          </h2>

          <p className={`max-w-2xl mx-auto text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style with 3D */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.map((project, index) => (
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
              className={`group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer ${
                project.size === 'large' ? 'md:col-span-2 aspect-[2/1]' :
                project.size === 'medium' ? 'aspect-[4/3]' : 'aspect-square'
              }`}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Background Image */}
              <img 
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-5 lg:p-8 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  style={{ transform: 'translateZ(30px)' }}
                >
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-2 lg:mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="px-5 lg:px-6 py-2.5 lg:py-3 bg-white text-neutral-900 font-semibold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm lg:text-base">
                    {t('portfolio.view')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 lg:w-8 lg:h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />
            </motion.div>
          ))}
        </div>

        {/* 3D Floating Elements */}
        <div className="hidden lg:block">
          <motion.div
            className={`absolute top-40 right-10 w-20 h-20 rounded-2xl ${
              isDark ? 'bg-amber-500/10' : 'bg-amber-200/30'
            }`}
            animate={{ 
              rotateX: [0, 20, 0],
              rotateY: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          />
          <motion.div
            className={`absolute bottom-40 left-10 w-16 h-16 rounded-xl ${
              isDark ? 'bg-purple-500/10' : 'bg-purple-200/30'
            }`}
            animate={{ 
              rotateX: [0, -15, 0],
              rotateY: [0, 25, 0],
              y: [0, 15, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </div>
    </section>
  );
}
