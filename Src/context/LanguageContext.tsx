import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bm';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Assalamualaikum, I am',
    'hero.name': 'Ahmad Faizal',
    'hero.title': 'Creative Director & Digital Strategist',
    'hero.description': 'Transforming ideas into stunning digital experiences. Specializing in branding, UI/UX, and digital marketing that resonates with the Malaysian market.',
    'hero.cta.work': 'View My Work',
    'hero.cta.contact': 'Get In Touch',
    'hero.stats.experience': 'Years Experience',
    'hero.stats.projects': 'Projects Completed',
    'hero.stats.clients': 'Happy Clients',
    'hero.stats.awards': 'Awards Won',
    'hero.scroll': 'Scroll to explore',
    'hero.available': 'Available for Projects',
    
    // About
    'about.label': 'About Me',
    'about.title.1': 'Blending',
    'about.title.2': 'Creativity',
    'about.title.3': 'with Strategy',
    'about.description': 'With over 8 years of experience in the creative industry, I have helped more than 100 local and international brands build their digital identity. My approach combines Eastern aesthetics with modern design to create unique and memorable work.',
    'about.values.title': 'Core Values',
    'about.values.1.title': 'Excellence',
    'about.values.1.desc': 'Every project is crafted to perfection',
    'about.values.2.title': 'Innovation',
    'about.values.2.desc': 'Always exploring new creative boundaries',
    'about.values.3.title': 'Integrity',
    'about.values.3.desc': 'Transparency and trust in every dealing',
    'about.values.4.title': 'Impact',
    'about.values.4.desc': 'Creating work that drives real results',
    'about.clients': 'Trusted By Leading Brands',
    
    // Portfolio
    'portfolio.label': 'Portfolio',
    'portfolio.title.1': 'Featured',
    'portfolio.title.2': 'Works',
    'portfolio.description': 'A collection of projects that demonstrate creativity and innovation in digital design and branding.',
    'portfolio.view': 'View Project',
    'portfolio.project1.title': 'Warisan Bank Rebrand',
    'portfolio.project1.category': 'Branding',
    'portfolio.project2.title': 'Seri Angkasa App',
    'portfolio.project2.category': 'UI/UX Design',
    'portfolio.project3.title': 'Melaka Heritage',
    'portfolio.project3.category': 'Web Design',
    'portfolio.project4.title': 'Nusantara Coffee',
    'portfolio.project4.category': 'Brand Identity',
    'portfolio.project5.title': 'Tech Summit KL',
    'portfolio.project5.category': 'Event Branding',
    'portfolio.project6.title': 'Batik Modern',
    'portfolio.project6.category': 'Product Design',
    
    // Services
    'services.label': 'Services',
    'services.title.1': 'How I Can',
    'services.title.2': 'Help You',
    'services.description': 'Comprehensive digital services to elevate your brand presence and accelerate business growth.',
    'services.1.title': 'Brand Strategy',
    'services.1.desc': 'Develop a unique brand identity that differentiates you in the market',
    'services.2.title': 'UI/UX Design',
    'services.2.desc': 'Design beautiful and functional digital experiences',
    'services.3.title': 'Web Development',
    'services.3.desc': 'Build responsive and fast websites using latest technology',
    'services.4.title': 'Digital Marketing',
    'services.4.desc': 'Effective marketing strategies for business growth',
    'services.5.title': 'Content Creation',
    'services.5.desc': 'Quality content that captures attention and builds trust',
    'services.6.title': 'Consulting',
    'services.6.desc': 'Strategic guidance to achieve your business goals',
    'services.process.title': 'Work Process',
    'services.process.1': 'Discovery',
    'services.process.2': 'Strategy',
    'services.process.3': 'Design',
    'services.process.4': 'Development',
    'services.process.5': 'Launch',
    
    // Testimonials
    'testimonials.label': 'Testimonials',
    'testimonials.title.1': 'What Clients',
    'testimonials.title.2': 'Say',
    'testimonials.description': 'Feedback from clients who have worked with me on various projects.',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title.1': "Let's",
    'contact.title.2': 'Collaborate',
    'contact.description': 'Have an interesting project? Let\'s discuss how I can help elevate your brand to the next level.',
    'contact.info.title': 'Contact Info',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.social': 'Follow Me',
    
    // Footer
    'footer.tagline': 'Crafting digital experiences that inspire and create impact.',
    'footer.navigation': 'Navigation',
    'footer.services': 'Services',
    'footer.connect': 'Connect',
    'footer.copyright': 'All rights reserved.',
    'footer.made': 'Made with ❤️ in Malaysia',
  },
  bm: {
    // Navbar
    'nav.home': 'Utama',
    'nav.about': 'Tentang',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Perkhidmatan',
    'nav.contact': 'Hubungi',
    
    // Hero
    'hero.greeting': 'Assalamualaikum, saya',
    'hero.name': 'Ahmad Faizal',
    'hero.title': 'Pengarah Kreatif & Pakar Strategi Digital',
    'hero.description': 'Mentransformasi idea kepada pengalaman digital yang memukau. Pakar dalam penjenamaan, UI/UX, dan pemasaran digital yang relevan dengan pasaran Malaysia.',
    'hero.cta.work': 'Lihat Karya Saya',
    'hero.cta.contact': 'Hubungi Saya',
    'hero.stats.experience': 'Tahun Pengalaman',
    'hero.stats.projects': 'Projek Selesai',
    'hero.stats.clients': 'Klien Berpuas Hati',
    'hero.stats.awards': 'Anugerah Dimenangi',
    'hero.scroll': 'Skrol untuk meneroka',
    'hero.available': 'Tersedia untuk Projek',
    
    // About
    'about.label': 'Tentang Saya',
    'about.title.1': 'Menggabungkan',
    'about.title.2': 'Kreativiti',
    'about.title.3': 'dengan Strategi',
    'about.description': 'Dengan lebih 8 tahun pengalaman dalam industri kreatif, saya telah membantu lebih 100 jenama tempatan dan antarabangsa membina identiti digital mereka. Pendekatan saya menggabungkan estetika Timur dengan reka bentuk moden untuk menghasilkan karya yang unik dan berkesan.',
    'about.values.title': 'Nilai Teras',
    'about.values.1.title': 'Kecemerlangan',
    'about.values.1.desc': 'Setiap projek dihasilkan dengan sempurna',
    'about.values.2.title': 'Inovasi',
    'about.values.2.desc': 'Sentiasa meneroka sempadan kreativiti baru',
    'about.values.3.title': 'Integriti',
    'about.values.3.desc': 'Ketelusan dan kepercayaan dalam setiap urusan',
    'about.values.4.title': 'Impak',
    'about.values.4.desc': 'Menghasilkan karya yang memberi hasil sebenar',
    'about.clients': 'Dipercayai Jenama Terkemuka',
    
    // Portfolio
    'portfolio.label': 'Portfolio',
    'portfolio.title.1': 'Karya',
    'portfolio.title.2': 'Pilihan',
    'portfolio.description': 'Koleksi projek yang menunjukkan kreativiti dan inovasi dalam reka bentuk digital dan penjenamaan.',
    'portfolio.view': 'Lihat Projek',
    'portfolio.project1.title': 'Penjenamaan Semula Bank Warisan',
    'portfolio.project1.category': 'Penjenamaan',
    'portfolio.project2.title': 'Aplikasi Seri Angkasa',
    'portfolio.project2.category': 'Reka Bentuk UI/UX',
    'portfolio.project3.title': 'Warisan Melaka',
    'portfolio.project3.category': 'Reka Bentuk Web',
    'portfolio.project4.title': 'Kopi Nusantara',
    'portfolio.project4.category': 'Identiti Jenama',
    'portfolio.project5.title': 'Sidang Kemuncak Teknologi KL',
    'portfolio.project5.category': 'Penjenamaan Acara',
    'portfolio.project6.title': 'Batik Moden',
    'portfolio.project6.category': 'Reka Bentuk Produk',
    
    // Services
    'services.label': 'Perkhidmatan',
    'services.title.1': 'Bagaimana Saya',
    'services.title.2': 'Boleh Membantu',
    'services.description': 'Perkhidmatan digital komprehensif untuk meningkatkan kehadiran jenama dan mempercepatkan pertumbuhan perniagaan anda.',
    'services.1.title': 'Strategi Jenama',
    'services.1.desc': 'Membangunkan identiti jenama unik yang membezakan anda di pasaran',
    'services.2.title': 'Reka Bentuk UI/UX',
    'services.2.desc': 'Mereka bentuk pengalaman digital yang cantik dan berfungsi',
    'services.3.title': 'Pembangunan Web',
    'services.3.desc': 'Membina laman web responsif dan pantas menggunakan teknologi terkini',
    'services.4.title': 'Pemasaran Digital',
    'services.4.desc': 'Strategi pemasaran berkesan untuk pertumbuhan perniagaan',
    'services.5.title': 'Penciptaan Kandungan',
    'services.5.desc': 'Kandungan berkualiti yang menarik perhatian dan membina kepercayaan',
    'services.6.title': 'Perundingan',
    'services.6.desc': 'Bimbingan strategik untuk mencapai matlamat perniagaan anda',
    'services.process.title': 'Proses Kerja',
    'services.process.1': 'Penemuan',
    'services.process.2': 'Strategi',
    'services.process.3': 'Reka Bentuk',
    'services.process.4': 'Pembangunan',
    'services.process.5': 'Pelancaran',
    
    // Testimonials
    'testimonials.label': 'Testimoni',
    'testimonials.title.1': 'Apa Kata',
    'testimonials.title.2': 'Klien',
    'testimonials.description': 'Maklum balas daripada klien yang telah bekerjasama dengan saya dalam pelbagai projek.',
    
    // Contact
    'contact.label': 'Hubungi',
    'contact.title.1': 'Jom',
    'contact.title.2': 'Berkolaborasi',
    'contact.description': 'Ada projek menarik? Mari berbincang bagaimana saya boleh membantu mengangkat jenama anda ke tahap seterusnya.',
    'contact.info.title': 'Maklumat Hubungan',
    'contact.info.email': 'Emel',
    'contact.info.phone': 'Telefon',
    'contact.info.location': 'Lokasi',
    'contact.form.name': 'Nama Penuh',
    'contact.form.email': 'Alamat Emel',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Mesej',
    'contact.form.send': 'Hantar Mesej',
    'contact.form.sending': 'Menghantar...',
    'contact.social': 'Ikuti Saya',
    
    // Footer
    'footer.tagline': 'Mencipta pengalaman digital yang memberi inspirasi dan impak.',
    'footer.navigation': 'Navigasi',
    'footer.services': 'Perkhidmatan',
    'footer.connect': 'Hubungan',
    'footer.copyright': 'Hak cipta terpelihara.',
    'footer.made': 'Dibuat dengan ❤️ di Malaysia',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bm');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bm' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
