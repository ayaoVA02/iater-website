import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBox = ({ title, color, link, subtitle, menuItems }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // now includes tablets

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-500",
    orange: "bg-orange-500 hover:bg-orange-500",
    green: "bg-green-500 hover:bg-green-500",
  };

  const showDetails = isMobile || isHovered;

  return (
    <div
      className="relative flex justify-center items-center w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${colorClasses[color]} 
          lg:absolute w-full max-w-[400px] lg:mt-[60%]
          rounded-[50px] lg:hover:rounded-[100px] 
          p-8 text-white text-center 
          transition-all duration-300 transform origin-center 
          ${isMobile ? "h-[400px]" : "h-[200px] lg:hover:h-[400px] lg:hover:scale-110"} 
          flex flex-col justify-center items-center 
          ${!isMobile && "lg:hover:z-30"}
        `}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-sm">{subtitle}</p>

        {showDetails && menuItems && (
          <div className="w-full mt-4 transition-all duration-300">
            <ul className="text-left">
              {menuItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <Link to={item.link} className="hover:underline">
                    {index + 1}. {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBox;
