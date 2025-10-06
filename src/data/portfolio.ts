import type { PersonalInfo, SocialLink, Experience, Project, Skill, ContactInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'رنا محمد علي ثابت العريقي',
  title: 'طالبة تقنية المعلومات',
  bio: 'أسعى لتمكين ذاتي في مجال التقنية، وصنع أثر يتجاوز المهارة إلى البصمة الملحوظة فيمن حولي. لدي خبرة في إدارة ووساطة منصات التواصل الاجتماعي ومهارة في التفاوض مع مختلف أنواع العملاء.',
  email: 'rmathsana64@gmail.com',
  phone: '773886464',
  location: 'اليمن، تعز',
  profileImage: '/student.jpg',
};

export const socialLinks: SocialLink[] = [
  { platform: 'email', url: 'mailto:rmathsana64@gmail.com', username: 'rmathsana64@gmail.com' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/rana-alariqi', username: 'rana-alariqi' },
  { platform: 'github', url: 'https://github.com/rana-alariqi', username: 'rana-alariqi' },
];

export const skills: Skill[] = [
  // Frontend
  { id: '1', name: 'HTML', category: 'frontend', level: 'intermediate' },
  { id: '2', name: 'CSS', category: 'frontend', level: 'intermediate' },
  { id: '3', name: 'C++', category: 'frontend', level: 'beginner' },

  // Backend & Database
  { id: '4', name: 'Oracle Database', category: 'backend', level: 'intermediate' },

  // Digital Marketing & Social Media
  { id: '5', name: 'إدارة وسائل التواصل الاجتماعي', category: 'other', level: 'advanced' },
  { id: '6', name: 'إدارة المحتوى والإعلانات', category: 'other', level: 'advanced' },
  { id: '7', name: 'التفاوض وإدارة العملاء', category: 'other', level: 'advanced' },
  { id: '8', name: 'التواصل الفعال', category: 'other', level: 'expert' },
  { id: '9', name: 'إدارة التفاعل الرقمي', category: 'other', level: 'advanced' },
];

// Create separate data for different languages
export const experiencesAr: Experience[] = [
  {
    id: '1',
    company: 'العمل الحر - إدارة وسائل التواصل الاجتماعي',
    position: 'مديرة وسائل التواصل الاجتماعي ووسيطة رقمية',
    startDate: '2022-01',
    description: 'إدارة ووساطة في منصات التواصل الاجتماعي مع التركيز على بناء العلاقات مع العملاء وإدارة المحتوى الرقمي',
    responsibilities: [
      'إدارة حسابات وسائل التواصل الاجتماعي لعدة عملاء',
      'إنشاء وإدارة المحتوى والإعلانات الرقمية',
      'التفاوض مع مختلف أنواع العملاء وبناء علاقات طويلة المدى',
      'تطوير استراتيجيات التسويق الرقمي وزيادة التفاعل'
    ],
    achievements: [
      'نجحت في زيادة التفاعل والمتابعين لعدة حسابات بنسب عالية',
      'بناء شبكة واسعة من العلاقات المهنية في المجال الرقمي'
    ],
    technologies: ['إدارة وسائل التواصل', 'التسويق الرقمي', 'إدارة المحتوى', 'التفاوض'],
    location: 'اليمن، تعز',
    type: 'freelance'
  },
  {
    id: '2',
    company: 'دراسة تقنية المعلومات',
    position: 'طالبة تقنية المعلومات',
    startDate: '2020-09',
    description: 'دراسة أساسيات تقنية المعلومات وتطوير المهارات التقنية والبرمجية',
    responsibilities: [
      'تعلم أساسيات البرمجة باستخدام C++ و HTML/CSS',
      'دراسة قواعد البيانات Oracle وإدارة البيانات',
      'تطوير مهارات حل المشكلات والتفكير المنطقي',
      'العمل على مشاريع جماعية وتطوير مهارات العمل الجماعي'
    ],
    achievements: [
      'إتقان أساسيات البرمجة وتطوير الواجهات',
      'فهم عميق لقواعد البيانات وإدارتها'
    ],
    technologies: ['C++', 'HTML', 'CSS', 'Oracle Database'],
    location: 'اليمن، تعز',
    type: 'part-time'
  }
];

export const experiencesEn: Experience[] = [
  {
    id: '1',
    company: 'Freelance - Social Media Management',
    position: 'Social Media Manager & Digital Mediator',
    startDate: '2022-01',
    description: 'Managing and mediating social media platforms with focus on building client relationships and digital content management',
    responsibilities: [
      'Managing social media accounts for multiple clients',
      'Creating and managing digital content and advertisements',
      'Negotiating with different types of clients and building long-term relationships',
      'Developing digital marketing strategies and increasing engagement'
    ],
    achievements: [
      'Successfully increased engagement and followers for multiple accounts with high percentages',
      'Built a wide network of professional relationships in the digital field'
    ],
    technologies: ['Social Media Management', 'Digital Marketing', 'Content Management', 'Negotiation'],
    location: 'Yemen, Taiz',
    type: 'freelance'
  },
  {
    id: '2',
    company: 'Information Technology Studies',
    position: 'Information Technology Student',
    startDate: '2020-09',
    description: 'Studying IT fundamentals and developing technical and programming skills',
    responsibilities: [
      'Learning programming basics using C++ and HTML/CSS',
      'Studying Oracle databases and data management',
      'Developing problem-solving skills and logical thinking',
      'Working on group projects and developing teamwork skills'
    ],
    achievements: [
      'Mastered programming fundamentals and interface development',
      'Deep understanding of databases and their management'
    ],
    technologies: ['C++', 'HTML', 'CSS', 'Oracle Database'],
    location: 'Yemen, Taiz',
    type: 'part-time'
  }
];

// Default export for backward compatibility
export const experiences = experiencesAr;

export const projects: Project[] = [
  {
    id: '1',
    title: 'حملة تسويقية لمتجر إلكتروني',
    description: 'إدارة حملة تسويقية شاملة لمتجر إلكتروني عبر منصات التواصل الاجتماعي مع زيادة المبيعات بنسبة 150%',
    longDescription: 'قمت بإدارة حملة تسويقية متكاملة لمتجر إلكتروني يختص ببيع المنتجات المحلية. شملت الحملة إنشاء محتوى جذاب، إدارة الإعلانات المدفوعة، والتفاعل مع العملاء. نجحت في زيادة المتابعين بنسبة 200% والمبيعات بنسبة 150% خلال 6 أشهر.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['إدارة وسائل التواصل', 'التسويق الرقمي', 'إنشاء المحتوى', 'تحليل البيانات'],
    category: 'other',
    status: 'completed',
    featured: true,
    demoUrl: '',
    githubUrl: '',
    startDate: '2023-01',
    endDate: '2023-06',
    teamSize: 1,
    role: 'مديرة التسويق الرقمي'
  },
  {
    id: '2',
    title: 'موقع شخصي بتقنيات الويب',
    description: 'تطوير موقع شخصي باستخدام HTML و CSS مع تصميم متجاوب وواجهة مستخدم جذابة',
    longDescription: 'قمت بتطوير موقع شخصي من الصفر باستخدام HTML و CSS مع التركيز على التصميم المتجاوب وتجربة المستخدم. يتضمن الموقع معرض أعمال، نبذة شخصية، ونموذج اتصال. تم تطبيق أفضل الممارسات في كتابة الكود والتصميم.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    status: 'completed',
    featured: true,
    demoUrl: '',
    githubUrl: '',
    startDate: '2022-08',
    endDate: '2022-12',
    teamSize: 1,
    role: 'مطورة ويب'
  },
  {
    id: '3',
    title: 'نظام إدارة قاعدة بيانات Oracle',
    description: 'تطوير نظام إدارة قاعدة بيانات باستخدام Oracle مع واجهة C++ لإدارة بيانات الطلاب',
    longDescription: 'قمت بتطوير نظام شامل لإدارة بيانات الطلاب باستخدام قاعدة بيانات Oracle مع واجهة مستخدم مطورة بـ C++. يتضمن النظام إدارة معلومات الطلاب، الدرجات، والتقارير. تم التركيز على أمان البيانات وسهولة الاستخدام.',
    image: 'https://www.pinterest.com/pin/quick-saves--876161302522967311/',
    technologies: ['Oracle Database', 'C++', 'SQL', 'Database Design'],
    category: 'desktop',
    status: 'completed',
    featured: false,
    demoUrl: '',
    githubUrl: '',
    startDate: '2022-05',
    endDate: '2022-07',
    teamSize: 1,
    role: 'مطورة قواعد البيانات'
  }
];

export const contactInfo: ContactInfo = {
  email: 'rmathsana64@gmail.com',
  phone: '773886464',
  location: 'اليمن، تعز',
  availability: 'متاحة للعمل الحر والفرص التدريبية في مجال التقنية'
};
