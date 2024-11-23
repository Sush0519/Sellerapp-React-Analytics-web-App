import React, { useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import Sidebar from "./Components/Sidebar";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="App">
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <MainSection isCollapsed={isCollapsed}>
        <Header
          className="header"
          isCollapsed={isCollapsed}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          isDarkMode={isDarkMode}
        />
        <Content
          className="content"
          selectedCountry={selectedCountry}
          isDarkMode={isDarkMode}
        />
      </MainSection>
    </div>
  );
}

export default App;
