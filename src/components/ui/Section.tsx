
import { motion } from 'framer-motion';
import type { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'lg',
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-secondary-50',
    primary: 'bg-primary-50',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
  };
  
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <motion.section
      id={id}
      className={classes}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="section-padding container-max-width">
        {children}
      </div>
    </motion.section>
  );
};

// Section subcomponents for better composition
export const SectionHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
  centered?: boolean;
}> = ({
  children,
  className = '',
  centered = true,
}) => (
  <motion.div
    className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    {children}
  </motion.div>
);

export const SectionTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}> = ({
  children,
  className = '',
  gradient = false,
}) => (
  <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight ${gradient ? 'gradient-text' : 'text-secondary-900'} ${className}`}>
    {children}
  </h2>
);

export const SectionSubtitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = '',
}) => (
  <p className={`text-lg text-secondary-600 max-w-2xl mx-auto font-body leading-relaxed ${className}`}>
    {children}
  </p>
);

export const SectionContent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className = '',
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    {children}
  </motion.div>
);

export default Section;
