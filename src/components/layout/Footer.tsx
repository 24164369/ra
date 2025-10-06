
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import type { SocialLink } from '../../types';

const socialLinks: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/yourusername', username: 'yourusername' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/yourprofile', username: 'yourprofile' },
  { platform: 'twitter', url: 'https://twitter.com/yourusername', username: 'yourusername' },
  { platform: 'email', url: 'mailto:rmathsana64@gmail.com', username: 'rmathsana64@gmail.com' },
];

const getSocialIcon = (platform: SocialLink['platform']) => {
  const iconProps = { size: 20 };
  
  switch (platform) {
    case 'github':
      return <Github {...iconProps} />;
    case 'linkedin':
      return <Linkedin {...iconProps} />;
    case 'twitter':
      return <Twitter {...iconProps} />;
    case 'email':
      return <Mail {...iconProps} />;
    default:
      return null;
  }
};

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="section-padding container-max-width">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold">{t('footer.name')}</h3>
              <p className="text-secondary-300 max-w-sm">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getSocialIcon(link.platform)}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold">{t('footer.quickLinks')}</h4>
              <nav className="flex flex-col space-y-2">
                {[
                  { key: 'home', id: 'home' },
                  { key: 'about', id: 'about' },
                  { key: 'experience', id: 'experience' },
                  { key: 'portfolio', id: 'portfolio' },
                  { key: 'contact', id: 'contact' }
                ].map((item) => (
                  <motion.button
                    key={item.key}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-secondary-300 hover:text-white transition-colors duration-200 text-left"
                    whileHover={{ x: 4 }}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-semibold">{t('footer.getInTouch')}</h4>
              <div className="space-y-2 text-secondary-300">
                <p>{t('footer.readyToWork')}</p>
                <motion.a
                  href="mailto:rmathsana64@gmail.com"
                  className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail size={16} />
                  <span>rmathsana64@gmail.com</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              className="text-secondary-400 text-sm flex items-center space-x-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span>© {currentYear} {t('footer.name')}. {t('footer.madeWith')}</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={14} className="text-red-500 fill-current" />
              </motion.span>
              <span>{t('footer.andReact')}</span>
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              className="text-secondary-400 hover:text-white transition-colors duration-200 text-sm"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t('footer.backToTop')} ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
