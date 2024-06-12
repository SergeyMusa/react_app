import * as en from '../public/locales/en/translation.json'
import * as ru from '../public/locales/ru/translation.json'

import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';

export const defaultNS = 'en'
export const resources = {
  en: {
    en,
    ru,
  },
  // RU: {
  //   RU,
  //   // en,
  // },
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
      // lng: 'en',
      fallbackLng: 'en',// Стандартный язык
      debug: true,
      // ns: ['en', 'ru'],
      defaultNS,
      resources,

    }, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      t('key');
    }
  ).then();

export default i18n;