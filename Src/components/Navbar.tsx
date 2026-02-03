import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark 
              ? 'bg-neutral-950/90 backdrop-blur-xl border-b border-amber-500/10'
              : 'bg-white/90 backdrop-blur-xl border-b border-amber-500/20 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl md:text-2xl font-bold">
                <span className={isDark ? 'text-white' : 'text-neutral-900'}>Ahmad</span>
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">Faizal</span>
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm transition-colors group ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </motion.a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2 md:p-2.5 rounded-full transition-all ${
                  isDark 
                    ? 'bg-neutral-800 hover:bg-neutral-700 text-amber-500' 
                    : 'bg-neutral-100 hover:bg-neutral-200 text-amber-600'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                onClick={toggleLanguage}
                className={`relative flex items-center px-1 py-1 rounded-full border transition-all duration-300 ${
                  isDark 
                    ? 'bg-neutral-900 border-neutral-800 hover:border-amber-500/50'
                    : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-sm'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative flex items-center">
                  <div
                    className={`relative z-10 px-2 md:px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                      language === 'en'
                        ? 'text-neutral-900'
                        : isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    EN
                  </div>
                  <div
                    className={`relative z-10 px-2 md:px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 ${
                      language === 'bm'
                        ? 'text-neutral-900'
                        : isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    BM
                  </div>
                  <motion.div
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                    initial={false}
                    animate={{ x: language === 'en' ? 0 : '100%' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                </div>
              </motion.button>

              {/* Desktop CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
              >
                {t('hero.cta.contact')}
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 6 : 0,
                    }}
                    className="w-6 h-0.5 bg-amber-500 rounded-full origin-center"
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className="w-6 h-0.5 bg-amber-500 rounded-full"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -6 : 0,
                    }}
                    className="w-6 h-0.5 bg-amber-500 rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className={`absolute inset-0 ${
              isDark ? 'bg-neutral-950/98' : 'bg-white/98'
            } backdrop-blur-xl`}>
              <div className="flex flex-col items-center justify-center h-full pt-16 pb-8 px-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`py-4 text-2xl font-light transition-colors ${
                      isDark ? 'text-neutral-300 hover:text-amber-500' : 'text-neutral-700 hover:text-amber-600'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                
                <motion.a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 font-semibold rounded-full"
                >
                  {t('hero.cta.contact')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
