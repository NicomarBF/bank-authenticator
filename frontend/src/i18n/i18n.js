import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt_br from './languages/pt_br.json';
import en_us from './languages/en_us.json';
import es_es from './languages/es_es.json';

const resources = {
    'pt_br': {
        translation: pt_br,
    },
    'en_us': {
        translation: en_us,
    },
    'es_es': {
        translation: es_es,
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'pt_br',
    fallbackLng: 'pt_br',
    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: false,
    }
});

export default i18n;