import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useDeviceType from "../hook/useDeviceType";
import { useHoverBox } from "../context/HoverContext";

const ProjectBox = ({ title, color, link, subtitle, menuItems }) => {
  const { activeBox ,clearActiveBox } = useHoverBox();
  const [isHovered, setIsHovered] = useState(false);
  const deviceType = useDeviceType();
  const isMobile = deviceType === "mobile";

  const isActive = isHovered || activeBox === "project";

  const backgroundImageUrl = isActive
    ? "/webimage/bg_project2.png"
    : "/webimage/bg_project1.png";


    
  return (
    <div
      className={`relative overflow-hidden transition-transform duration-500 ease-in-out ${
        isMobile ? "w-full" : "w-[390px] h-[390px]"
      } ${isActive && !isMobile ? "scale-125 z-20" : ""}`}
      // onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => {
  setIsHovered(true);
  if (activeBox && activeBox !== "project") clearActiveBox();
}}
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full h-full p-6 flex flex-col justify-center items-center">
        {isActive ? (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 ml-4 transition-transform duration-500 ease-in-out">
              iATER의 활동을 <br /> 소개합니다
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-5xl font-bold text-white text-center mb-2 transition-transform duration-500 ease-in-out">
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

export default ProjectBox;
