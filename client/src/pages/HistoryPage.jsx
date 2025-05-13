import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"


const HistoryPage = () => {
  const historyItems = [
    {
      year: 2025,
      events: [
        "2025 04 01 ~ ICT 대학 5/W 참여 (Web, App, AI) 강사 파견 (NIPA 기술 나눔 프로젝트)",
        "2025 03 07 라오스 국립대학교 공과대학 일본학과 IT 학과 강의 연구자 (AI, App) 분야 강의 교수 지원(활동 기획)",
        "2025 02 16-21 신한메타버스코스모 국립대학교 교육 프로젝트 추진 (AI app)",
      ],
    },
    {
      year: 2024,
      events: [
        "2024 09 라오스 국립대학교(NUOL) 공과대학 일본학과 IT 학과 기술 지원 (AI, App 분야)",
        "2024 07 01 ~ 24.1 Ucompanion 그룹 Ulearn.xyz 와 공동 프로젝트 진행",
        "2024 04 07 iATER 연구회 사업자 등록",
        "2024 2.3~29 연동 수행을 위한 VOX communication 과 muti domain service 서비스 (전자결제 연구 스터디)",
        "2024 2.2~16 Web front end develop 통합 리뉴얼 현장실 1)",
        "2024 01 15~17 AI 활용 서비스 통합 (인공지 코딩)",
      ],
    },
    {
      year: 2023,
      events: [
        "2023 09 05 메타버스(E) 라오스 PDA 블록체인에 참여",
        "2023 08 07 ~ 10 몽골대학 학생 IT CAMP 참가 (메타버 프로젝트)",
        "2023 07 27 로고스 대학 학사과정 시스템 사업 참여",
        "2023 1 23 프로젝트센터 소통 동 참가 자문 기획 참가 (인천마스 팀 김동우 기술이사)",
      ],
    },
    {
      year: 2020,
      events: [
        "2020 10 08 Lao-Korean College 신학 연구기관 iATER 통합",
        "2019 02 05 Lao-Korean College 대학부 구축 완료",
      ],
    },
  ]

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <h1 className="text-center text-xl mb-8">History</h1>

        <div className="space-y-12 mb-12">
          {historyItems.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-1/4 pr-6">
                <h2 className="text-3xl font-bold text-blue-500">{item.year}</h2>
              </div>
              <div className="w-3/4 space-y-4">
                {item.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="flex">
                    <div className="mr-2">•</div>
                    <div className="text-sm">{event}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default HistoryPage
