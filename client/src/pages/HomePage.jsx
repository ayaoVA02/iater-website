import NavBox from "../components/NavBox"
import Banner from "../components/Banner"
import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"
import { useTranslation } from "react-i18next";
const HomePage = () => {
    const { t, i18n } = useTranslation();
  const aboutMenuItems = [
    { name: `${t("home.aboutMenuItems1")}`, link: "/about#vision" },
    { name: `${t("home.aboutMenuItems2")}`, link: "/about#mission" },
    { name: `${t("home.aboutMenuItems3")}`, link: "/about#mission-statement" },
    { name: `${t("home.aboutMenuItems4")}`, link: "/about#organization" },
    { name: `${t("home.aboutMenuItems5")}`, link: "/people" },
    { name: `${t("home.aboutMenuItems6")}`, link: "/history" },
    { name: `${t("home.aboutMenuItems7")}`, link: "/about#logo" },
  ]

  const projectMenuItems = [
    { name: `${t("home.projectMenuItems1")}`, link: "/project#external" },
    { name: `${t("home.projectMenuItems2")}`, link: "/project#internal" },
    { name: `${t("home.projectMenuItems3")}`, link: "/project#research" },
  ]

  const programMenuItems = [
    { name: `${t("home.programMenuItems1")}`, link: "/program#plan" },
    { name: `${t("home.programMenuItems2")}`, link: "/program#curriculum" },
    { name: `${t("home.programMenuItems3")}`, link: "/program#partnerships" },
    { name: `${t("home.programMenuItems4")}`, link: "/program#mission" },
  ]

  // Map language to font class
    const fontClass = {
      en: "font-en",
      la: "font-lao",
      ko: "font-kr",
    }[i18n.language];
    
  return (
    <div className={`bg-white ${fontClass}`}>
      <div className="container mx-auto px-4 py-6 ">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <div className="text-center mb-12">
          <h1 className="text-xl mb-4  ">{t("home.iATER_trains")}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-start  md:h-[40vh] lg:h-[35vh]">

          <NavBox
            title={t("home.title")}
            color="blue"
            link="/about"
            subtitle={t("home.intoduc_subtitle")}
            menuItems={aboutMenuItems}
          />
          <NavBox
            title={t("home.project")}
            color="orange"
            link="/project"
            subtitle={t("home.project_subtitle")}
            menuItems={projectMenuItems}
          />
          <NavBox
            title={t("home.program")}
            color="green"
            link="/program"
            subtitle={t("home.program_subtitle")}
            menuItems={programMenuItems}
          />
        </div>

      </div>
      <Banner />
    </div>
  )
}

export default HomePage
