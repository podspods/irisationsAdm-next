import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// path to translation json file (could be anywhere)
import translationEN from '../../public/locales/en/translation.json';
import translationFR from '../../public/locales/fr/translation.json';

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  },
  lng: 'en', // default lang
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});
