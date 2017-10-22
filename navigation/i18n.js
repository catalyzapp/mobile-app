import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import Expo from 'expo';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return Expo.Util.getCurrentLocaleAsync().then(lng => {
      callback(lng);
    });
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    resources: {
      en: {
        landing: {
          title: 'Login',
          introduction: "Let's get started",
        },
        completeLogin: {
          mentor: 'Mentor',
          mentee: 'Mentee',
          introduction: 'We need some info',
          inputs: {
            bio: 'Give us a small bio',
            country: 'Country of origin',
            education: 'Education',
            language: 'Language',
          },
        },
        home: {
          title: 'Welcome',
          introduction:
            'This text comes from i18next and is provided in english.',
        },
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
          actions: {
            toggleToSpanish: 'Spanish',
            toggleToEnglish: 'English',
          },
        },
      },
      es: {
        landing: {
          title: 'Login',
          introduction: "Let's get started",
        },
        completeLogin: {
          mentor: 'Mentor',
          mentee: 'Mentee',
          introduction: 'We need some info',
          inputs: {
            bio: 'Give us a small bio',
            country: 'Country of origin',
            education: 'Education',
            language: 'Language',
          },
        },
        home: {
          title: 'Welcome',
          introduction:
            'This text comes from i18next and is provided in english.',
        },
        common: {
          currentLanguage: 'The current language is "{{lng}}"',
          actions: {
            toggleToSpanish: 'Spanish',
            toggleToEnglish: 'English',
          },
        },
      },
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    // cache: {
    //   enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;
