import React, { useState, useEffect } from "react";
import {Link} from "react-scroll"
import gitHupIcone from "../assets/images/mark-github-24@2x.png";
import linkedinIcone from "../assets/images/Linkedin@2x.png";

function Navbar () {
  function github () {
    window.location.replace('https://github.com/JulianOsorioRamirez?tab=repositories');
  }
  function linkedin () {
    window.location.replace('https://www.linkedin.com/in/julian-osorio-ramirez-69559a165/');
  }
    return (
        <div>
          <nav className="navbar">
        <div className="navButtons">
          <Link to="aboutMeDiv" spy={true} smooth={true} offset={-160} duration={500} className="navBtn">Sobre mí</Link>
          <Link to="formationContainer" spy={true} smooth={true} offset={5} duration={500} className="navBtn">Formación</Link>
          <Link to="projects" spy={true} smooth={true} offset={10} duration={500} className="navBtn">Proyectos</Link>
          <Link to="techDiv" spy={true} smooth={true} offset={35} duration={500} className="navBtn">Tecnologias</Link>
          <Link to="footer" spy={true} smooth={true} offset={50} duration={500} className="navBtn">Contactame</Link>

          
          <img className="gitIconeImg" onClick={github} src={gitHupIcone} alt="" />
          <img className="gitIconeImg" onClick={linkedin} src={linkedinIcone} alt="" />
        </div>
      </nav>
        </div>
    )
}
export default Navbar;