
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"

import { logo2 } from "../assets/images"
import { useTranslation, Trans } from "react-i18next";
import useDeviceType from "../hook/useDeviceType"
import ListMenu from "../components/ListMenu"
const AboutPage = () => {
  const location = useLocation()
  const [activeSection, setActiveSection] = useState("vision")
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (location.hash) {
      setActiveSection(location.hash.substring(1))
    }
  }, [location])

  const gotoHistory = () => {
    navigate('/iater/history');
  };

  function truncateWords(text, count) {
    const words = text.split(' ');
    return words.length <= count ? text : words.slice(0, count).join(' ') + '...';
  }


  const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language];


  const deviceType = useDeviceType();
  const getContentWidth = () => {
    if (deviceType === 'desktop') return 'desktopWidth';
    if (deviceType === 'tablet') return 'templetWidth';
    return 'mobileWidth'; // mobile
  };
  return (
    <div className={`bg-white ${fontClass}`}>
      <div className={`${getContentWidth()} mx-auto px-4 py-6 widthfixed`}>


        <div className="bg-blue-50 rounded-[50px] p-8 mb-12 " id="vision">
          <h1 className="text-5xl font-bold mb-4 text-[#105691]"> <b>{t("home.aboutMenuItems1")}</b> </h1>
          <p className="mb-4"> <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.1_p1")}</Trans></p>
          <p className="mb-4">
            <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.1_p2")}</Trans>
          </p>
          <p className="mb-4">
            <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.1_p3")}</Trans>
          </p>
          <p className="mb-4">
            <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.1_p4")}</Trans>

          </p>
          <p className="mb-8">
            <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.1_p5")}</Trans>

          </p>





        </div>



        <div className="flex gap-4 justify-around items-center w-full">
          <div className="rounded-lg overflow-hidden w-[400px]">
            <img className="w-full h-[200px] object-cover" src="https://cdn.prod.website-files.com/60b550ccbb1a59f65dc28805/679d08d9ed93cb9c981b53c3_661e5dca8eb67f5abfed52b3_CB3mo20ayudarte20imagen20a20mA1s.jpeg" alt="" />
          </div>
          <div className="rounded-lg overflow-hidden w-[400px]">
            <img className="w-full h-[200px] object-cover" src="https://media.licdn.com/dms/image/v2/D5612AQH7_az8zGIVNQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1718965016362?e=2147483647&v=beta&t=LK2Pmk6wRUcv8shAsBkQBBwZ9K0WUyzPEbpackNi1Mk" alt="" />
          </div>
          <div className="rounded-lg overflow-hidden w-[400px] h-[200px]">
            <img src="https://www.hysons.co.uk/wp-content/uploads/2023/09/cat-bus-3.jpg.webp" alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mission */}
        <div className="px-4 flex flex-col gap-16 " >

          <div className="mt-14" id="mission">
            <h1 className="text-5xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems2")}</h1>
            {/* <p className="mb-4"> <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.2_p1")}</Trans>
            </p>
            <p className="mb-4">
              <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.2_p2")}</Trans></p>
            <p className="mb-8 "><Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.2_p3")}</Trans></p> */}
            <div className="bg-blue-50 px-4 py-8 rounded-lg">
              <p>급변하는 글로벌 환경 속에서 라오스 청년들이 능력있는 전문 인재를 키우고 라오스 전역에 컴퓨터 교육을 실시 함으로서 기술격차 해소와 ICT 대중화를 이루고 전문 개발자 양성과 강사 개발을 통한 생활 자립을 돕는 연구원을 설립하고자 합니다.</p>
            </div>
          </div>

          <div id="mission-statement">
            <h1 className="text-5xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems3")}</h1>
            <div className="flex justify-around mt-12 gap-4">
              <div className="text-center">
                <Link to={'/iater/aieducation'} >
                  <div className="w-full h-auto mx-auto p-12 mb-2">

                    <img src="/webimage/cores1.png" className="hover:scale-110 transition-all duration-300" alt="" />
                  </div>

                </Link>
              </div>
              <div className="text-center ">
                <Link to={'/iater/aieducation'}  >

                  <div className="w-full h-automx-auto p-12 mb-2">

                    <img src="/webimage/cores2.png" className="hover:scale-110 transition-all duration-300" alt="" />

                  </div>

                </Link>
              </div>
              <div className="text-center ">
                <Link to={'/iater/aieducation'} >

                  <div className="w-full h-auto mx-auto p-12 mb-2">

                    <img src="/webimage/cores3.png" className="hover:scale-110 transition-all duration-300" alt="" />

                  </div>
                  {/* <p className="text-xs hover:underline">{t("about.3_p3")}</p> */}
                </Link>
              </div>
            </div>


          </div>

          <div id="organization" className="relative">
            <h1 className="text-5xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems4")}</h1>

            <div className="flex flex-col gap-4 justify-center items-center">

              <img src="/webimage/mission_statment_kr.png" alt=" mission statement image" className="w-full h-auto object-cover" />
              <h2 className="text-3xl absolute text-center bottom-8" >iATER는 라오스 청년들을 균형잡힌 ICT 전문인재를 키우고자 <br /> 다양한 관점에서 교육과 연구를 진행하고 있습니다. </h2>
            </div>

          </div>

          <div id="logo">
            <h1 className="text-5xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems7")}</h1>
            <div className=" p-4 rounded-lg mb-8">
              <div className="flex items-center gap-64">

                <div className="w-1/2">
                  <img src={"/webimage/biglogo.png"} alt="logo" className="w-full h-auto object-cover" />
                </div>

                <ListMenu classStyle='flex-col' />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
