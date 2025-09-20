
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { useTranslation, Trans } from "react-i18next";
import useDeviceType from "../hook/useDeviceType"
import ListMenu from "../components/ListMenu"
import { useHoverBox } from "../context/HoverContext"
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


  const { setActiveBox } = useHoverBox();


  const handleClick = (boxName) => {
    setActiveBox(boxName);
    navigate("/iater/"); // ← go to home page
  };

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
  const isMobile = deviceType === "mobile";

  return (
    <div className={`bg-white ${fontClass} `} >
      <div className={`${getContentWidth()} mx-auto px-4 py-6 widthfixed `}>


        <div className="pt-24" id="vision">

          <div className="bg-blue-50 rounded-[50px] p-8 mb-12 " >

            <h1 className={`text-4xl mb-6 text-[#105691] bold ${fontClass} `} > <b>{t("home.aboutMenuItems1")}</b> </h1>
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

        <div className="pt-24" id="mission">

          <div className="px-4 flex flex-col gap-16 " >

            <div className="mt-14" >
              <h1 className="text-4xl font-bold mb-12 text-[#105691] ">{t("home.aboutMenuItems2")}</h1>
              {/* <p className="mb-4"> <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.2_p1")}</Trans>
            </p>
            <p className="mb-4">
              <Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.2_p2")}</Trans></p>
            <p className="mb-8 "><Trans components={{ strong: <strong className="font-bold" /> }}>{t("about.2_p3")}</Trans></p> */}
              <div className="bg-blue-50 h-[32vh] px-4 py-8 rounded-lg ">
                <p>급변하는 글로벌 환경 속에서 라오스 청년들이 능력있는 전문 인재를 키우고 라오스 전역에 컴퓨터 교육을 실시 함으로서 기술격차 해소와 ICT 대중화를 이루고 전문 개발자 양성과 강사 개발을 통한 생활 자립을 돕는 연구원을 설립하고자 합니다.</p>
              </div>
            </div>
          </div>

          <div className="pt-24" id="mission-statement">

            <div className=" mx-auto ">
              <h1 className="text-4xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems3")}</h1>
              <div className="flex justify-center mt-6 gap-4">
                <div className="text-center">
                  <Link to={'/iater/aieducation'} >
                    <div className={` ${isMobile ? "w-[100px]" : "w-[300px]"} h-auto mx-auto  mb-2`}>

                      <img src="/webimage/cores1.png" className="hover:scale-110 transition-all duration-300" alt="" />
                    </div>

                  </Link>
                </div>
                <div className="text-center ">
                  <Link to={'/iater/aieducation'}  >

                                      <div className={` ${isMobile ? "w-[100px]" : "w-[300px]"} h-auto mx-auto  mb-2`}>


                      <img src="/webimage/cores2.png" className="hover:scale-110 transition-all duration-300" alt="" />

                    </div>

                  </Link>
                </div>
                <div className="text-center ">
                  <Link to={'/iater/aieducation'} >

                                       <div className={` ${isMobile ? "w-[100px]" : "w-[300px]"} h-auto mx-auto  mb-2`}>


                      <img src="/webimage/cores3.png" className="hover:scale-110 transition-all duration-300" alt="" />

                    </div>
                    {/* <p className="text-xs hover:underline">{t("about.3_p3")}</p> */}
                  </Link>
                </div>
              </div>


            </div>

          </div>

          <div className="pt-24 " id="organization">


            <div className="relative">
              <h1 className="text-4xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems4")}</h1>

              <div className="flex flex-col gap-4 justify-center items-center">

                <img src="/webimage/mission_statment_kr2.png" alt="iater mission statement image" className="w-[50%] h-auto object-cover mt-2" />
                <h2 className="text-2xl  mt-4 text-center text-gray-600 " >iATER는 라오스 청년들을 균형잡힌 ICT 전문인재를 키우고자 <br /> 다양한 관점에서 교육과 연구를 진행하고 있습니다. </h2>
              </div>

            </div>
          </div>

          <div className="pt-24" id="logo">

            <div>
              <h1 className="text-4xl font-bold mb-4 text-[#105691]">{t("home.aboutMenuItems7")}</h1>
              <div className=" p-4 rounded-lg mb-8 text-center">
                <div className={`${isMobile ? "flex-col" : "flex"} gap-10 items-center justify-center`}>
                  <div className={`${isMobile ? "w-[60%]" : "w-[40%]"}`}>
                    <img src={"/webimage/biglogo.png"} alt="logo" className="w-full h-auto object-cover" />
                  </div>
                  {/* <ListMenu classStyle='flex-col' /> */}

                  <div className={`flex flex-col  space-y-6 ${isMobile ? "mt-12":""}`}>

                    <botton onClick={()=> handleClick("about")}  className="flex gap-4 cursor-pointer transition-all duration-300 hover:text-gray-400">
                      <div >
                        <img src="/webimage/Rectangle1.png" alt="about iATER" className="w-[50px] h-auto object-cover" />
                      </div>

                      <p>정확성과 신뢰 : 데이터 중심, 체계적 교육 품질</p>

                    </botton>

                    <botton onClick={()=> handleClick("project")} className="flex gap-4 cursor-pointer  transition-all duration-300 hover:text-gray-400">

                      <div >
                        <img src="/webimage/Rectangle2.png" alt="project" className="w-[50px] h-auto object-cover" />
                      </div>
                      <p>사회적 임팩트와 협업 : 산학연 협력, 지속가능성
                      </p>

                    </botton>

                    <botton onClick={()=> handleClick("program")}  className="flex gap-4 cursor-pointer transition-all duration-300 hover:text-gray-400">

                      <div >
                        <img src="/webimage/Rectangle3.png" alt="Program" className="w-[50px] h-auto object-cover" />
                      </div>
                      <p>도전과 돌파 : 난제를 뚫는 연구정신, 장기적 신뢰감</p>
                    </botton>


                    <botton onClick={() => navigate("/")}  className="flex gap-4 cursor-pointer transition-all duration-300 hover:text-gray-400">
                      <div >
                        <img src="/webimage/Rectangle4.png" alt="none" className="w-[50px] h-auto object-cover" />
                      </div>
                      <p>탐구와 창의: 상상력, 학문 간 융합</p>
                    </botton>

                  </div>

                </div>
                <h1 className={` font-bold mb-4 text-[#7b2d83] uppercase ${isMobile ? "text-[2rem] mt-12": "text-[5rem]"}`}>Step up knowledge</h1>
                <h2 className="text-4xl">지식을 한 단계씩 확장하는 연구·교육 허브</h2>
              </div>


            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage
