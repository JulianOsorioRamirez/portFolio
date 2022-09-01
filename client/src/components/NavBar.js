import React, { useState, useEffect } from "react";
import gitHupIcone from "../assets/images/mark-github-24@2x.png";
import linkedinIcone from "../assets/images/Linkedin@2x.png";

function Navbar () {
    return (
        <div>
            <nav className="navbar">
        <div className="navButtons">
          <p className="aboutMe">Sobre mí</p>
          <p className="proyects">Proyectos</p>
          <p className="technologies">Tecnologias</p>
          <img className="gitIconeImg" src={gitHupIcone} alt="" />
          <img className="gitIconeImg" src={linkedinIcone} alt="" />
        </div>
      </nav>
        </div>
    )
}
export default Navbar;