
import { motion } from 'framer-motion';
import type { ButtonProps } from '../../types';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  href,
  target = '_self',
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide';
  
  const variantClasses = {
    primary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-600 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus:ring-secondary-500',
    outline: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white focus:ring-primary-600',
    ghost: 'text-secondary-700 hover:bg-secondary-100 focus:ring-secondary-500',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const buttonContent = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </>
  );
  
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  };
  
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        className={classes}
        {...motionProps}
        aria-disabled={disabled}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
