import { map } from "../assets/images"
import Logo from "./Logo"
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa"
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t, i18n } = useTranslation();
  
  
    const fontClass = {
      en: "font-en",
      la: "font-lao",
      ko: "font-kr",
    }[i18n.language];
  return (
    <footer className={`bg-white py-6 ${fontClass}`}>
      <div className="container mx-auto px-4 flex flex-col  md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-center mb-4 md:mb-0 w-[30%]">
          <Logo />
          <p className="text-meduin text-center md:text-left mt-2">
           {t("banner.title")}
          </p>
        </div>

        <div className="text-center md:text-center  w-[300px]">
          <h3 className=" mb-2 font-bold">{t("footer.contact")}</h3>
          <p className="text-meduin text-gray-600 mb-1">iaterkorea2020@gmail.com</p>
          <p className="text-meduin text-gray-600 mb-2">+82 20 56 527 800</p>

          <div className="flex justify-center md:justify-center space-x-4">
            <a href="#" className="flex items-center text-sm text-gray-600">
              <FaFacebook className="mr-1 text-blue-600 text-3xl" />
              iATER
            </a>
            <a href="#" className="flex items-center text-sm text-gray-600">
              <FaMapMarkerAlt className="mr-1  text-orange-500 text-3xl" />
           {t("footer.address")}
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={map} alt="Map" className="w-32 h-32 object-cover rounded" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
