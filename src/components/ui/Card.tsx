
import { motion } from 'framer-motion';
import type { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
}) => {
  const baseClasses = 'bg-white rounded-xl border border-secondary-200 transition-all duration-300';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:shadow-secondary-200/20 hover:-translate-y-1 cursor-pointer' 
    : 'shadow-md shadow-secondary-200/10';
  
  const classes = `${baseClasses} ${paddingClasses[padding]} ${hoverClasses} ${className}`;
  
  const motionProps = hover ? {
    whileHover: {
      y: -4,
    },
    initial: { y: 0 },
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  } : {};
  
  return (
    <motion.div
      className={classes}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

// Card subcomponents for better composition
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`flex-1 ${className}`}>
    {children}
  </div>
);

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`mt-4 pt-4 border-t border-secondary-200 ${className}`}>
    {children}
  </div>
);

export default Card;
