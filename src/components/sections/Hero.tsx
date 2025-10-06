import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download, ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui';
import { personalInfo, socialLinks } from '../../data/portfolio';
import type { SocialLink } from '../../types';

const getSocialIcon = (platform: SocialLink['platform']) => {
  const iconProps = { size: 24 };
  
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

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-50 pt-16">
      <div className="section-padding container-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary-700 font-semibold text-lg tracking-wide">{t('hero.greeting')}</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl font-display font-bold text-secondary-900 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('hero.name')}
            </motion.h1>

            {/* Title */}
            <motion.h2
              className="text-2xl md:text-3xl font-display font-semibold gradient-text tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('hero.title')}
            </motion.h2>

            {/* Bio */}
            <motion.p
              className="text-lg text-secondary-600 max-w-2xl font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {t('hero.description')}
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-primary-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                >
                  {getSocialIcon(link.platform)}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToContact}
              >
                {t('hero.getInTouch')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/resume.pdf"
                target="_blank"
              >
                <Download size={20} className="mr-2" />
                {t('hero.downloadResume')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full blur-2xl opacity-15 scale-110"></div>
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl ring-4 ring-primary-100">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // Placeholder when no image is provided
                  <div className="w-full h-full bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-secondary-600 hover:text-primary-700 transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
