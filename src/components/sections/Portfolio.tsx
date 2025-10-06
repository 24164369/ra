import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Section, SectionHeader, SectionTitle, SectionSubtitle, SectionContent, Card, Button } from '../ui';
import { projects } from '../../data/portfolio';
import type { Project } from '../../types';

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | Project['category']>('all');
  const [showAll, setShowAll] = useState(false);

  const categories = ['all', 'web', 'mobile', 'desktop', 'api', 'other'] as const;
  const categoryLabels = {
    all: 'All Projects',
    web: 'Web Apps',
    mobile: 'Mobile Apps',
    desktop: 'Desktop Apps',
    api: 'APIs',
    other: 'Other'
  };

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card hover padding="none" className="overflow-hidden h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-600 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {project.title.split(' ').map(word => word[0]).join('')}
              </span>
            </div>
          )}
          
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <Star size={12} fill="currentColor" />
                <span>Featured</span>
              </div>
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed' ? 'bg-green-500 text-white' :
              project.status === 'in-progress' ? 'bg-blue-500 text-white' :
              'bg-gray-500 text-white'
            }`}>
              {project.status.replace('-', ' ')}
            </span>
          </div>

          {/* Overlay with links */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {project.demoUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.demoUrl}
                target="_blank"
              >
                <ExternalLink size={16} className="mr-1" />
                {t('projects.viewProject')}
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
              >
                <Github size={16} className="mr-1" />
                {t('projects.viewCode')}
              </Button>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-secondary-900 mb-2">
              {project.title}
            </h3>
            <p className="text-secondary-600 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Project details */}
            <div className="space-y-2 mb-4 text-sm text-secondary-600">
              {project.startDate && (
                <div className="flex items-center space-x-1">
                  <Calendar size={14} />
                  <span>
                    {new Date(project.startDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                    {project.endDate && ` - ${new Date(project.endDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}`}
                  </span>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center space-x-1">
                  <Users size={14} />
                  <span>Team of {project.teamSize}</span>
                  {project.role && <span>• {project.role}</span>}
                </div>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-secondary-200 text-secondary-600 rounded text-xs font-medium">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );

  return (
    <Section id="portfolio" background="gray">
      <SectionHeader>
        <SectionTitle gradient>{t('projects.title')}</SectionTitle>
        <SectionSubtitle>
          {t('projects.subtitle')}
        </SectionSubtitle>
      </SectionHeader>

      <SectionContent>
        {/* Filter buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 border border-secondary-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {categoryLabels[category]}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show more/less button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </Button>
          </motion.div>
        )}

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary-600 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </SectionContent>
    </Section>
  );
};

export default Portfolio;
