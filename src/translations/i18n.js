import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// translation file
import { TRANSLATIONS_EN } from './en/translations';
import { TRANSLATIONS_BM } from './bm/translations';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            bm: {
                translation: TRANSLATIONS_BM
            },
        },
        lng: localStorage.getItem('i18nextLng') || 'en',
        fallbackLng: 'en',
        debug: false,
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
        escapeValue: false
        }
    });

export default i18n;