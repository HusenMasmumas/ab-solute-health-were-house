import { initReactI18next } from "react-i18next";
import en from "./lang/en.json";
import th from "./lang/th.json";
import i18n from "i18next";

export const getLocalLanguage = (): "en" | "th" => {
  const lang = localStorage.getItem("local-lang") as "en" | "th" | undefined;
  return lang || "th";
};

i18n.use(initReactI18next).init({
  fallbackLng: getLocalLanguage(),
  debug: false,
  resources: {
    en: {
      translation: en,
    },
    th: {
      translation: th,
    },
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
