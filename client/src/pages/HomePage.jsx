import IntroductBox from "../components/IntroductBox"

import { useTranslation } from "react-i18next";
import useDeviceType from "../hook/useDeviceType";
import ProgrameBox from "../components/ProgrameBox"
import ProjectBox from "../components/ProjectBox"
const HomePage = () => {
  const { t, i18n } = useTranslation();
  const deviceType = useDeviceType();
  const getContentWidth = () => {
    if (deviceType === 'desktop') return 'desktopWidth';
    if (deviceType === 'tablet') return 'templetWidth';
    return 'mobileWidth'; // mobile
  };
  const aboutMenuItems = [
    { name: `${t("home.aboutMenuItems1")}`, link: "/iater/about#vision" },
    { name: `${t("home.aboutMenuItems2")}`, link: "/iater/about#mission" },
    { name: `${t("home.aboutMenuItems3")}`, link: "/iater/about#mission-statement" },
    { name: `${t("home.aboutMenuItems4")}`, link: "/iater/about#organization" },
    { name: `${t("home.aboutMenuItems5")}`, link: "/iater/professors" },
    { name: `${t("home.aboutMenuItems6")}`, link: "/iater/history" },
    { name: `${t("home.aboutMenuItems7")}`, link: "/iater/about#logo" },
  ]

  const projectMenuItems = [
    { name: `${t("home.projectMenuItems1")}`, link: "/iater/project#external" },
    { name: `${t("home.projectMenuItems2")}`, link: "/iater/project#internal" },
    { name: `${t("home.projectMenuItems3")}`, link: "/iater/project#research" },
  ]

  const programMenuItems = [
    { name: `${t("home.programMenuItems1")}`, link: "/iater/program?slide=0" },
    { name: `${t("home.programMenuItems2")}`, link: "/iater/program?slide=1" },
    { name: `${t("home.programMenuItems3")}`, link: "/iater/program?slide=2" },
    { name: `${t("home.programMenuItems4")}`, link: "/iater/program?slide=3" },
  ]

  // Map language to font class
  const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language];
  console.log(deviceType);

  return (



    <div className={`bg-white ${fontClass} ${getContentWidth()} mx-auto mt-12`}>
      <div className={` ${deviceType === 'mobile' ? ' h-[1100px] mx-auto ' : 'h-[500px] '}  flex justify-between items-center mb-12`}>
        <div className={`${deviceType === 'mobile' ? 'flex-col space-y-2 mx-auto' : 'flex space-x-2'}  `}>

          <IntroductBox
            title={t("home.title")}
            color="blue"
            link="/about"
            subtitle={t("home.intoduc_subtitle")}
            menuItems={aboutMenuItems}
          // isActive={activeBox === 'about'}
          />
          <ProjectBox
            title={t("home.project")}
            color="orange"
            link="/project"
            subtitle={t("home.project_subtitle")}
            menuItems={projectMenuItems}
          />
          <ProgrameBox
            title={t("home.program")}
            color="green"
            link="/program"
            subtitle={t("home.program_subtitle")}
            menuItems={programMenuItems}
          />


        </div>


      </div>


      {/* <Banner /> */}

    </div>


  )
}

export default HomePage
