import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import countrydata from "../Country.json";

const SalesOverviewChart = ({ selectedCountry, isDarkMode }) => {
  const [chartData, setChartData] = useState([]);
  const [months, setMonths] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalTarget, setTotalTarget] = useState(0);

  useEffect(() => {
    const countryData = countrydata.countries.find(
      (country) => country.country === selectedCountry
    );

    if (countryData && countryData.stats.salesOverview) {
      const formattedData = [...countryData.stats.salesOverview]
        .reverse()
        .map((item) => ({
          month: item.month,
          totalRevenue: item.totalRevenue,
          totalTarget: item.totalTarget,
        }));

      setChartData(formattedData);

      const totalRevenueSum = formattedData.reduce(
        (sum, item) => sum + item.totalRevenue,
        0
      );
      const totalTargetSum = formattedData.reduce(
        (sum, item) => sum + item.totalTarget,
        0
      );

      setTotalRevenue(totalRevenueSum);
      setTotalTarget(totalTargetSum);

      const monthsArray = formattedData.map((item) => ({
        month: item.month,
      }));
      setMonths(monthsArray);
    }
  }, [selectedCountry]);

  return (
    <div
      className={`chart-container ${
        isDarkMode ? "bg-[#1F214A]  text-[#FFFFFF99]" : "bg-[#FFFFFF]"
      }  pt-2 text-[0.7rem] rounded-xl border-[#00000029] border ml-5 w-[90%] xl:w-[95%]`}
    >
      <div
        className={`flex ${
          isDarkMode ? "bg-[#1F214A]" : "bg-[#FFFFFF]"
        } justify-between p-3`}
      >
        <span
          className={`text-sm md:text-xl font-bold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Sales Overview
        </span>
        <div className="flex space-x-6">
          {/* Total Revenue */}
          <div className="flex flex-col items-center">
            <p
              className={`font-medium text-[0.6rem] md:text-[1rem] ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-black"
              }`}
            >
              Total Revenue
            </p>
            <p
              className={`${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              } text-[0.6rem] md:text-sm font-semibold`}
            >{`$${totalRevenue.toLocaleString()}`}</p>
          </div>
          {/* Total Target */}
          <div className="flex flex-col items-center">
            <p
              className={`font-medium text-[0.6rem] md:text-[1rem] ${
                isDarkMode ? "text-[#FFFFFF99]" : "text-black"
              }`}
            >
              Total Target
            </p>
            <p
              className={`${
                isDarkMode ? "text-orange-400" : "text-orange-600"
              } text-[0.6rem] md:text-sm font-semibold`}
            >{`$${totalTarget.toLocaleString()}`}</p>
          </div>
        </div>
      </div>

      {/* Line Chart */}
      <div className="overflow-x-auto py-2">
        <div
          className={`min-w-[600px] ${
            isDarkMode ? "bg-[#1F214A]" : "bg-[#FFFFFF]"
          } `}
        >
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={chartData}
              margin={{ top: 10, right: 15, left: 40, bottom: 0 }}
              strokeWidth={0.5}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                stroke="none"
                dataKey="month"
                reversed={true}
                interval={0}
                tick={{ fill: isDarkMode ? "#FFFFFF99" : "#00000099" }}
              />
              <YAxis
                stroke="none"
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                domain={[0, 20000]}
                ticks={[0, 10000, 20000]}
                orientation="right"
                tick={{ fill: isDarkMode ? "#FFFFFF99" : "#00000099" }}
              />
              <Tooltip
                formatter={(value) => `$${value.toLocaleString()}`}
                contentStyle={{
                  backgroundColor: isDarkMode ? "#333333" : "#FFFFFF",
                  color: isDarkMode ? "#FFFFFF" : "#000000",
                }}
              />

              {/* Line for Total Revenue */}
              <Line
                type="monotone"
                dataKey="totalRevenue"
                stroke="#696FFB"
                name="Total Revenue"
              />
              {/* Line for Total Target */}
              <Line
                type="monotone"
                dataKey="totalTarget"
                stroke="#FF9E2B"
                name="Total Target"
              />

              {months.map((item, index) => {
                if (index % 2 === 0) {
                  const nextIndex =
                    index + 1 < months.length ? index + 1 : index;
                  return (
                    <ReferenceArea
                      key={index}
                      x1={chartData[index].month}
                      x2={chartData[nextIndex]?.month || chartData[index].month}
                      strokeOpacity={0}
                      fill="#696FFB1F"
                    />
                  );
                }
                return null;
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewChart;
