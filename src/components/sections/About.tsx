
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionContent, Card } from '../ui';
import { skills, personalInfo } from '../../data/portfolio';
import type { Skill } from '../../types';

const About: React.FC = () => {
  const { t } = useTranslation();

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryNames = {
    frontend: t('skills.categories.frontend'),
    backend: t('skills.categories.backend'),
    tools: 'Tools & DevOps',
    design: 'Design',
    other: 'Other'
  };

  const getLevelColor = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getLevelWidth = (level: Skill['level']) => {
    switch (level) {
      case 'expert':
        return 'w-full';
      case 'advanced':
        return 'w-4/5';
      case 'intermediate':
        return 'w-3/5';
      case 'beginner':
        return 'w-2/5';
      default:
        return 'w-2/5';
    }
  };

  return (
    <Section id="about" background="gray">
      <SectionHeader>
        <SectionTitle gradient>{t('about.title')}</SectionTitle>
        <SectionSubtitle>
          {t('about.subtitle')}
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-secondary-700 leading-relaxed">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
              <p>
                {t('about.description3')}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-600">3+</div>
                <div className="text-secondary-600">{t('about.stats.experience')}</div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-secondary-600">{t('about.stats.projects')}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-2xl blur-2xl opacity-20 scale-110"></div>
              
              {/* Image container */}
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-secondary-900 text-center mb-8">
            {t('skills.title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card hover padding="md">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                    {categoryNames[category as keyof typeof categoryNames] || category}
                  </h4>
                  <div className="space-y-3">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.id}
                        className="space-y-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-secondary-700">
                            {skill.name}
                          </span>
                          <span className="text-xs text-secondary-500 capitalize">
                            {skill.level}
                          </span>
                        </div>
                        <div className="w-full bg-secondary-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: getLevelWidth(skill.level).replace('w-', '') === 'full' ? '100%' : 
                              getLevelWidth(skill.level).replace('w-', '').replace('/5', '') === '4' ? '80%' :
                              getLevelWidth(skill.level).replace('w-', '').replace('/5', '') === '3' ? '60%' : '40%'
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
};

export default About;
