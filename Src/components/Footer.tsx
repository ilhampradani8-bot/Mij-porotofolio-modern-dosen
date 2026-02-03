import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { t } = useLanguage();
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const services = [
    t('services.1.title'),
    t('services.2.title'),
    t('services.3.title'),
    t('services.4.title'),
  ];

  const socials = [
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Behance', href: '#' },
    { name: 'Twitter', href: '#' },
  ];

  return (
    <footer className={`relative border-t overflow-hidden ${
      isDark 
        ? 'bg-neutral-900 border-neutral-800' 
        : 'bg-neutral-50 border-neutral-200'
    }`}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1 lg:col-span-1"
          >
            <a href="#home" className="inline-block mb-4">
              <span className="text-xl lg:text-2xl font-bold">
                <span className={isDark ? 'text-white' : 'text-neutral-900'}>Ahmad</span>
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Faizal</span>
              </span>
            </a>
            <p className={`text-sm leading-relaxed mb-4 lg:mb-6 ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              {t('footer.tagline')}
            </p>
            
            {/* Decorative Element */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 to-transparent" />
              <span className="text-amber-500 text-sm">✦</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-amber-500 to-transparent" />
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={`font-semibold mb-4 lg:mb-6 text-sm lg:text-base ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              {t('footer.navigation')}
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`text-sm flex items-center gap-2 group transition-colors ${
                      isDark 
                        ? 'text-neutral-400 hover:text-amber-500' 
                        : 'text-neutral-600 hover:text-amber-600'
                    }`}
                  >
                    <span className={`w-0 h-0.5 group-hover:w-3 transition-all duration-300 ${
                      isDark ? 'bg-amber-500' : 'bg-amber-600'
                    }`} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={`font-semibold mb-4 lg:mb-6 text-sm lg:text-base ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              {t('footer.services')}
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className={`text-sm flex items-center gap-2 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    <span className="w-1.5 h-1.5 bg-amber-500/50 rounded-full" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className={`font-semibold mb-4 lg:mb-6 text-sm lg:text-base ${
              isDark ? 'text-white' : 'text-neutral-900'
            }`}>
              {t('footer.connect')}
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className={`text-sm flex items-center gap-2 group transition-colors ${
                      isDark 
                        ? 'text-neutral-400 hover:text-amber-500' 
                        : 'text-neutral-600 hover:text-amber-600'
                    }`}
                  >
                    <span className={`w-0 h-0.5 group-hover:w-3 transition-all duration-300 ${
                      isDark ? 'bg-amber-500' : 'bg-amber-600'
                    }`} />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-4 lg:py-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 ${
          isDark ? 'border-neutral-800' : 'border-neutral-200'
        }`}>
          <p className={`text-xs lg:text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
            © {currentYear} Ahmad Faizal. {t('footer.copyright')}
          </p>
          <p className={`text-xs lg:text-sm flex items-center gap-2 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
            {t('footer.made')}
            <span className="inline-block">🇲🇾</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
