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
    fallbackLng: 'es',

    resources: {
      en: {
        landing: {
          help: 'Help or be helped?',
          role: 'Mentor or Mentee?',
          mentor: "I'm here to help",
          mentee: 'I want help',
          login: 'Login with facebook',
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
        home: {
          title: 'Bienvenido',
        },
        landing: {
          help: 'Ayuda o ser ayudado?',
          role: 'Mentor o Mentee?',
          mentor: 'estoy aqui para ayudar',
          mentee: 'quiero ayuda',
          login: 'Iniciar sesión con Facebook',
        },
        completeLogin: {
          mentor: 'Mentor',
          mentee: 'Aprendiz',
          introduction: 'Necesitamos Información',
          inputs: {
            bio: 'Danos una pequeña Biografía',
            country: 'País de origen',
            education: 'Educación',
            language: 'Idioma',
          },
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
