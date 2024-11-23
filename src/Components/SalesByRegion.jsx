import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from "recharts";
import countrydata from "../Country.json";

const SalesByRegion = ({ selectedCountry, isDarkMode }) => {
  const [salesByRegionData, setSalesByRegionData] = useState(null);

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const countryData = countrydata.countries.find(
      (country) => country.country === selectedCountry
    );

    if (countryData && countryData.stats && countryData.stats.salesByRegion) {
      setSalesByRegionData(countryData.stats.salesByRegion);
    } else {
      setSalesByRegionData(null);
    }
  }, [selectedCountry]);

  if (salesByRegionData === null) {
    return <div>Loading...</div>;
  }

  const chartData = [
    { region: "Asia", value: salesByRegionData.asia ?? 0 },
    { region: "Europe", value: salesByRegionData.europe ?? 0 },
    { region: "Pacific", value: salesByRegionData.pacific ?? 0 },
    { region: "Americas", value: salesByRegionData.americas ?? 0 },
    { region: "Middle East", value: salesByRegionData.middleEast ?? 0 },
    { region: "Africa", value: salesByRegionData.africa ?? 0 },
  ];

  const RegionNameColor = isDarkMode ? "#FFFFFF99" : "#000000";
  const SalesValuesColor = isDarkMode ? "#FFFFFF" : "#000000";
  const ShadedArea = isDarkMode ? "#696FFBCC" : "#696FFB52";
  const WebLineColor = isDarkMode ? "#696FFB1F" : "#00000029";
  return (
    <div
      className={`w-[90%] border-[#00000029] border rounded-xl ${
        isDarkMode ? "bg-[#1F214A]" : "bg-[#ffffff]"
      }  flex-col ml-5 p-2 flex justify-center items-center`}
    >
      <p
        className={`w-full text-sm md:text-xl ${
          isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
        } font-bold items-start flex pl-5 mt-2`}
      >
        Sales by Region
      </p>
      <div className="overflow-x-auto w-full">
        <div className="min-w-[300px] flex justify-center">
          <RadarChart
            outerRadius={isMobile ? 50 : 95}
            width={isMobile ? 300 : 450}
            height={isMobile ? 200 : 290}
            data={chartData}
          >
            <PolarGrid stroke={WebLineColor} />
            <PolarAngleAxis
              dataKey="region"
              tick={({ payload, x, y, textAnchor }) => {
                const region = payload.value;
                const salesValue = chartData.find(
                  (item) => item.region === region
                )?.value;

                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={isMobile ? -6 : -10}
                      textAnchor={textAnchor}
                      fontSize={isMobile ? 10 : 13}
                      fill={RegionNameColor}
                      fontWeight="bold"
                    >
                      {region}
                    </text>
                    <text
                      x={0}
                      y={isMobile ? 6 : 10}
                      textAnchor={textAnchor}
                      fontSize={isMobile ? 8 : 11}
                      fill={SalesValuesColor}
                      fontWeight="bold"
                    >
                      {salesValue}
                    </text>
                  </g>
                );
              }}
            />
            <Radar
              name={selectedCountry}
              dataKey="value"
              stroke="#8884d8"
              fill={ShadedArea}
              fillOpacity={0.6}
              dot={{ fill: "#555", r: 4 }}
            />
            <Tooltip />
          </RadarChart>
        </div>
      </div>
    </div>
  );
};

export default SalesByRegion;
