"use client";

import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Col, Row, Switch } from "antd";
import { useEffect, useState } from "react";
import HomePortfolioContent from './_home/portfolio-content';
import HomeProfileHeader from './_home/profile-header';
import "./globals.css";
import "./home.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "false") {
      setDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
      return newMode;
    });
  };

  return (
    <Row className="home" style={{ paddingTop: "1rem" }}>
      <Col xs={0} xl={4}></Col>
      <Col xs={24} xl={16}>
        <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: "1rem" }}>
          <Switch
            checked={darkMode}
            onChange={toggleDarkMode}
            checkedChildren={<MoonFilled />}
            unCheckedChildren= {<SunFilled />}
            style={{
              backgroundColor: darkMode ? "rgb(23, 101, 174)" : "rgba(0, 0, 0, .25)",
            }}
          />
        </div>
        
        <Row>
          <Col xs={24} xl={10}>
            <HomeProfileHeader />
          </Col>
          <Col xs={24} xl={14}>
            <HomePortfolioContent />
          </Col>
        </Row>
      </Col>
      <Col xs={0} xl={4}></Col>
    </Row>
  );
}
