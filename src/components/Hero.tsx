
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="hero-gradient absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-[120px] opacity-20" />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Avatar className="h-52 w-52 border-4 border-primary/30 shadow-xl">
                <AvatarImage 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&h=800&q=90" 
                  alt="Khaled" 
                  className="object-cover"
                />
                <AvatarFallback className="text-6xl">KE</AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-gradient-to-tr from-primary to-primary/60 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                <span>KB</span>
              </div>
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-serif animate-fade-in ${language === 'ar' ? 'font-arabic' : ''}`}>
            <span className="inline-block">{t('heroTitle')} </span>
            <span className="text-primary inline-block">{language === 'ar' ? 'خالد عصام' : 'Khaled Esam'}</span>
          </h1>
          <p className={`text-xl md:text-2xl text-muted-foreground mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {t('heroDesc')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base">
              <Link to="/projects">
                {t('viewWork')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <Link to="/contact">
                {t('getInTouch')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
