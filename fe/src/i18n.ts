import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vn from "./locales/vn.json";
import en from "./locales/en.json";

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: "vn",
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: en,
        },
        vn: {
            translation: vn,
        },
    },
});

export default i18n;
