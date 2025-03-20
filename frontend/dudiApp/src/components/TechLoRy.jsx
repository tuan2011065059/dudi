import React from "react";
import "./TechLoRy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faWordpress, faJava, faPhp, faNodeJs } from "@fortawesome/free-brands-svg-icons";


const TechLoRy = () => {
  return (
    <div className="tech">
      <div className="container">
        <h2 className="text-center">Work with 20+ frameworks.</h2>
        <div className="content">
          <FontAwesomeIcon icon={faReact} size="2x" />
          <FontAwesomeIcon icon={faWordpress} size="2x" />
          <FontAwesomeIcon icon={faJava} size="2x" />
          <FontAwesomeIcon icon={faPhp} size="2x" />
          <FontAwesomeIcon icon={faNodeJs} size="2x" />
          {/* <FontAwesomeIcon icon={faCode} size="2x" />  */}
          <span className="p-2 ">C#</span> {}
        </div>
      </div>
    </div>
  );
};

export default TechLoRy;
