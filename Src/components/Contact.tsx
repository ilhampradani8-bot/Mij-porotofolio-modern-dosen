import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export function Contact() {
  const { t, language } = useLanguage();
  const { isDark } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const contactInfo = [
    { 
      label: t('contact.info.email'), 
      value: 'hello@ahmadfaizal.my', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      href: 'mailto:hello@ahmadfaizal.my'
    },
    { 
      label: t('contact.info.phone'), 
      value: '+60 12-345 6789', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: 'https://wa.me/60123456789'
    },
    { 
      label: t('contact.info.location'), 
      value: 'Kuala Lumpur, Malaysia', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      href: '#'
    },
  ];

  const socials = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Behance', url: '#' },
    { name: 'Dribbble', url: '#' },
  ];

  return (
    <section id="contact" className={`relative py-20 lg:py-32 overflow-hidden ${
      isDark ? 'bg-neutral-950' : 'bg-white'
    }`}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-amber-500/5' : 'bg-amber-200/40'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] ${
          isDark ? 'bg-amber-600/5' : 'bg-amber-100/50'
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
            <span className="text-amber-500 text-sm font-medium">{t('contact.label')}</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">{t('contact.title.1')}</span>
            <span className={isDark ? 'text-white' : 'text-neutral-900'}> {t('contact.title.2')}</span>
          </h2>

          <p className={`max-w-2xl mx-auto text-sm lg:text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6 lg:space-y-8"
          >
            <div>
              <h3 className={`text-lg lg:text-xl font-semibold mb-4 lg:mb-6 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                {t('contact.info.title')}
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-all group ${
                      isDark 
                        ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/30' 
                        : 'bg-neutral-50 border-neutral-200 hover:border-amber-500/50 hover:shadow-lg'
                    }`}
                  >
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isDark 
                        ? 'bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-neutral-900' 
                        : 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className={`text-xs lg:text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                        {info.label}
                      </p>
                      <p className={`font-medium text-sm lg:text-base ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full py-3.5 lg:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all"
            >
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {language === 'en' ? 'Chat on WhatsApp' : 'Chat di WhatsApp'}
            </motion.a>

            {/* Social Links */}
            <div>
              <h3 className={`text-lg lg:text-xl font-semibold mb-4 lg:mb-6 ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>
                {t('contact.social')}
              </h3>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {socials.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full border text-xs lg:text-sm font-medium transition-colors ${
                      isDark 
                        ? 'bg-neutral-900 border-neutral-800 hover:border-amber-500/50 text-neutral-300 hover:text-amber-500' 
                        : 'bg-white border-neutral-200 hover:border-amber-500/50 text-neutral-600 hover:text-amber-600'
                    }`}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form 
              onSubmit={handleSubmit} 
              className={`p-6 lg:p-8 rounded-2xl lg:rounded-3xl border ${
                isDark 
                  ? 'bg-neutral-900/50 border-neutral-800' 
                  : 'bg-white border-neutral-200 shadow-xl'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
                <div>
                  <label className={`block text-sm mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none text-sm lg:text-base ${
                      isDark 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500/50' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-amber-500'
                    }`}
                    placeholder="Ahmad Faizal"
                  />
                </div>
                <div>
                  <label className={`block text-sm mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    required
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none text-sm lg:text-base ${
                      isDark 
                        ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500/50' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-amber-500'
                    }`}
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>

              <div className="mb-4 lg:mb-6">
                <label className={`block text-sm mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none text-sm lg:text-base ${
                    isDark 
                      ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500/50' 
                      : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-amber-500'
                  }`}
                  placeholder="Projek Penjenamaan"
                />
              </div>

              <div className="mb-6 lg:mb-8">
                <label className={`block text-sm mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none resize-none text-sm lg:text-base ${
                    isDark 
                      ? 'bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-amber-500/50' 
                      : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-amber-500'
                  }`}
                  placeholder="Ceritakan tentang projek anda..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 lg:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 text-sm lg:text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {t('contact.form.sending')}
                  </>
                ) : (
                  <>
                    {t('contact.form.send')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
