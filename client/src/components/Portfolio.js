import React, { useState, useEffect } from "react";
import Navbar from "./NavBar";
import Aboutme from "./AboutMe";
import Photo from "./Photo";
import Line from "./Line";
import Projects from "./Projects";

function Portfolio() {
  
  return (
    <div className="page">
      <Navbar/>
      <Aboutme/>
      <Photo/>
      <Line/>
      <Projects/>
      </div>
  );
}

export default Portfolio;
