import React, { useState, useEffect } from "react";
import gitHupIcone from "../assets/images/mark-github-24@2x.png";
import linkedinIcone from "../assets/images/Linkedin@2x.png";
import personalPhoto from "../assets/images/personalPhoto.png";

function Portfolio() {
  function go () {

  }
  return (
    <div className="page">
      <nav className="navbar">
        <div className="navButtons">
          <p className="aboutMe">Sobre mí</p>
          <p className="proyects">Proyectos</p>
          <p className="technologies">Tecnologias</p>
          <img className="gitIconeImg" src={gitHupIcone} alt="" />
          <img className="gitIconeImg" src={linkedinIcone} alt="" />
        </div>
      </nav>

      <div className="aboutMeDiv">
        <div className="presentationTittle">
          <h1 className="tittleMe">Julián Osorio Ramírez</h1>
          <p className="textAboutMe">
            Desarrollador Web Full Stack Junior. inmerso en proyectos tanto en
            grupo como individuales, enfocados a un ámbito real y profesional,
            con el fin de obtener las habilidades y conocimientos en las últimas
            tecnologías tanto para el front-end como el Back-end y la experiencia
            de trabajo con diferentes verticales del sector.
          </p>
        </div>
      {/* <button className="contactButton" onClick={go} >Contactame</button> */}
      <button className="botonCarShop" >Contactame</button>


      </div>
      <div className="photo">
        <img className="personalPhoto" src={personalPhoto} alt="" />
      </div>
      <div class="Line-1"></div> 

      <div className="projects">
        <h1 className="projectsTitle">Projects</h1>
        
      </div>
      
    </div>
  );
}

export default Portfolio;
