import React, { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdCard } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { BsChatSquareText } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoIosSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function Sidebar({
  isDarkMode,
  setIsDarkMode,
  isCollapsed,
  setIsCollapsed,
}) {
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? "80px" : "170px";

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const logoDark = "/Images/Figma Assests/Logo-dark.png";
  const logoLight = "/Images/Figma Assests/Logo-light.png";

  return (
    <div
      className={`sidebar  ${
        isDarkMode
          ? "bg-[#1F214A] text-[#FFFFFF99] border-[#FFFFFF29]"
          : "bg-[#FFFFFF] text-[#00000099] border-[#00000029] "
      } border-r-[1px]  flex flex-col justify-between h-screen transition-all duration-300 ease-in-out`}
      style={{ width: sidebarWidth }}
    >
      {/* Top Content */}
      <div>
        {/* Logo */}
        <span
          className="flex space-x-2 items-center mt-4 justify-center cursor-pointer"
          onClick={handleToggleCollapse}
        >
          {isCollapsed ? (
            <img
              src={isDarkMode ? logoDark : logoLight}
              alt="Logo"
              className="w-7 h-7"
            />
          ) : (
            <p
              className={`text-xl font-bold ${
                isCollapsed ? "hidden" : "block"
              } transition-opacity`}
            >
              Sellerapp
            </p>
          )}
          <FaArrowRight
            className={`border-[1px] flex items-center mt-1 justify-center ${
              isDarkMode ? "border-white" : "border-black"
            } w-4 h-4 transition-transform ${
              isCollapsed ? "rotate-0" : "rotate-180"
            }`}
          />
        </span>

        {/* Sidebar Elements */}
        <div className="flex mt-1  flex-col">
          {/* Section 1 */}
          <ul className="py-2 pl-2 border-b-[1px] border-gray-400">
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<MdOutlineSpaceDashboard />}
              text="Dashboard"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<IoMdCard />}
              text="Payments"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<FiUsers />}
              text="Customers"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<BsChatSquareText />}
              text="Messages"
            />
          </ul>
          {/* Section 2 */}
          <ul className="py-2 pl-2 space-y-2 border-b-[1px] border-gray-400">
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<HiOutlineShoppingBag />}
              text="Product"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<IoNewspaperOutline />}
              text="Invoice"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<BsGraphUpArrow />}
              text="Analytics"
            />
          </ul>
          {/* Section 3 */}
          <ul className="py-2 pl-2 space-y-2 border-b-[1px] border-gray-400">
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<IoSettingsOutline />}
              text="Settings"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<MdOutlineSecurity />}
              text="Security"
            />
            <SidebarItem
              isCollapsed={isCollapsed}
              isDarkMode={isDarkMode}
              icon={<IoHelpCircleOutline />}
              text="Help"
            />
          </ul>
          <span
            className={`flex mt-1 py-2  hover:bg-[#696FFB3D] rounded-md pl-6 space-x-2 items-center ${
              isDarkMode ? "hover:text-[#FFFFFF]" : "hover:text-[#696FFB]"
            }`}
          >
            <MdLogout className="w-6 h-6  rotate-180" />
            {!isCollapsed && <p>Log Out</p>}
          </span>
        </div>
      </div>

      {/* Dark/Light Mode Section */}
      <div className="flex items-center justify-center space-x-2 mb-4">
        {!isCollapsed && <p>Dark</p>}
        <div
          className="w-12 space-x-1 rounded-full px-1 py-2 relative h-6 bg-[#696FFB] flex items-center cursor-pointer"
          onClick={toggleDarkMode}
        >
          <IoIosSunny className="w-4 h-4 text-[#FFD74B]" />
          <div
            className={`w-[1rem] h-[1rem] absolute transition-all duration-300 ease-in-out rounded-full bg-white ${
              isDarkMode
                ? "transform translate-x-4"
                : "transform -translate-x-1"
            }`}
          ></div>
          <IoMoon className="w-4 h-4  text-[#FFD74B]" />
        </div>
        {!isCollapsed && <p>Light</p>}
      </div>
    </div>
  );
}

function SidebarItem({ isCollapsed, isDarkMode, icon, text }) {
  return (
    <li
      className={`flex rounded-md items-center space-x-2 py-2 px-4 ${
        isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
      } hover:bg-[#696FFB3D] hover:text-[#696FFB] `}
    >
      {React.cloneElement(icon, {
        className: "w-6 h-6 hover:text-[#696FFB]",
      })}
      {!isCollapsed && <p>{text}</p>}
    </li>
  );
}
