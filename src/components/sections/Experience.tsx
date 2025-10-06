
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionContent, Card } from '../ui';
import { experiencesAr, experiencesEn } from '../../data/portfolio';
import type { Experience as ExperienceType } from '../../types';

const Experience: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Get experiences based on current language
  const experiences = i18n.language === 'ar' ? experiencesAr : experiencesEn;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const calculateDuration = (startDate: string, endDate?: string) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth());
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) {
      return `${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
    }
  };

  const ExperienceCard: React.FC<{ experience: ExperienceType; index: number }> = ({ 
    experience, 
    index 
  }) => (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline connector */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-700 rounded-full border-4 border-white shadow-lg z-10"></div>
      
      {/* Experience card */}
      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
        <Card hover padding="lg" className="relative">
          {/* Company logo placeholder */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">
                  {experience.company.split(' ').map(word => word[0]).join('').substring(0, 2)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-900">
                  {experience.position}
                </h3>
                <div className="flex items-center space-x-2 text-primary-700 font-semibold">
                  <span>{experience.company}</span>
                  {experience.companyUrl && (
                    <ExternalLink size={16} className="hover:text-primary-800 cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              experience.type === 'full-time' ? 'bg-green-100 text-green-800' :
              experience.type === 'part-time' ? 'bg-blue-100 text-blue-800' :
              experience.type === 'contract' ? 'bg-purple-100 text-purple-800' :
              experience.type === 'internship' ? 'bg-orange-100 text-orange-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {experience.type.replace('-', ' ')}
            </span>
          </div>

          {/* Date and location */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-secondary-600">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>
                {formatDate(experience.startDate)} - {experience.endDate ? formatDate(experience.endDate) : 'Present'}
              </span>
              <span className="text-secondary-400">
                ({calculateDuration(experience.startDate, experience.endDate)})
              </span>
            </div>
            {experience.location && (
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-secondary-700 mb-4">
            {experience.description}
          </p>

          {/* Responsibilities */}
          <div className="mb-4">
            <h4 className="font-semibold text-secondary-900 mb-2">Key Responsibilities:</h4>
            <ul className="space-y-1">
              {experience.responsibilities.map((responsibility, idx) => (
                <motion.li
                  key={idx}
                  className="text-sm text-secondary-700 flex items-start space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
                >
                  <span className="text-primary-700 mt-1">•</span>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          {experience.achievements && experience.achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="font-semibold text-secondary-900 mb-2 flex items-center space-x-1">
                <Award size={16} className="text-primary-700" />
                <span>Key Achievements:</span>
              </h4>
              <ul className="space-y-1">
                {experience.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="text-sm text-secondary-700 flex items-start space-x-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 + 0.3 }}
                  >
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-secondary-900 mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 + 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );

  return (
    <Section id="experience" background="white">
      <SectionHeader>
        <SectionTitle gradient>{t('experience.title')}</SectionTitle>
        <SectionSubtitle>
          {t('experience.subtitle')}
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-secondary-300 h-full hidden lg:block"></div>
          
          {/* Experience items */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.id} 
                experience={experience} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
};

export default Experience;
