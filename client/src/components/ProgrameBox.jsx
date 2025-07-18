import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDeviceType from "../hook/useDeviceType";
import { useHoverBox } from "../context/HoverContext";

const ProgrameBox = ({ title, color, link, subtitle, menuItems }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { activeBox ,clearActiveBox } = useHoverBox(); // Get current activeBox
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  const isActive = isHovered || activeBox === "program";

  const backgroundImageUrl = isActive
    ? "/webimage/bg_program2.png"
    : "/webimage/bg_program1.png";

  return (
    <div
      className={`relative overflow-hidden transition-transform duration-500 ease-in-out ${isMobile ? "w-full" : "w-[390px] h-[390px]"
        } ${isActive && !isMobile ? "scale-125 z-20" : ""}`}
      onMouseEnter={() => {
        setIsHovered(true);
        if (activeBox && activeBox !== "program") clearActiveBox();
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full h-full p-6 flex flex-col justify-center items-start">
        {isActive ? (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 ml-4 transition-transform duration-500 ease-in-out">
              iATER에는 <br />
              배움이 있습니다
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-5xl font-bold text-white mb-2 ml-6 transition-transform duration-500 ease-in-out">
              {title}
            </h2>
          </div>
        )}

        {isActive && menuItems && (
          <ul className="text-white space-y-2 pl-12">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.link} className="hover:underline">
                  {index + 1}. {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProgrameBox;
