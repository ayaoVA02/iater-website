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
import useDeviceType from "../hook/useDeviceType";

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




  const deviceType = useDeviceType();
  const getContentWidth = () => {
    if (deviceType === 'desktop') return 'desktopWidth';
    if (deviceType === 'tablet') return 'templetWidth';
    return 'mobileWidth'; // mobile
  };
  return (
    <div className="">
      {/* <h1 className="text-xl text-center mb-3">함께 하는 이들</h1> */}
      {/* <div className="widthfixed mx-auto px-4 py-6 relative "> */}
      <div className={`${getContentWidth()} mx-auto px-4 py-6 relative flex flex-col gap-24 `}>

        <div className="flex items-start justify-between mb-6 ">
          <div className="w-1/3 flex items-center gap-4">
            <img src="/icon/Solid/PNG/fan_.png" alt=""  className="w-[100px] h-auto object-cover rounded-xl"/>
            <h1 className="text-4xl font-bold text-[#105691]">Advisor</h1>
          </div>
          <div className="w-full justify-around flex ">
            <a href="/iater/advisor#leejong">

              <img src="/professors/leejong.png" alt=" professor leejong" className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/advisor#somphone">

              <img src="/professors/somphone.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
          </div>
        </div>
        <div className="flex items-start justify-between mb-6 ">
           <div className="w-1/3 flex items-center gap-4">
            <img src="/icon/Solid/PNG/processor_.png" alt=""  className="w-[100px] h-auto object-cover rounded-xl"/>

            <h1 className="text-4xl font-bold text-[#105691]">Profssors</h1>
          </div>
          <div className="w-full justify-around flex flex-wrap">
            <a href="/iater/professors#baek" className="mb-8">

              <img src="/professors/Baek.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/professors#limjae" className="mb-8">

              <img src="/professors/limjea.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/professors#oh" className="mb-8">

              <img src="/professors/Oh hyun.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/professors#ryu" className="mb-8">

              <img src="/professors/RYU.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/professors#sangsik" className="mb-8">

              <img src="/professors/Lee sang.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/professors#choi" className="mb-8">

              <img src="/professors/Choi nak.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
          </div>
        </div>

        <div className="flex items-start justify-between mb-6 ">
           <div className="w-1/3 flex items-center gap-4">
            <img src="/icon/Solid/PNG/save_.png" alt=""  className="w-[100px] h-auto object-cover rounded-xl"/>
           <h1 className="text-4xl font-bold text-[#105691]">Human Resource & Finance</h1>
          </div>
          <div className="w-full justify-around flex ">
            <a href="/iater/humanresource#yu">

              <img src="/professors/Jaesil YU.png" alt=" professor leejong" className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
            <a href="/iater/humanresource#seangta">

              <img src="/professors/Seangta PHILAVONG.png" alt=" professor " className="w-[350px] h-auto object-cover rounded-xl" />
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default PeoplePage;
