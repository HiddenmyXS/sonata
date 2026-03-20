import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enRes from './language/en.json';
import idRes from './language/id.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enRes },
    id: { translation: idRes },
  },
  lng: 'en', // bahasa default
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;