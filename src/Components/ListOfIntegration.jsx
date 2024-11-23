import React, { useEffect, useState } from "react";
import countrydata from "../Country.json";

export default function ListOfIntegration({ selectedCountry, isDarkMode }) {
  const [list, setList] = useState(null);
  const [selectedApplications, setSelectedApplications] = useState({});
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    const countryData = countrydata.countries.find(
      (country) => country.country === selectedCountry
    );

    if (countryData && countryData.stats && countryData.stats.integration) {
      const integrationData = countryData.stats.integration;
      setList(integrationData);
    } else {
      setList(null);
    }
  }, [selectedCountry]);

  const handleCheckboxChange = (applicationName) => {
    setSelectedApplications((prev) => {
      const updated = { ...prev, [applicationName]: !prev[applicationName] };
      const allSelected = list.every(
        (integration) => updated[integration.application]
      );
      setIsAllSelected(allSelected);
      return updated;
    });
  };

  const handleSelectAllChange = () => {
    const newSelectedState = !isAllSelected;
    setIsAllSelected(newSelectedState);
    const newSelectedApplications = list.reduce((acc, integration) => {
      acc[integration.application] = newSelectedState;
      return acc;
    }, {});
    setSelectedApplications(newSelectedApplications);
  };

  if (list === null) {
    return <div>Loading...</div>;
  }

  const renderProgressBar = (rate) => {
    const progress = Math.min(Math.max(rate, 0), 100);
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "#696FFB33",
            borderRadius: "5px",
            height: "5px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              backgroundColor: "#696FFB",
              height: "100%",
              borderRadius: "5px",
            }}
          ></div>
        </div>
        <span
          style={{
            marginLeft: "8px",
            fontSize: "12px",
            color: isDarkMode ? "#FFFFFF99" : "#00000099",
            fontWeight: "bold",
          }}
        >
          {progress}%
        </span>
      </div>
    );
  };

  const Icons = {
    Stripe: `${process.env.PUBLIC_URL}/Images/Figma Assests/stripe-icon.png`,
    Zapier: `${process.env.PUBLIC_URL}/Images/Figma Assests/zapier-icon.png`,
    Shopify: `${process.env.PUBLIC_URL}/Images/Figma Assests/shopify-icon.png`,
  };

  return (
    <div
      className={`m-5 w-[90%]  ${
        isDarkMode ? "bg-[#1F214A]" : "bg-[#ffffff]"
      } rounded-xl border-[#00000029] border p-5 items-center flex flex-col justify-center`}
    >
      <p
        className={`font-bold flex ${
          isDarkMode ? "text-[#FFFFFF]" : "text-[#000000]"
        } items-start pl-2 w-full text-xl mb-4`}
      >
        List of Integration
      </p>
      <div
        className="overflow-y-auto"
        style={{ maxHeight: "300px", width: "100%" }}
      >
        <table
          className="w-full table-auto border-collapse"
          style={{ tableLayout: "fixed", minWidth: "600px" }}
        >
          <thead style={{ background: "#696FFB14" }}>
            <tr>
              <th
                className="px-4 mb-5 py-2 text-[#00000099] text-left"
                style={{
                  width: "30%",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <div
                  className={`flex font-normal ${
                    isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
                  } items-center`}
                >
                  {/* "Select All" checkbox */}
                  <input
                    type="checkbox"
                    style={{
                      width: "18px",
                      height: "18px",
                    }}
                    checked={isAllSelected}
                    onChange={handleSelectAllChange}
                  />
                  <span className="ml-2">Application</span>
                </div>
              </th>
              <th
                className={`px-4 py-2 font-normal ${
                  isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
                }  text-left`}
                style={{ width: "25%" }}
              >
                Type
              </th>
              <th
                className={`px-4 py-2 font-normal ${
                  isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
                }  text-left`}
                style={{ width: "25%" }}
              >
                Rate
              </th>
              <th
                className={`px-4 py-2 font-normal  ${
                  isDarkMode ? "text-[#FFFFFF99]" : "text-[#00000099]"
                } text-[#00000099] text-left`}
                style={{
                  width: "20%",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Profit
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((integration) => (
              <tr key={integration.application}>
                <td
                  className={`px-4 py-2 ${
                    isDarkMode
                      ? "text-[#FFFFFF] border-[#FFFFFF29]"
                      : "text-[#000000] border-[#00000029]"
                  }  border-b text-left`}
                >
                  <div className="flex items-center space-x-2">
                    {/* Individual checkbox */}
                    <input
                      type="checkbox"
                      style={{
                        width: "18px",
                        height: "18px",
                      }}
                      checked={!!selectedApplications[integration.application]}
                      onChange={() =>
                        handleCheckboxChange(integration.application)
                      }
                    />
                    {/* Application Icon */}
                    {Icons[integration.application] && (
                      <img
                        src={Icons[integration.application]}
                        alt={`${integration.application} icon`}
                        style={{
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    )}
                    <span>{integration.application}</span>
                  </div>
                </td>
                <td
                  className={`px-4 py-4  ${
                    isDarkMode
                      ? "text-[#FFFFFF99] border-[#FFFFFF29]"
                      : "text-[#00000099] border-[#00000029]"
                  } border-b text-left`}
                >
                  {integration.type}
                </td>
                <td
                  className={`px-4 py-4  ${
                    isDarkMode
                      ? "text-[#FFFFFF99] border-[#FFFFFF29]"
                      : "text-[#00000099] border-[#00000029]"
                  } border-b text-left`}
                >
                  {renderProgressBar(integration.rate)}
                </td>
                <td
                  className={`px-4 py-4  ${
                    isDarkMode
                      ? "text-[#FFFFFF99] border-[#FFFFFF29]"
                      : "text-[#00000099] border-[#00000029]"
                  } border-b text-left`}
                >
                  ${integration.profit.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
