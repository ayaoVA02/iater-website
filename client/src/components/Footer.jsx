import { map } from "../assets/images"
import Logo from "./Logo"
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa"
import { useTranslation } from "react-i18next";
import useDeviceType from "../hook/useDeviceType";
const Footer = () => {
  const { t, i18n } = useTranslation();


  const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language];


  const deviceType = useDeviceType();

  const getContentWidth = () => {
    if (deviceType === 'desktop') return 'desktopWidth';
    if (deviceType === 'tablet') return 'templetWidth';
    return 'mobileWidth'; // default: mobile
  };
  return (
    <footer className={`bg-white py-6 ${fontClass} mx-auto w-full `} >
      <div className="w-full  h-[1px] bg-gray-200 my-4 " />
      <div className={` ${getContentWidth()} mx-auto  flex  footer-bg  justify-center p-4 items-center`}>
        <div className="flex flex-col items-center  ">
          <img src="/webimage/iATER_logo.png" alt="" className="" />
          <p className="text-lg text-gray-600 text-center md:text-left mt-2 uppercase">
            {t("banner.title")}
          </p>

          <div className="flex gap-4">
            <p className="text-meduin text-gray-600 mb-1">iaterkorea2020@gmail.com</p>
            <p className="text-meduin text-gray-600 mb-2">+82 20 56 527 800</p>

            <FaFacebook color="blue" size={24}/>
          </div>

            <p className="text-white">
              Copyright &copy; iATER Institute of Advanced Technology Education & Research
            </p>
        </div>

        {/* <div className="text-center w-[300px]">
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

        <div >
          <img src={map} alt="Map" className="w-32 h-32 object-cover rounded" />
        </div> */}
        {/* <img src='/webimage/003_01.png' alt="" /> */}
      </div>


    </footer>
  )
}

export default Footer
