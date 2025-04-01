import "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js";
import "//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js";
import "//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js";

import "./App.css";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PageBrandSlider from "./component/Brander";
import PageFooter from "./component/AppFooter";
import HeaderContent from "./component/้HeaderContent";
import PageNavbar from "./component/Navbar";
import Services from "./component/Services";
import Project from "./component/Project";
import About from "./component/About";
import ProjectItem from "./component/ProjectItem";
import Team from "./component/Team";

const App = () => {
  return (
    <div id="page-top" className="index">
      <PageNavbar />
      {/* <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      > */}
      <header>
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in"></div>
            <div className="intro-head">
              <div className="intro-heading" id="flip">
                <div>
                  <img
                    className="logo-deteil"
                    src="../public/images/logo.png"
                  ></img>
                  <div>SET GROUP SOLUTION CO.,LTD.</div>
                  <br></br>
                  <img
                    className="logo-deteil"
                    src="../public/images/SET_TECH.png"
                  ></img>
                  <div>SET TECH Ltd..part.</div>
                  <br></br>
                  <img
                    className="logo-deteil"
                    src="../public/images/set group retail.png"
                  ></img>
                  <div>SET GROUP RETAIL CO.,LTD.</div>
                  <br></br>
                  <img
                    className="logo-deteil1"
                    src="../public/images/Logo Sam 1.png"
                  ></img>
                  <div>SAM TECHNOLOGY SUPPORT CO.,LTD.</div>
                </div>
              </div>
              <div></div>

              <a href="#services" className="page-scroll btn btn-xl">
                Read More
              </a>
            </div>
            {/* <PageBrandSlider /> */}
          </div>
        </div>
      </header>
      <video
        className="bgvideo"
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "130%",
          height: "130%",
          top: "50%",
          left: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
          opacity: "1",
        }}
      >
        <source src="../public/images/bg-video1.mp4" type="video/mp4" />
      </video>
      {/* <div style={{ position: "relative", zIndex: "1", color: "white" }}></div> */}
      {/* Navigation */}

      {/* Header */}

      {/* Services Section */}
      <Services />
      {/* Project Grid Section */}

      <Project />

      {/* About Section */}
      <About />
      {/* Team Section */}
      <Team />

      <PageFooter />
      {/* Contact Section */}

      {/* Portfolio Modals */}
      <ProjectItem />
    </div>
  );
};

export default App;
