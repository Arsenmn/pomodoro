import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import kz from "./locales/kz.json";

const savedLng = localStorage.getItem("appLanguage") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    kz: { translation: kz },
  },
  lng: savedLng,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
