import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// SVG Logos embedded directly - will never break
export const PetronasLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 50" fill="currentColor">
    <text x="10" y="35" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="bold">PETRONAS</text>
  </svg>
);

export const MaybankLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 180 50" fill="currentColor">
    <path d="M15 10 L25 40 L35 20 L45 40 L55 10" stroke="currentColor" strokeWidth="4" fill="none"/>
    <text x="65" y="32" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold">Maybank</text>
  </svg>
);

export const AirAsiaLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 150 50" fill="currentColor">
    <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="bold">AirAsia</text>
  </svg>
);

export const GrabLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 50" fill="currentColor">
    <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="bold">Grab</text>
  </svg>
);

export const AxiataLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 140 50" fill="currentColor">
    <text x="5" y="35" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600">axiata</text>
  </svg>
);

export const CIMBLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 50" fill="currentColor">
    <text x="5" y="35" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="bold">CIMB</text>
  </svg>
);

interface CompanyLogosProps {
  variant?: 'full' | 'compact';
  showLabel?: boolean;
  labelText?: string;
}

export function CompanyLogos({ variant = 'full', showLabel = true, labelText }: CompanyLogosProps) {
  const { isDark } = useTheme();
  
  const logos = [
    { Component: PetronasLogo, name: 'PETRONAS', width: 'w-28' },
    { Component: MaybankLogo, name: 'Maybank', width: 'w-28' },
    { Component: AirAsiaLogo, name: 'AirAsia', width: 'w-24' },
    { Component: GrabLogo, name: 'Grab', width: 'w-20' },
    { Component: AxiataLogo, name: 'Axiata', width: 'w-24' },
    { Component: CIMBLogo, name: 'CIMB', width: 'w-20' },
  ];

  const displayLogos = variant === 'compact' ? logos.slice(0, 4) : logos;

  return (
    <div>
      {showLabel && (
        <p className={`text-sm mb-5 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
          {labelText || '✦ Trusted by leading companies'}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        {displayLogos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ scale: 1.1 }}
            className={`${logo.width} h-8 flex items-center`}
          >
            <logo.Component 
              className={`w-full h-full transition-all ${
                isDark 
                  ? 'text-neutral-400 hover:text-amber-400' 
                  : 'text-neutral-500 hover:text-amber-600'
              }`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Alternative: Using real PNG logos from reliable CDN
export function CompanyLogosImages({ variant = 'full', showLabel = true, labelText }: CompanyLogosProps) {
  const { isDark } = useTheme();
  
  // Using Clearbit Logo API - very reliable
  const logos = [
    { name: 'PETRONAS', url: 'https://logo.clearbit.com/petronas.com', fallback: 'PETRONAS' },
    { name: 'Maybank', url: 'https://logo.clearbit.com/maybank.com', fallback: 'Maybank' },
    { name: 'AirAsia', url: 'https://logo.clearbit.com/airasia.com', fallback: 'AirAsia' },
    { name: 'Grab', url: 'https://logo.clearbit.com/grab.com', fallback: 'Grab' },
    { name: 'Axiata', url: 'https://logo.clearbit.com/axiata.com', fallback: 'Axiata' },
    { name: 'CIMB', url: 'https://logo.clearbit.com/cimb.com', fallback: 'CIMB' },
  ];

  const displayLogos = variant === 'compact' ? logos.slice(0, 4) : logos;

  return (
    <div>
      {showLabel && (
        <p className={`text-sm mb-5 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
          {labelText || '✦ Trusted by leading companies'}
        </p>
      )}
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        {displayLogos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            whileHover={{ scale: 1.1 }}
            className="h-8 flex items-center"
          >
            <img 
              src={logo.url}
              alt={logo.name}
              onError={(e) => {
                // Fallback to text if image fails
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
              className={`h-6 w-auto object-contain transition-all ${
                isDark 
                  ? 'brightness-0 invert opacity-60 hover:opacity-100' 
                  : 'opacity-50 hover:opacity-80'
              }`}
            />
            <span className={`hidden font-bold text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {logo.fallback}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
