// import React from "react";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./TechLoRy.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faWordpress, faJava, faPhp, faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

gsap.registerPlugin(ScrollTrigger);
const TechLoRy = () => {

  useEffect(() => {
    gsap.from('.icon', { 
        opacity: 0, 
        y: 100, 
        duration: 2, 
        scrollTrigger: {
            trigger: '.icon', 
            start: 'top 80%', 
            toggleActions: 'play none none none' 
        }
    });
}, []);


  
  return (
    <div className="tech">
      <div className="container">
        <h2 className="text-center">Work with 20+ frameworks.</h2>
        <div className="content">
          <div className="icon">
          <FontAwesomeIcon icon={faReact} size="2x" />
          </div>
          <div id='case' className="icon">
          <FontAwesomeIcon icon={faWordpress} size="2x" />
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faJava} size="2x" />
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faPhp} size="2x" />
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faNodeJs} size="2x" />
          </div>
          {/* <FontAwesomeIcon icon={faCode} size="2x" />  */}
          <div className="icon">
          {/* <span className="d-block">C#</span> {} */}
          <FontAwesomeIcon icon={faPython} size="2x" />
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default TechLoRy;
