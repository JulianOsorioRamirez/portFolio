import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Aboutme from "./AboutMe";
import Photo from "./Photo";
import Line from "./Line";
import Projects from "./Projects";
import Technologies from "./Technologies";
import Aditional from "./AditionalSkills";
import Formation from "./Formation";


function Portfolio() {
  
  return (
    <div className="page">
      <Navbar/>
      <Aboutme/>
      <Photo/>
      <Formation/>
      <Line/>
      <Projects/>
      <Technologies/>
      <Aditional/>
      </div>
  );
}

export default Portfolio;
