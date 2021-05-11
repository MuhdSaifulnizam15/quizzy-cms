import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

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
        }
    });

i18n.changeLanguage("bm");