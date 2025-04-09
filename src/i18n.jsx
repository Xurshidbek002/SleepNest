import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uz from "./Locales/uz.json";
import ru from "./Locales/ru.json";
import eng from "./Locales/eng.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    debug: true,
    lng: i18n.language,
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      eng: { translation: eng },
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
