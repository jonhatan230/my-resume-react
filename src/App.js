import React, { useState } from "react";
import i18n from "./utils/i18n";
import { Button } from 'react-bootstrap';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./PHOTO.png";
import './App.css';
import { Education } from './componets/Education';
import Skills from './componets/Skills'
import WorkExperience from "./componets/WorkExperience";
import Header from "./componets/Header";
import LanguageSwitcher from "./componets/LenguageSwitcher";




function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = (language) => {
    i18n.locale = language;
    setCurrentLanguage(language);
  };
  return (
    <div className="App">
      <Container fluid>
        <Row style={{ backgroundColor: ' rgba(0, 0, 0, 0.85)' }}>
          <Col><Header /></Col>
        </Row>
        <Row className="m-5"  >
          <Col>
            <div style={{ color: "#1C8EB5", fontSize: "23px", textAlign: "left" }}>{i18n.t("experience-title")}</div>
            <WorkExperience />
          </Col>

          <Col >
            <div style={{ color: "#1C8EB5", fontSize: "23px", textAlign: "left" }}>{i18n.t("education-title")}</div>
            <Education />
            <div style={{ color: "#1C8EB5", fontSize: "23px", textAlign: "left" }}>{i18n.t("skills-title")}</div>
            <Skills />
           
          </Col>
        </Row>

      </Container>
      <LanguageSwitcher changeLanguage={changeLanguage} currentLanguage={currentLanguage} />
    </div>

  );
}

export default App;
