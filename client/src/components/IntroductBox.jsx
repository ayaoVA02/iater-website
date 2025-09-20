import { useState } from "react";
import { Link } from "react-router-dom";
import useDeviceType from "../hook/useDeviceType";
import { useHoverBox } from "../context/HoverContext";

const IntroductBox = ({ title, color, link, subtitle, menuItems }) => {
  const [isHovered, setIsHovered] = useState(false);
  const deviceType = useDeviceType();
  const { activeBox, clearActiveBox } = useHoverBox();
  const isMobile = deviceType === "mobile";

  const isActive = isHovered || activeBox === "about";
  const backgroundImageUrl = isActive
    ? "/webimage/bg_about2.png"
    : "/webimage/bg_about1.png";

  return (
    <div
      className={`relative overflow-hidden  transition-transform duration-500 ease-in-out ${isMobile ? "w-[390px] h-[390px] mx-auto" : "w-[390px] h-[390px]"
        } ${isActive && !isMobile ? "scale-125 z-20" : ""}`}
      onMouseEnter={() => {
        setIsHovered(true);
        if (activeBox && activeBox !== "about") clearActiveBox(); // 👈 clear if hovering different box
      }}
      onMouseLeave={() => setIsHovered(false)}

      style={{
        backgroundImage: `${isMobile ? `url("/webimage/bg_about1.png")` : `url("${backgroundImageUrl}")`}`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: isMobile ? "360px" : "390px",

      }}
    >
      <div className="relative w-full h-full pb-12 flex flex-col justify-end items-center ">
     
        {isMobile ? (
          <>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 ml-4">
                안녕하세요 <br />iATER를 소개합니다
              </h2>
            </div>
            <ul className="text-white space-y-2 pl-24">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="hover:underline">
                    {index + 1}. {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) :
          (
            isActive && menuItems ? (
              <>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4 ml-4">
                    안녕하세요 <br />iATER를 소개합니다
                  </h2>
                </div>

                <ul className="text-white space-y-2 pl-24">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link} className="hover:underline">
                        {index + 1}. {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <h1 className="absolute top-1/2 right-4 transform -translate-x-1/5 -translate-y-1/2 text-white text-5xl font-bold">
                {title}
              </h1>
            )
          )}
      </div>
    </div>
  );
};

export default IntroductBox;
