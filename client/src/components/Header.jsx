import Logo from "./Logo"
import LanguageSelector from "./LanguageSelector"
import useDeviceType from "../hook/useDeviceType";

const Header = () => {
  const deviceType = useDeviceType();

  const getContentWidth = () => {
    if (deviceType === 'desktop') return 'desktopWidth';
    if (deviceType === 'tablet') return 'templetWidth';
    return 'mobileWidth'; // default: mobile
  };

  return (
    <header className="z-50 bg-white fixed w-full top-0 left-0 right-0">
      <div className={`mx-auto mt-4 ${getContentWidth()}`}>
        <div className="flex justify-between items-center mb-8 px-4 ">
          <Logo />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
