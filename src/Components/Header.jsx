import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";

export default function Header({
  selectedCountry,
  setSelectedCountry,
  isDarkMode,
  isCollapsed,
}) {
  const profile = `${process.env.PUBLIC_URL}/Images/Figma Assests/profile-icon.png`;

  const flagImages = {
    USA: "/Images/usa.png",
    Canada: "/Images/canada.png",
    Germany: "/Images/germany.png",
    Japan: "/Images/japan.png",
    India: "/Images/india.png",
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div
      className={`header ${
        isCollapsed ? "collapsed" : ""
      } border-b-[1px] px-4 flex items-center justify-between ${
        isDarkMode
          ? "bg-[#1F214A] text-[#FFFFFF99] border-[#FFFFFF29]"
          : "bg-[#FFFFFF] text-[#00000099] border-gray-300"
      }`}
    >
      <p className="text-lg md:text-2xl font-bold ml-0 md:ml-6">Dashboard</p>
      <div
        className={` ml-auto mr-4 flex w-28 md:w-52 h-9 px-2 rounded-full items-center ${
          isDarkMode
            ? "bg-[#212529] text-[#E0E0E2]"
            : "bg-[#F0F2F4] text-[#00000099]"
        }`}
      >
        {/* Flag Image */}
        <img
          src={flagImages[selectedCountry]}
          alt={`${selectedCountry} flag`}
          className=" w-4 h-4 md:w-6 md:h-6 mr-2 rounded-full"
        />

        {/* Country Selector */}
        <select
          className="appearance-none px-1  text-[10px] md:text-lg flex items-center bg-transparent rounded-none focus:outline-none w-12 md:w-44"
          value={selectedCountry}
          onChange={handleCountryChange}
          style={{
            backgroundColor: isDarkMode ? "#212529" : "#F0F2F4",
            color: isDarkMode ? "#E0E0E2" : "#00000099",
          }}
        >
          <option
            value="USA"
            style={{
              backgroundColor: isDarkMode ? "#333" : "#FFF",
              color: isDarkMode ? "#E0E0E2" : "#000",
            }}
          >
            USA
          </option>
          <option
            value="Canada"
            style={{
              backgroundColor: isDarkMode ? "#333" : "#FFF",
              color: isDarkMode ? "#E0E0E2" : "#000",
            }}
          >
            Canada
          </option>
          <option
            value="Germany"
            style={{
              backgroundColor: isDarkMode ? "#333" : "#FFF",
              color: isDarkMode ? "#E0E0E2" : "#000",
            }}
          >
            Germany
          </option>
          <option
            value="Japan"
            style={{
              backgroundColor: isDarkMode ? "#333" : "#FFF",
              color: isDarkMode ? "#E0E0E2" : "#000",
            }}
          >
            Japan
          </option>
          <option
            value="India"
            style={{
              backgroundColor: isDarkMode ? "#333" : "#FFF",
              color: isDarkMode ? "#E0E0E2" : "#000",
            }}
          >
            India
          </option>
        </select>
        <LiaAngleDownSolid className="ml-2" />
      </div>

      {/* Profile Section */}
      <div
        className={` h-full items-center flex ${
          isDarkMode ? "border-[#FFFFFF29]" : "border-[#00000029]"
        } border-l-[1px]`}
      >
        <img
          className="w-7 mx-2 bg-cover md:w-8 h-7 md:h-8"
          src={profile}
          alt="Profile Icon"
        />
      </div>
    </div>
  );
}
