import { useSelector } from 'react-redux';
import translations from '../assets/translation';
import { languageSelectors } from '../redux/language/language.selectors';

export const useTranslation = () => {
    const appTranslations = translations;
  
    const currentLanguageCode = useSelector(languageSelectors.language);
  
    const t = (pattern) => {
      return appTranslations.translationsMap[currentLanguageCode][pattern];
    };
  
    return {t, language: currentLanguageCode};
  };