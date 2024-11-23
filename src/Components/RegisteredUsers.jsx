import React, { useEffect, useState } from "react";
import countrydata from "../Country.json";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useMediaQuery } from "react-responsive";
import "react-circular-progressbar/dist/styles.css";

const RegisteredUsers = ({ selectedCountry, isDarkMode }) => {
  const [registeredUsers, setRegisteredUsers] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const userIconLight = `${process.env.PUBLIC_URL}/Images/Figma Assests/register-user-light-theme.png`;
  const userIconDark = `${process.env.PUBLIC_URL}/Images/Figma Assests/register-user-dark-theme.png`;

  useEffect(() => {
    const countryData = countrydata.countries.find(
      (country) => country.country === selectedCountry
    );

    if (countryData && countryData.stats && countryData.stats.registeredUsers) {
      const usersData = countryData.stats.registeredUsers;
      const total = usersData.premiumUsers + usersData.basicUsers || 0; // Total users calculation
      setRegisteredUsers(usersData);
      setTotalUsers(total);
    } else {
      setRegisteredUsers(null);
      setTotalUsers(0);
    }
  }, [selectedCountry]);

  if (registeredUsers === null) {
    return <div>Loading...</div>;
  }

  const premiumPercentage = Math.round(
    (registeredUsers.premiumUsers / totalUsers) * 100
  );

  return (
    <div
      className={`flex ml-5 ${
        isDarkMode ? "bg-[#1F214A]" : "bg-[#FFFFFF]"
      } rounded-xl w-[90%] xl:w-[95%] p-3 border-[#00000029] border flex-col items-center`}
    >
      <p
        className={`text-start w-full ${
          isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
        } ml-5 ${isMobile ? "text-sm mb-2" : "text-xl"} font-bold`}
      >
        Registered Users
      </p>
      <div
        style={{
          width: isMobile ? "150px" : "250px",
          height: isMobile ? "50px" : "120px",
          position: "relative",
        }}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isMobile ? "top-10" : "top-5"
          }`}
        >
          <img
            src={isDarkMode ? userIconDark : userIconLight}
            alt="User Icon"
            className={isMobile ? "w-10 h-10" : "w-12 h-12"}
          />
        </div>
        <div style={{ position: "relative" }}>
          <CircularProgressbar
            value={100}
            circleRatio={0.61}
            styles={buildStyles({
              rotation: 0.695,
              strokeLinecap: "butt",
              trailColor: "#eee",
              pathColor: "#696FFB99",
            })}
            strokeWidth={isMobile ? 10 : 12}
          />
          <CircularProgressbar
            value={premiumPercentage}
            circleRatio={0.61}
            text={`${totalUsers.toLocaleString()}`}
            styles={buildStyles({
              rotation: 0.695,
              strokeLinecap: "butt",
              trailColor: "transparent",
              pathColor: "#696FFB",
              textColor: isDarkMode ? "#FFFFFF" : "#000000",
            })}
            strokeWidth={isMobile ? 10 : 12}
            className="absolute inset-0"
          />
        </div>
        {/* Total Users  */}
        <p
          className={`text-center text-sm md:text-lg ${
            isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
          } ${
            isMobile
              ? "-m-16 text-[0.6rem] font-bold"
              : "-mt-24 text-sm font-bold"
          } text-[#00000099]`}
        >
          Total Users
        </p>
      </div>
      <div className="mt-20 flex justify-between w-full">
        {/* Premium Users */}
        <div className="relative flex">
          <div className="absolute left-0 top-1/2 h-[70%] w-[4px] bg-[#696FFB] rounded-full -translate-y-1/2"></div>
          <div className="flex-col flex pl-3">
            <p
              className={`font-semibold  ${
                isDarkMode ? "text-[#ffff]" : "text-[#000000]"
              } ${isMobile ? "text-[0.8rem]" : "text-sm"}`}
            >
              {registeredUsers.premiumUsers.toLocaleString()}
            </p>
            <p
              className={`text-[#00000099] ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } ${isMobile ? "text-[0.7rem]" : "text-sm"}`}
            >
              Premium Users
            </p>
          </div>
        </div>

        {/* Basic Users */}
        <div className="relative flex">
          <div className="flex-col flex pr-3">
            <p
              className={`font-semibold  ${
                isDarkMode ? "text-[#ffff]" : "text-[#000000]"
              } ${isMobile ? "text-[0.8rem]" : "text-sm"} text-end`}
            >
              {registeredUsers.basicUsers.toLocaleString()}
            </p>
            <p
              className={`text-[#00000099]  ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } ${isMobile ? "text-[0.7rem]" : "text-sm"}`}
            >
              Basic Users
            </p>
          </div>
          <div className="absolute right-0 top-1/2 h-[70%] w-[4px] bg-[#696FFB99] rounded-full -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsers;
