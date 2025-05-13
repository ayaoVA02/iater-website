
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"

import { logo2 } from "../assets/images"
import { useTranslation, Trans } from "react-i18next";
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
    navigate('/history');
  };




  const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language];
  return (
    <div className={`bg-white ${fontClass}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <div className="bg-gray-100 rounded-[50px] p-8 mb-12" id="vision">
          <h2 className="text-lg font-bold mb-4">1. {t("home.aboutMenuItems1")}</h2>
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

        <div className="px-8 flex flex-col gap-16" id="mission">

          <div className="mt-14">
            <h2 className="text-lg font-bold mb-4">2. {t("home.aboutMenuItems2")}</h2>
            <p className="mb-4">글로벌한 문화를 향한 교육서 리서치 연구센터 목적으로 국제 인재를 키우고</p>
            <p className="mb-4">국가적 연구적 협력을 고통을 실천 현장중심 기술자가 되도록 ICT 인재들을 이루고</p>
            <p className="mb-8">연간 1명의 박사와 3년 기술을 통한 성공 기술을 통는 연구센터 설립되었다 함</p>


          </div>

          <div id="mission-statement">
            <h2 className="text-lg font-bold mb-4" >3. {t("home.aboutMenuItems3")}</h2>
            <div className="flex justify-around mt-12">
              <div className="text-center">
                <Link to={'/aieducation'} >
                  <div className="w-20 h-20 mx-auto border-2 border-gray-300 rounded-lg p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-xs hover:underline">사·인재 양성센터</p>
                </Link>
              </div>
              <div className="text-center">
                <Link to={'/aieducation'} >

                  <div className="w-20 h-20 mx-auto border-2 border-gray-300 rounded-lg p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="8" y="8" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
                      <rect x="10" y="10" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <p className="text-xs hover:underline">
                    연구·개발센터 및<br />
                    제품 기술 연구
                  </p>
                </Link>
              </div>
              <div className="text-center">
                <Link to={'/aieducation'} >

                  <div className="w-20 h-20 mx-auto border-2 border-gray-300 rounded-lg p-2 mb-2">
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path
                        d="M12 16v-4M12 8h.01"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="text-xs hover:underline">AI·정보화센터</p>
                </Link>
              </div>
            </div>


          </div>

          <div >
            <h2 className="text-lg font-bold mb-4" >4. {t("home.aboutMenuItems4")}</h2>
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-8 mt-12 ">
              <h3 className="text-center font-bold text-3xl mb-4">iATER</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-700 p-2 text-center text-sm h-32 flex justify-center items-center">초등학생 활용교수법</div>

                <div>

                  <div className="bg-yellow-500 p-2 text-center text-sm h-12">
                    세미나
                  </div>
                  <div className="flex justify-center mt-2">
                    <svg viewBox="0 0 24 24" className="w-6 h-12 text-yellow-800">
                      <path
                        d="M12 19V5M5 12l7-7 7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>


                  </div>
                </div>
                <div className="bg-pink-500 flex justify-center items-center p-2 text-center text-sm">
                  AI media 연구소

                </div>
              </div>
              <div className="flex justify-between">
                <div className="bg-white flex justify-center items-center text-black p-2 text-center my-4 text-sm h-16 w-[60%]">
                  개발자/디자이너 커뮤니케이션과 글로벌 팀
                </div>
                <div className=" w-[30%] flex justify-center items-center mt-2">
                  <svg viewBox="0 0 24 24" className="w-6 h-12 text-yellow-800">
                    <path
                      d="M12 19V5M5 12l7-7 7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>


                </div>
              </div>
              <div className="bg-white text-black p-2 text-center text-sm h-20 flex justify-center items-center">기초학문</div>
            </div>


          </div>

          <div>
            <h2 className="text-lg font-bold mb-4">7. {t("home.aboutMenuItems7")}</h2>
            <div className=" p-4 rounded-lg mb-8">
              <div className="flex justify-between">
                <div className="w-1/2 max-sm:w-full  bg-gray-200 p-8">
                  <h3 className="font-bold mb-8">로고의 의미와 디자인 요소에 대한 설명이 포함됩니다</h3>
                  <h3 className="font-bold mb-2">국제교육기술연구원</h3>
                  <h4 className="text-sm mb-4">로고 디자인 설명</h4>
                  <p className="text-xs mb-4">
                    로고 설명 텍스트가 여기에 들어갑니다. 로고의 의미와 디자인 요소에 대한 설명이 포함됩니다.
                  </p>
                  <div className="flex space-x-2 ">
                    <button className="bg-purple-800 text-white text-xs px-3 py-1 rounded">다운로드 PNG</button>
                    <button className="bg-purple-800 text-white text-xs px-3 py-1 rounded">다운로드 SVG</button>
                  </div>
                </div>
                <div className="w-1/3 max-sm:hidden">
                  <img src={logo2} alt="logo" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

            <div className="flex space-x-4 w-full max-sm:justify-center">
              <Link to={"/people"} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">함께 하는 이들</Link>
              <button onClick={gotoHistory} className="bg-white border border-gray-300  py-2 rounded cursor-pointer px-12">History</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
