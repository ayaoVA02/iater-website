

import { useState } from "react"
import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"
import { im4, im5, im6, im7, im8, im9 } from "../assets/images"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next";

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState("external")
 const { t, i18n } = useTranslation();
  const tabs = [
    { id: "external", name: `${t("home.projectMenuItems1")}`, color: "bg-blue-500" },
    { id: "internal", name: `${t("home.projectMenuItems2")}`, color: "bg-orange-500" },
    { id: "research", name: `${t("home.projectMenuItems3")}`, color: "bg-green-500" },
  ]
 const fontClass = {
    en: "font-en",
    la: "font-lao",
    ko: "font-kr",
  }[i18n.language];

  const projects = [
    {
      id: 1,
      tab: "external",
      title: "항공대 학과 13개교 매니저멘트 HEWEGO",
      date: "2023.03.11",
      views: 1,
      image: im4,
      description:
        "HEWEGO(헤위고)는 4가지 모델을 통하여 13개교 항공대 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
    },
    {
      id: 2,
      tab: "internal",
      title: "경기 복합센터 참여하는 바람, 마음부...",
      date: "2023.03.11",
      views: 14,
      image: im5,
      description:
        "경기도 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
    },
    {
      id: 3,
      tab: "research",
      title: "제6기 신입생 졸업 수료 및 취업처",
      date: "2023.03.10",
      views: 9,
      image: im6,
      description:
        "6기수, 5기수, 3기수 총 13명 신입사 졸업 수료, 12개사 3명씩 졸업 신입사원들에게 수료한 2023년 제6기 신입생 졸업 수료식 개최하여 ~ 졸업 신입사 취업처(이니셜만), 2명 취업 완료하여 신입사원, 2명 취업 활동중",
    },
    {
      id: 4,
      tab: "external",
      title: "고 전효성 시장 5주년 행사 추모 헌화 ~",
      date: "2023.02.13",
      views: 2,
      image:im7,
      description: "추모CG 설명과 기념) 감동을 복사에 헌안 헌화 추모",
    },
    {
      id: 5,
      tab: "internal",
      title: "25년 겨울 강사지도 협회 행사",
      date: "2023.02.01",
      views: 3,
      image: im8,
      description: "FOCUS ON 4차산업혁명 위험안전사회 안전놀이터",
    },
    {
      id: 6,
      tab: "research",
      title: "The 아름다운 꿈들",
      date: "2023.01.30",
      views: 3,
      image: im9,
      description: "제6기 졸업식과 제6기, The 아름다운 꿈들하다",
    },
    {
      id: 7,
      tab: "research",
      title: "The 아름다운 꿈들",
      date: "2023.01.30",
      views: 3,
      image: im9,
      description: "제6기 졸업식과 제6기, The 아름다운 꿈들하다",
    },
    {
      id: 8,
      tab: "research",
      title: "The 아름다운 꿈들",
      date: "2023.01.30",
      views: 3,
      image: im9,
      description: "제6기 졸업식과 제6기, The 아름다운 꿈들하다",
    },
    {
      id: 9,
      tab: "internal",
      title: "25년 겨울 강사지도 협회 행사",
      date: "2023.02.01",
      views: 3,
      image: im8,
      description: "FOCUS ON 4차산업혁명 위험안전사회 안전놀이터",
    },
    {
      id: 10,
      tab: "internal",
      title: "25년 겨울 강사지도 협회 행사",
      date: "2023.02.01",
      views: 3,
      image: im8,
      description: "FOCUS ON 4차산업혁명 위험안전사회 안전놀이터",
    },
    {
      id: 11,
      tab: "external",
      title: "항공대 학과 13개교 매니저멘트 HEWEGO",
      date: "2023.03.11",
      views: 1,
      image: im4,
      description:
        "HEWEGO(헤위고)는 4가지 모델을 통하여 13개교 항공대 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
    },
    {
      id: 12,
      tab: "external",
      title: "항공대 학과 13개교 매니저멘트 HEWEGO",
      date: "2023.03.11",
      views: 1,
      image: im4,
      description:
        "HEWEGO(헤위고)는 4가지 모델을 통하여 13개교 항공대 서비스로 항공 관광을 활성화가 되어있 매니저멘트 시스템으로 CCG와 신한은 U-Campus에서 시작되어 지금 현재 시작하게 되어 TM-그룹스 시스템으로 운영되고 있습니다.",
    },
  ]

  const filteredProjects = projects.filter((project) => project.tab === activeTab)

  return (
    <div className={`bg-white ${fontClass}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <h1 className="text-center text-xl mb-6">{t("home.project_subtitle")}</h1>
<br /><br />
        <div className="flex mb-6 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 cursor-pointer w-42 py-2 ${tab.color} text-white ${activeTab === tab.id ? "font-bold" : "opacity-80"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  {filteredProjects.map((project) => (
    <Link to={`/projectDetail/${project.id}`} key={project.id}>
      <div className="group rounded-lg overflow-hidden cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-2 hover:text-blue-500">{project.title}</h3>
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>{project.date}</span>
            <span>👁 {project.views}</span>
          </div>
          <p className="text-sm">{project.description}</p>
        </div>
      </div>
    </Link>
  ))}
</div>



      </div>
    </div>
  )
}

export default ProjectPage
