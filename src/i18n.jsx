import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: en.home,
      common: en.common,
      navbar: en.navbar,
      about: en.about,
      services: en.services,
      contact: en.contact,
    },
    ar: {
      home: ar.home,
      common: ar.common,
      navbar: ar.navbar,
      about: ar.about,
      services: ar.services,
      contact: ar.contact,
    },
  },
  lng: "en",
  fallbackLng: "en",
});

// Listen for language changes and set the document direction accordingly
i18n.on("languageChanged", (lng) => {
  const direction = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", direction);
});

export default i18n;
