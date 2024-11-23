import { IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import SalesOverviewChart from "./SalesOverViewChart";
import countrydata from "../Country.json";
import SalesByRegion from "./SalesByRegion";
import RegisteredUsers from "./RegisteredUsers";
import ListOfIntegration from "./ListOfIntegration";
export default function Content({ selectedCountry, isDarkMode }) {
  const countryData = countrydata.countries.find(
    (country) => country.country === selectedCountry
  )?.stats;

  if (!countryData) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`content ${isDarkMode ? "bg-[#160931b8]" : "bg-[#696FFB0A]"} `}
    >
      {/* 1st section */}
      <div className="flex-wrap sm:flex items-center my-4 justify-center">
        {/* Total income */}
        <div
          className={`flex-col ${
            isDarkMode ? "bg-[#1F214A]" : "bg-[#ffffff]"
          }  mb-3 mx-4 border rounded-md border-[#00000029] space-y-1 md:space-y-2 px-3 justify-center flex w-[12.5rem] h-24   md:w-72 md:h-32`}
        >
          <p
            className={`text-[0.8rem] ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-sm font-bold`}
          >
            Total income
          </p>
          <p
            className={`text-lg ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-2xl font-bold`}
          >
            ${countryData.totalIncome.toLocaleString()}
          </p>
          <div className="flex space-x-2 items-center">
            <div
              className={`flex rounded-md justify-center items-center ${
                countryData.incomeChange >= 0
                  ? isDarkMode
                    ? "bg-[#2CC483]"
                    : "bg-[#B8E9D4]"
                  : isDarkMode
                  ? "bg-[#FF5E75]"
                  : "bg-[#FDD5DA]"
              } md:w-[4rem] w-[3rem] md:h-7 h-5`}
            >
              {countryData.incomeChange >= 0 ? (
                <IoIosArrowRoundUp
                  className={`w-[0.9rem]   ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              ) : (
                <IoIosArrowRoundDown
                  className={`w-[0.9rem]  ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              )}
              <p
                className={`text-[0.75rem] ${
                  isDarkMode ? "text-[white]" : "text-[black]"
                } md:text-sm`}
              >
                {Math.abs(countryData.incomeChange)}%
              </p>
            </div>
            <p
              className={` ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } text-[0.6rem] md:text-sm`}
            >
              Compared to last month
            </p>
          </div>
        </div>
        {/* Profit */}
        <div
          className={`flex-col  ${
            isDarkMode ? "bg-[#1F214A]" : "bg-[#ffffff]"
          } mx-4 mb-3 border rounded-md border-[#00000029] space-y-1 md:space-y-2 px-3 justify-center flex w-[12.5rem] h-24   md:w-72 md:h-32`}
        >
          <p
            className={`text-[0.8rem] ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-sm font-bold`}
          >
            Profit
          </p>
          <p
            className={`text-lg ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-2xl font-bold`}
          >
            $ {countryData.profit.toLocaleString()}
          </p>
          <div className="flex space-x-2 items-center">
            <div
              className={`flex rounded-md justify-center items-center ${
                countryData.incomeChange >= 0
                  ? isDarkMode
                    ? "bg-[#2CC483]"
                    : "bg-[#B8E9D4]"
                  : isDarkMode
                  ? "bg-[#FF5E75]"
                  : "bg-[#FDD5DA]"
              } md:w-[4rem] w-[3rem] md:h-7 h-5`}
            >
              {countryData.profitChange >= 0 ? (
                <IoIosArrowRoundUp
                  className={`w-[0.9rem]   ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              ) : (
                <IoIosArrowRoundDown
                  className={`w-[0.9rem]  ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              )}
              <p
                className={`text-[0.75rem] ${
                  isDarkMode ? "text-[white]" : "text-[black]"
                } md:text-sm`}
              >
                {Math.abs(countryData.profitChange)}%
              </p>
            </div>
            <p
              className={` ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } text-[0.6rem] md:text-sm`}
            >
              Compared to last month
            </p>
          </div>
        </div>
        {/* Total views */}
        <div
          className={`flex-col ${
            isDarkMode ? "bg-[#1F214A]" : "bg-[#ffffff]"
          }  mb-3 mx-4 border rounded-md border-[#00000029] space-y-1 md:space-y-2 px-3 justify-center flex w-[12.5rem] h-24   md:w-72 md:h-32`}
        >
          <p
            className={`text-[0.8rem] ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-sm font-bold`}
          >
            Total views
          </p>
          <p
            className={`text-lg ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-2xl font-bold`}
          >
            {countryData.totalViews.toLocaleString()}
          </p>
          <div className="flex space-x-2 items-center">
            <div
              className={`flex rounded-md justify-center items-center ${
                countryData.incomeChange >= 0
                  ? isDarkMode
                    ? "bg-[#2CC483]"
                    : "bg-[#B8E9D4]"
                  : isDarkMode
                  ? "bg-[#FF5E75]"
                  : "bg-[#FDD5DA]"
              } md:w-[4rem] w-[3rem] md:h-7 h-5`}
            >
              {countryData.viewsChange >= 0 ? (
                <IoIosArrowRoundUp
                  className={`w-[0.9rem]   ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              ) : (
                <IoIosArrowRoundUp
                  className={`w-[0.9rem]   ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              )}
              <p
                className={`text-[0.75rem] ${
                  isDarkMode ? "text-[white]" : "text-[black]"
                } md:text-sm`}
              >
                {Math.abs(countryData.viewsChange)}%
              </p>
            </div>
            <p
              className={` ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } text-[0.6rem] md:text-sm`}
            >
              Compared to last month
            </p>
          </div>
        </div>
        {/* Conversion rate */}
        <div
          className={`flex-col ${
            isDarkMode ? "bg-[#1F214A]" : "bg-[#ffffff]"
          }  mb-3 mx-4 border rounded-md border-[#00000029] space-y-1 md:space-y-2 px-3 justify-center flex w-[12.5rem] h-24   md:w-72 md:h-32`}
        >
          <p
            className={`text-[0.8rem] ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-sm font-bold`}
          >
            Conversion rate
          </p>
          <p
            className={`text-lg ${
              isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
            }  md:text-2xl font-bold`}
          >
            {countryData.conversionRate}%
          </p>
          <div className="flex space-x-2 items-center">
            <div
              className={`flex rounded-md justify-center items-center ${
                countryData.incomeChange >= 0
                  ? isDarkMode
                    ? "bg-[#2CC483]"
                    : "bg-[#B8E9D4]"
                  : isDarkMode
                  ? "bg-[#FF5E75]"
                  : "bg-[#FDD5DA]"
              } md:w-[4rem] w-[3rem] md:h-7 h-5`}
            >
              {countryData.conversionChange >= 0 ? (
                <IoIosArrowRoundUp
                  className={`w-[0.9rem]   ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              ) : (
                <IoIosArrowRoundUp
                  className={`w-[0.9rem]   ${
                    isDarkMode ? "text-[white]" : "text-[black]"
                  } md:w-[1.2rem] h-[0.9rem] md:h-[1.2rem]`}
                />
              )}
              <p
                className={`text-[0.75rem] ${
                  isDarkMode ? "text-[white]" : "text-[black]"
                } md:text-sm`}
              >
                {Math.abs(countryData.conversionChange)}
              </p>
            </div>
            <p
              className={` ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
              } text-[0.6rem] md:text-sm`}
            >
              Compared to last month
            </p>
          </div>
        </div>
      </div>
      {/* 2nd Section */}
      <div className="flex-wrap items-center xl:flex w-full">
        {/* Sales overview chart */}
        <div className="w-full mb-5 xl:w-[60%]">
          <SalesOverviewChart
            selectedCountry={selectedCountry}
            isDarkMode={isDarkMode}
          />
        </div>
        {/* Sales by Region */}
        <div className="w-full mb-5 xl:w-[40%]">
          <SalesByRegion
            selectedCountry={selectedCountry}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
      {/* 3rd Section  */}
      <div className="flex-wrap items-center xl:flex w-full">
        {/* Registered Users */}
        <div className="w-full xl:w-[40%]">
          <RegisteredUsers
            selectedCountry={selectedCountry}
            isDarkMode={isDarkMode}
          />
        </div>
        {/* List of integration */}
        <div className="w-full xl:w-[60%]">
          <ListOfIntegration
            selectedCountry={selectedCountry}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </div>
  );
}
