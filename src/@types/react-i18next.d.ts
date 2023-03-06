import 'react-i18next';
import en from 'utils/locale/en/translation.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      en: typeof en;
    };
  }
}
