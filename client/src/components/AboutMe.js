import React, { useState, useEffect } from "react";

function Aboutme () {
    return(
        <div>
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
        </div>
    )
}

export default Aboutme;