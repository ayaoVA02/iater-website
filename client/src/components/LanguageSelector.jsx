import { laosFlag, koreanFlag, ukFlag } from '../assets/images';
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const getButtonClass = (lang) => {
    return `w-6 h-auto rounded overflow-hidden cursor-pointer border ${
      i18n.language === lang ? 'border-gray-400' : 'border-transparent'
    }`;
  };

  return (
    <div className="flex space-x-4">
      <button onClick={() => changeLanguage('en')} className={getButtonClass('en')}>
        <img src={ukFlag} alt="English" className="w-full h-full object-cover" />
      </button>
      <button onClick={() => changeLanguage('la')} className={getButtonClass('la')}>
        <img src={laosFlag} alt="Lao" className="w-full h-full object-cover" />
      </button>
      <button onClick={() => changeLanguage('ko')} className={getButtonClass('ko')}>
        <img src={koreanFlag} alt="Korean" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};

export default LanguageSelector;
