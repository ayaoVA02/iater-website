import Logo from "../components/Logo"
import LanguageSelector from "../components/LanguageSelector"
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProgramPage = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <h1 className="text-center text-xl mb-6">iATER는 배움이 있습니다</h1>

        <div className="relative ">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={30}
            slidesPerView={1}

            className="rounded-md overflow-hidden"
          >

            <SwiperSlide>

              {/* slide 1 */}
              <div className="max-w-5xl mx-auto p-6 font-sans">
                <h2 className="text-xl font-bold mb-6">1. 사업계획 : 연구소 중장기 계획</h2>

                <div className="bg-blue-100 p-6 rounded-lg relative overflow-hidden">

                  {/* <div className="absolute top-0 right-0 bg-blue-300 h-[10rem] w-full -z-0 opacity-[0.3]"></div> */}



                  {/* Initial Phase Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/5">
                      <div className="bg-gray-600 text-white rounded-full py-3 px-4 flex flex-col items-center justify-center">
                        <div className="font-bold">초기</div>
                        <div>2020~2023</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-gray-600 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">연구원 개인능력 배양</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-gray-600 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">연구원 설립</div>
                      </div>
                    </div>
                  </div>

                  {/* Middle Phase Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/5">
                      <div className="bg-blue-500 text-white rounded-full py-3 px-4 flex flex-col items-center justify-center">
                        <div className="font-bold">중기</div>
                        <div>2023~2025</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-blue-500 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">석사배출, 프로젝트 업무 및 인턴 실</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-blue-500 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">연구원 분야별 세부분할<br />AI연구소,디자인연구소,소프트융합</div>
                      </div>
                    </div>
                  </div>

                  {/* Mid-to-Late Phase Row */}
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/5">
                      <div className="bg-yellow-600 text-white rounded-full py-3 px-4 flex flex-col items-center justify-center">
                        <div className="font-bold">중장기</div>
                        <div>2026~2029</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-yellow-600 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">국내유학 (석사 배출) 및 박사과정<br />국내 벤처기업 취업</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-yellow-600 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">연구원 확대(로봇, Smart Mobile)<br />기업과 공동연구개발</div>
                      </div>
                    </div>
                  </div>

                  {/* Long-term Phase Row */}
                  <div className="flex gap-4">
                    <div className="w-1/5">
                      <div className="bg-amber-700 text-white rounded-full py-3 px-4 flex flex-col items-center justify-center">
                        <div className="font-bold">장기</div>
                        <div>2030~</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-amber-700 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">현지인 Lab 운영 협력<br />Start up 창업지원</div>
                      </div>
                    </div>
                    <div className="w-2/5">
                      <div className="bg-amber-700 text-white h-full flex items-center justify-center p-4">
                        <div className="text-center">라오스에서 관련분야를 리드하는 연구기관</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* end slide 1 */}
            </SwiperSlide>
            <SwiperSlide>

              {/* slide 2 */}
              <div className="max-w-4xl mx-auto p-6 font-sans">
                <h2 className="text-xl font-bold mb-6">2. iATER 교육과정</h2>

                <div className="relative w-full max-w-2xl mx-auto">
                  {/* INTERN Section */}
                  <div className="flex">
                    <div className="w-1/3">
                      <div className="bg-blue-100 p-4 rounded-tl-lg h-full">
                        <h3 className="text-center font-bold mb-2">1년차</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>기초 프로그래밍</li>
                          <li>기초 디자인</li>
                          <li>언어 [영어, 한국어]</li>
                          <li>기본활동 교양 [수학, 인문학]</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div className="bg-blue-200 p-4 flex items-center justify-center rounded-tr-lg h-full">
                        <h2 className="text-3xl font-bold text-white">INTERN</h2>
                      </div>
                    </div>
                  </div>

                  {/* JUNIOR Section */}
                  <div className="flex mt-1">
                    <div className="w-1/3">
                      <div className="bg-blue-300 p-4 flex items-center justify-center h-full">
                        <h2 className="text-3xl font-bold text-white">JUNIOR</h2>
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div className="bg-blue-200 p-4 h-full">
                        <div className="text-center font-bold mb-2">2,3 년차</div>
                        <ul className="text-sm space-y-1 pl-5">
                          <li>프로그램 프로젝트 참여</li>
                          <li>교육참여 Teaching 과정</li>
                          <li>디자인, 영상 프로젝트</li>
                          <li>공학 수학</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* SENIOR Section */}
                  <div className="flex mt-1">
                    <div className="w-1/3">
                      <div className="bg-blue-400 p-4 h-full">
                        <h3 className="text-center font-bold mb-2">4년차</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1 text-white">
                          <li>IT기업체 인턴경험</li>
                          <li>석 박사 대학원 준비과정</li>
                          <li>연아능력시험</li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div className="bg-blue-400 p-4 flex flex-col items-center justify-center h-full relative">
                        <h2 className="text-3xl font-bold text-white">SENIOR</h2>
                        <div className="absolute bottom-4 right-4 bg-blue-500 px-3 py-1 rounded text-white font-bold">
                          After iATER
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* iATER Section */}
                  <div className="flex mt-1">
                    <div className="w-1/3">
                      <div className="bg-blue-600 p-4 flex items-center justify-center rounded-bl-lg h-full">
                        <h2 className="text-3xl font-bold text-white">iATER</h2>
                      </div>
                    </div>
                    <div className="w-2/3">
                      <div className="bg-blue-600 p-4 text-white rounded-br-lg h-full">
                        <h3 className="font-bold mb-2">ICT 관련 학과 석 박사 과정 진학</h3>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          <li>한국 러오스 ICT 기업체 취업</li>
                          <li>한국 ICT 프로젝트 연구원 활동</li>
                          <li>ICT Startup incubation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-gray-700">
                  This program is conducted in parallel with university education, combining academic learning
                  with practical project-based research and real-world applications.
                </p>
              </div>

              {/* end slide 2 */}
            </SwiperSlide>

            <SwiperSlide>
              {/* slide 3 */}
              <div className="max-w-5xl mx-auto p-6 font-sans">
                <h2 className="text-xl font-bold mb-6">3. 기관과 연계 계획</h2>

                <div className="bg-blue-100 p-6 rounded-lg">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-center mb-8">Relationships and roles for each institution and iATER</h3>

                  <div className="flex flex-col md:flex-row relative">
                    {/* Left Column - Companies */}
                    <div className="w-full md:w-1/4 flex flex-col items-center justify-start z-10">
                      <div className="bg-yellow-400 p-4 w-64 text-center font-bold text-xl shadow-md h-[40%]">
                        국내외 기업
                      </div>

                      {/* Green boxes */}
                      <div className="mt-20 space-y-4 w-full">
                        <div className="bg-green-400 p-4 text-center shadow-md">
                          <p className="font-bold">편입학 2년과정</p>
                          <p>(학사)</p>
                        </div>

                        <div className="bg-green-400 p-4 text-center shadow-md">
                          <p className="font-bold">대학 3년과정</p>
                          <p>(준학사)</p>
                        </div>
                      </div>
                    </div>

                    {/* Middle Column - Korean Studies */}
                    <div className="w-full md:w-1/4 flex flex-col items-center mt-8 md:mt-0 z-10">
                      <div className="bg-pink-500 p-4 w-64 text-center font-bold text-xl text-white shadow-md h-[40%]">
                        석박사 한국유학
                      </div>

                      {/* Green box at bottom */}
                      <div className="mt-20 md:mt-auto">
                        <div className="bg-green-400 p-4 text-center shadow-md w-64">
                          <p className="font-bold">대학교</p>
                          <p className="font-bold">4년과정</p>
                          <p>(학사)</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - iATER */}
                    <div className="w-full md:w-1/2 bg-blue-500 rounded-r-lg p-4 mt-8 md:mt-0 z-10">
                      <div className="text-center mb-4">
                        <h3 className="text-3xl font-bold text-white">iATER</h3>
                      </div>

                      <div className="space-y-3">
                        <div className="bg-white p-3 text-right rounded ">
                          <p className="font-medium">Professional research & development by field</p>
                        </div>

                        <div className="bg-white p-3 text-center rounded ">
                          <p className="font-medium">프로젝트를 통한 개발능력 향상</p>
                        </div>

                        <div className="bg-white p-3 text-center rounded ">
                          <p className="font-medium">프로그래밍 및 알고리즘</p>
                        </div>

                        <div className="bg-white p-3 text-center rounded ">
                          <p className="font-medium">언어 : 영어 & 한국어</p>
                          <p className="font-medium">수학 및 기초공학</p>
                          <p className="font-medium">직업윤리</p>
                        </div>
                      </div>
                    </div>

                    {/* Bidirectional Arrow */}
                    <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full md:w-1/2 h-12 hidden md:flex items-center justify-center">
                      <div className="relative w-full h-4">
                        {/* Left to Right Arrow */}
                        <div className="absolute left-0 w-full h-4 flex items-center">
                          <div className="h-2 bg-yellow-400 flex-grow"></div>
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-yellow-400"></div>
                        </div>

                        {/* Right to Left Arrow */}
                        <div className="absolute left-0 w-full h-4 flex items-center">
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-blue-500"></div>
                          <div className="h-2 bg-blue-500 flex-grow"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end slide 3 */}

            </SwiperSlide>

            <SwiperSlide>

              {/* slide 4 */}
              <div className="mb-12">
                <h2 className="text-lg font-bold mb-4">4. Mission Statement</h2>
                <p className="mb-4 text-center">iATER가 추구하는 목표입니다</p>

                <div className="flex justify-around">
                  <div className="text-center">
                    <Link to={'/aieducation'} >
                    <div className="w-20 h-20 mx-auto border-2 border-gray-300 rounded-lg p-2 mb-2">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    </Link>
                    <p className="text-xs">사·인재 양성센터</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto border-2 border-gray-300 rounded-lg p-2 mb-2">
                    <Link to={'/aieducation'} >
                    
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
                        <rect x="8" y="8" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="2" />
                        <rect x="10" y="10" width="4" height="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </Link>
                    </div>
                    <p className="text-xs">
                      연구·개발센터 및<br />
                      제품 기술 연구
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto border-2 border-gray-300 rounded-lg p-2 mb-2">

                    <Link to={'/aieducation'} >
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
                    </Link>
                    </div>
                    <p className="text-xs">AI·정보화센터</p>
                  </div>
                </div>
              </div>

              {/* end slide 4 */}
            </SwiperSlide>

          </Swiper>
          
        </div>



{/* Navigation Buttons */}
{activeIndex > 0 && (
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="cursor-pointer absolute left-[30px] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 active:scale-95 active:ring active:ring-blue-300"
            >
              <BiChevronLeft size={24} />
            </button>
          )}

          {activeIndex < 3 && (
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="cursor-pointer absolute right-[30px] top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow transition-colors duration-300 hover:border-blue-500 hover:text-blue-500 active:scale-95 active:ring active:ring-blue-300"
            >
              <BiChevronRight size={24} />
            </button>
          )}


      </div>
    </div>
  )
}

export default ProgramPage
