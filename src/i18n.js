
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "About": "About",
            "Goods": "Goods",
            "Message": "Message"
        }
    },
    zh: {
        translation: {
            "About": "关于我",
            "Goods": "小铺",
            "Message": "留言"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;



// //下面这一部分是翻译数据放在外部，我们请求进来，这个需要一定有Suspense
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//     .use(Backend)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         backend: {
//             loadPath: `./locales/{{lng}}/{{ns}}.json`,
//             // loadPath: `./locales`,
//         },//语言数据接口
//         // react: {
//         //     useSuspense: true,
//         // },
//         // defaultNS: 'translation',//默认空间
        
//         //上面的是添加的，下面的是默认的
//         fallbackLng: 'zh-CN',//默认语言
//         debug: true,//切换语言时控制台输出

//         interpolation: {
//             escapeValue: false, // not needed for react as it escapes by default
//         }
//     });


// export default i18n;