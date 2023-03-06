import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import ru from './ru/translation.json';

const resources = {
  en: { translation: en },
  ru: { translation: ru },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localstorage'],
      caches: ['localstorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  .catch((e) => console.error(`Problems with i18n: ${e}`));

export default i18n;
