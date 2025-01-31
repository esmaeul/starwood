import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("");

  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    console.log("Switching to:", lang);
    window.localStorage.setItem("language", lang);
    setLanguage(lang);
    i18n.changeLanguage(lang); // Dynamically switch languages
  };

  const value = {
    language,
    setLanguage,
    switchLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
