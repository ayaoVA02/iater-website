
import Logo from "./Logo"
import LanguageSelector from "./LanguageSelector"

const Header = () => {
 

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white  p-3 ">
      <div className="flex justify-between items-center px-12">
        <Logo />
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header
