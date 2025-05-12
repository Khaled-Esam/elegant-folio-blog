
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
export type Language = 'en' | 'ar';

// Define translations
export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',
    admin: 'Admin',
    
    // Hero section
    heroTitle: 'Hello, I\'m',
    heroDesc: 'A passionate developer creating elegant solutions for the web. Specializing in PHP, React, and building beautiful digital experiences.',
    viewWork: 'View My Work',
    getInTouch: 'Get In Touch',
    
    // About page
    aboutMe: 'About Me',
    aboutDesc: 'Get to know more about my journey, experience, and passion for web development.',
    myStory: 'My Story',
    workExperience: 'Work Experience',
    education: 'Education',
    
    // Blog
    readMore: 'Read More',
    searchPosts: 'Search posts...',
    clearFilters: 'Clear Filters',
    noPostsFound: 'No posts found',
    tryChanging: 'Try changing your search criteria or category filter.',
    
    // Contact
    sendMessage: 'Send Message',
    yourName: 'Your Name',
    yourEmail: 'Your Email',
    subject: 'Subject',
    message: 'Message',
    
    // Admin
    adminDashboard: 'Admin Dashboard',
    manageContent: 'Manage your website content',
    manageBlogPosts: 'Manage Blog Posts',
    manageSkills: 'Manage Skills',
    manageProjects: 'Manage Projects',
    addNewPost: 'Add New Post',
    backToDashboard: 'Back to Dashboard',
    postTitle: 'Post Title',
    category: 'Category',
    coverImageUrl: 'Cover Image URL',
    excerpt: 'Excerpt',
    content: 'Content (Markdown)',
    cancel: 'Cancel',
    createPost: 'Create Post',
    updatePost: 'Update Post',
    edit: 'Edit',
    delete: 'Delete',
    
    // Language toggle
    changeLanguage: 'Change Language',
    english: 'English',
    arabic: 'Arabic',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'عني',
    projects: 'المشاريع',
    blog: 'المدونة',
    contact: 'اتصل بي',
    admin: 'إدارة',
    
    // Hero section
    heroTitle: 'مرحبا، أنا',
    heroDesc: 'مطور متحمس يبتكر حلولًا أنيقة للويب. متخصص في PHP وReact وبناء تجارب رقمية جميلة.',
    viewWork: 'عرض أعمالي',
    getInTouch: 'تواصل معي',
    
    // About page
    aboutMe: 'عني',
    aboutDesc: 'تعرف أكثر على رحلتي وخبرتي وشغفي بتطوير الويب.',
    myStory: 'قصتي',
    workExperience: 'الخبرة العملية',
    education: 'التعليم',
    
    // Blog
    readMore: 'قراءة المزيد',
    searchPosts: 'بحث المقالات...',
    clearFilters: 'مسح الفلاتر',
    noPostsFound: 'لا توجد مقالات',
    tryChanging: 'حاول تغيير معايير البحث أو فلتر الفئة.',
    
    // Contact
    sendMessage: 'إرسال الرسالة',
    yourName: 'الاسم',
    yourEmail: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'الرسالة',
    
    // Admin
    adminDashboard: 'لوحة الإدارة',
    manageContent: 'إدارة محتوى موقعك',
    manageBlogPosts: 'إدارة المدونة',
    manageSkills: 'إدارة المهارات',
    manageProjects: 'إدارة المشاريع',
    addNewPost: 'إضافة مقال جديد',
    backToDashboard: 'العودة للوحة التحكم',
    postTitle: 'عنوان المقال',
    category: 'الفئة',
    coverImageUrl: 'رابط صورة الغلاف',
    excerpt: 'مقتطف',
    content: 'المحتوى (Markdown)',
    cancel: 'إلغاء',
    createPost: 'إنشاء مقال',
    updatePost: 'تحديث المقال',
    edit: 'تعديل',
    delete: 'حذف',
    
    // Language toggle
    changeLanguage: 'تغيير اللغة',
    english: 'الإنجليزية',
    arabic: 'العربية',
  }
};

// Define context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Get language from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Set dir attribute on html element for RTL support
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    // Add appropriate language class to body for tailwind RTL plugin
    if (language === 'ar') {
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
    }
  }, [language]);

  // Translation function
  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook for using language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
