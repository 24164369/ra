
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    
    // Update document direction and language
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-50 border border-primary-300 text-primary-800 hover:bg-primary-100 hover:border-primary-400 transition-all duration-300 font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe size={18} />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'العربية' : 'English'}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
