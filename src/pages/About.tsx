
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import SkillsSection from '@/components/SkillsSection';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className={`text-4xl font-serif font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('aboutMe')}
            </h1>
            <p className={`text-xl text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('aboutDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-xl border-4 border-primary/20">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=1000"
                  alt="Profile"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className={`text-2xl font-serif font-semibold mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t('myStory')}
              </h2>
              <p className={`text-muted-foreground mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' 
                  ? 'مرحبا! أنا خالد عصام، مطور ويب شغوف بخبرة تزيد عن سنوات في إنشاء مواقع وتطبيقات الويب التي لا تبدو رائعة فحسب، بل توفر أيضًا تجارب استخدام استثنائية.'
                  : 'Hello! I'm Khaled Esam, a passionate web developer with over X years of experience creating websites and applications that not only look great but also provide exceptional user experiences.'}
              </p>
              <p className={`text-muted-foreground mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'بدأت رحلتي في تطوير الويب عندما اكتشفت شغفي بالبرمجة خلال دراستي. منذ ذلك الحين، عملت على العديد من المشاريع، بدءًا من مواقع الويب للأعمال الصغيرة وصولاً إلى تطبيقات الويب المعقدة للعملاء في مختلف الصناعات.'
                  : 'My journey in web development began when I discovered my passion for coding during my studies. Since then, I've worked on numerous projects, ranging from small business websites to complex web applications for clients across different industries.'}
              </p>
              <p className={`text-muted-foreground mb-4 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'أنا متخصص في تطوير PHP، وإنشاء حلول مخصصة تلبي احتياجات الأعمال المحددة. أنا أيضًا متمكن في تقنيات الواجهة الأمامية الحديثة مثل React و TypeScript، مما يسمح لي ببناء تطبيقات متكاملة قوية وسهلة الاستخدام.'
                  : 'I specialize in PHP development, creating custom solutions that meet specific business needs. I'm also proficient in modern frontend technologies like React and TypeScript, allowing me to build full-stack applications that are both powerful and user-friendly.'}
              </p>
              <p className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar'
                  ? 'عندما لا أكون أقوم بالبرمجة، يمكنك أن تجدني أستكشف تقنيات جديدة، أو أساهم في مشاريع مفتوحة المصدر، أو أشارك معرفتي من خلال منشورات المدونة والمشاركة المجتمعية.'
                  : 'When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement.'}
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className={`text-2xl font-serif font-semibold text-center mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('workExperience')}
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className={`text-xl font-serif font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {language === 'ar' ? 'مطور ويب أول' : 'Senior Web Developer'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? 'يناير 2022 - الحاضر' : 'January 2022 - Present'}
                    </p>
                  </div>
                  <p className={`text-muted-foreground mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? 'اسم الشركة، الموقع' : 'Company Name, Location'}
                  </p>
                  <ul className={`list-disc list-inside text-muted-foreground space-y-1 ml-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    <li>
                      {language === 'ar' 
                        ? 'قيادة تطوير تطبيقات الويب المتعددة باستخدام PHP وأطر عمل JavaScript الحديثة'
                        : 'Lead the development of multiple web applications using PHP and modern JavaScript frameworks'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تنفيذ وصيانة واجهات برمجة التطبيقات RESTful لمختلف مشاريع العملاء'
                        : 'Implement and maintain RESTful APIs for various client projects'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'التعاون مع فرق التصميم والمنتج لتقديم تجارب مستخدم عالية الجودة'
                        : 'Collaborate with design and product teams to deliver high-quality user experiences'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'توجيه المطورين المبتدئين وإجراء مراجعات الكود'
                        : 'Mentor junior developers and conduct code reviews'}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className={`text-xl font-serif font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {language === 'ar' ? 'مطور ويب' : 'Web Developer'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ar' ? 'مارس 2019 - ديسمبر 2021' : 'March 2019 - December 2021'}
                    </p>
                  </div>
                  <p className={`text-muted-foreground mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' ? 'الشركة السابقة، الموقع' : 'Previous Company, Location'}
                  </p>
                  <ul className={`list-disc list-inside text-muted-foreground space-y-1 ml-4 ${language === 'ar' ? 'font-arabic text-right' : ''}`}>
                    <li>
                      {language === 'ar'
                        ? 'تطوير وصيانة مواقع الويب للعملاء باستخدام PHP وWordPress وJavaScript'
                        : 'Developed and maintained client websites using PHP, WordPress, and JavaScript'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تحسين أداء الموقع وتنفيذ أفضل ممارسات تحسين محركات البحث'
                        : 'Optimized website performance and implemented SEO best practices'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'العمل مع فرق متعددة التخصصات لتسليم المشاريع في الوقت المحدد وضمن الميزانية'
                        : 'Worked with cross-functional teams to deliver projects on time and within budget'}
                    </li>
                    <li>
                      {language === 'ar'
                        ? 'تنفيذ تصميمات متجاوبة وضمان التوافق عبر المتصفحات'
                        : 'Implemented responsive designs and ensured cross-browser compatibility'}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-16">
            <h2 className={`text-2xl font-serif font-semibold text-center mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t('education')}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className={`text-xl font-serif font-semibold ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' 
                      ? 'بكالوريوس العلوم في علوم الكمبيوتر'
                      : 'Bachelor of Science in Computer Science'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === 'ar' ? '2015 - 2019' : '2015 - 2019'}
                  </p>
                </div>
                <p className={`text-muted-foreground ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'ar' ? 'اسم الجامعة، الموقع' : 'University Name, Location'}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SkillsSection />
    </Layout>
  );
};

export default About;
