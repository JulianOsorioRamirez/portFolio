import React, { useState, useEffect } from "react";
import {Link} from "react-scroll"

import Icons from "./Icons"


function Aboutme () {
    return(
        <div>
            <div className="aboutMeDiv">
              {/* <p></p> */}
        <div className="presentationTittle">
          <h1 className="tittleMe">Julián Osorio Ramírez</h1>
          <Icons/>
          <p className="textAboutMe">
            Desarrollador Web Full Stack Junior. inmerso en proyectos tanto en
            grupo como individuales, enfocados a un ámbito real y profesional,
            con el fin de obtener las habilidades y conocimientos en las últimas
            tecnologías tanto para el front-end como el Back-end y la experiencia
            de trabajo con diferentes verticales del sector.
          </p>
          
        </div>
      {/* <button className="contactButton" onClick={go} >Contactame</button> */}
      
      
      {/* <button className="btnTask2" >Contactame</button> */}
      
      

      
      
      
      


      </div>
        </div>
    )
}

export default Aboutme;