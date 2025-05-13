// PeoplePage.tsx

import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";
import Banner from "../components/Banner";
import { prfJongbum } from "../assets/images";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const PeoplePage = () => {
  const people = [
    {
      id: 1,
      name: "북유럽 씨름 뿌리는 영상 선교사 CTS",
      position: "대표 교수",
      image: prfJongbum,
      description: "1번 교수에 대한 상세 설명입니다.",
    },
    {
      id: 2,
      name: "성장의 놀라움 전달하는 CTS",
      position: "연구원 교수",
      image: prfJongbum,
      description: "2번 교수에 대한 상세 설명입니다.",
    },
    {
      id: 3,
      name: "디지털 선교 리더 CTS",
      position: "지도 교수",
      image: prfJongbum,
      description: "3번 교수에 대한 상세 설명입니다.",
    },
    {
      id: 4,
      name: "다문화 사역 전문가 CTS",
      position: "조교수",
      image: prfJongbum,
      description: "4번 교수에 대한 상세 설명입니다.",
    },
    {
      id: 5,
      name: "차세대 교육 혁신가 CTS",
      position: "부교수",
      image: prfJongbum,
      description: "5번 교수에 대한 상세 설명입니다.",
    },
    {
      id: 6,
      name: "글로벌 비전 선포자 CTS",
      position: "전임 교수",
      image: prfJongbum,
      description: "6번 교수에 대한 상세 설명입니다.",
    },
  ];

  // Split people into groups of 2
  const chunkedPeople = [];
  for (let i = 0; i < people.length; i += 2) {
    chunkedPeople.push(people.slice(i, i + 2));
  }
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <LanguageSelector />
        </div>

        <h1 className="text-xl mb-8">함께 하는 이들</h1>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {chunkedPeople.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-8 lg:px-18">
                {group.map((person) => (
                  <div key={person.id} className="flex flex-col md:flex-row pb-6">
                    <div className="md:w-2/3 pr-6 mb-4 md:mb-0">
                      <h2 className="font-bold text-lg mb-2">{person.name}</h2>
                      <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded mb-4">
                        {person.position}
                      </button>
                      <p className="text-sm">{person.description}</p>
                    </div>
                    <div className="relative w-full h-48 bg-amber-300"> {/* Parent needs relative */}
                      <div className="absolute right-0 top-0 h-full w-auto">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="h-full object-contain rounded border border-b-blue-400 border-r-blue-500 border-t-0 border-l-0"
                        />
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="max-sm:hidden max-lg:hidden">

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


    </div>
  );
};

export default PeoplePage;
