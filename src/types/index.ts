// Core data types for the portfolio application

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location?: string;
  profileImage?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'website' | 'instagram';
  url: string;
  username?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // undefined means current position
  description: string;
  responsibilities: string[];
  achievements?: string[];
  technologies: string[];
  companyLogo?: string;
  companyUrl?: string;
  location?: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  startDate?: string;
  endDate?: string;
  teamSize?: number;
  role?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  availability?: string;
}

// Component prop types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
  target?: '_blank' | '_self';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'primary';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

// Animation and interaction types
export interface AnimationConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}

export interface ScrollToOptions {
  behavior?: 'auto' | 'smooth';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
}

// Form validation types
export interface ValidationError {
  field: string;
  message: string;
}

export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  errors: ValidationError[];
}

// Theme and styling types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
