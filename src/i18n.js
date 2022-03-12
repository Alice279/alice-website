import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: `./locales/{{lng}}/{{ns}}.json`,
            // loadPath: `./locales`,
        },//语言数据接口
        // react: {
        //     useSuspense: true,
        // },
        //上面的是添加的，下面的是默认的
        fallbackLng: 'en',//用户语言不可用时使用的语言
        debug: true,//切换语言时控制台输出

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;