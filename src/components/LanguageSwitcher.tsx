
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0 relative overflow-hidden group">
          <Globe className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
          <span className="sr-only">{t('changeLanguage')}</span>
          <span className="absolute -bottom-6 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[120px]">
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-2 ${language === 'en' ? 'bg-muted' : ''} transition-colors`}
        >
          <span className="text-base">🇺🇸</span> 
          <span>{t('english')}</span>
          {language === 'en' && (
            <span className="ml-auto h-2 w-2 rounded-full bg-primary"></span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('ar')}
          className={`flex items-center gap-2 ${language === 'ar' ? 'bg-muted' : ''} transition-colors`}
        >
          <span className="text-base">🇦🇪</span> 
          <span>{t('arabic')}</span>
          {language === 'ar' && (
            <span className="ml-auto h-2 w-2 rounded-full bg-primary"></span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
