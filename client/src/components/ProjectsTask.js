// import cuberImg from "../assets/images/CUBER.jpg";
import React, { useState,useEffect} from "react";
import jaga from "../assets/images/project-jaga.png"
import cuber from "../assets/images/CUBER.jpg"
import dober from "../assets/images/doberman.jpg"
import enmacipatic from "../assets/images/redEnmacipatic.png"

import loading from "../assets/images/loading-25.gif"

function ProjecstTask() {
    const[taskDates, setTaskDates] = useState("");
    
    useEffect(() => {
        fetch("dates")
        .then((response) => response.json())
        .then((res)=> console.log(setTaskDates(res)))
        
    }, []);
    useEffect(()=>{
        if(taskDates){
          console.log(taskDates)
          console.log(taskDates.img)
        }
    },[taskDates]);

  return (
    <div className="taskCont">
      
      <div className="taskDiv">
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={jaga} />
          
        </div>
        <h1 className="taskTitle">TPV Project-Jaga</h1>
        <div className="taskLine"></div>
        <p className="tasktText">Proyecto enfocado en la toma de pedidos y registro de actividad de empleados.Con uso de HTML, CSS ,JavScript, SesionStorage y LocalStorage</p>
        <button className="btnTask" >Vista en progreso
        <img className="loadImg" src={loading} alt="" />
        </button>

      </div>
      </div>

      <div className="taskDiv">
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={cuber} />
          
        </div>
        <h1 className="taskTitle">CUBER</h1>
        <div className="taskLine"></div>
        <p className="tasktText">web enfocada en pedidos y geolocalización de transportes similares a empresas como UBER Y Bolt, enfocada a full Back-end, con uso de PUG, Express js, MongoDB y Mysql</p>
        <button className="btnTask" >Vista en progreso
        <img className="loadImg" src={loading} alt="" />
        </button>

      </div>
      </div>

      <div className="taskDiv">
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={dober} />
          
        </div>
        <h1 className="taskTitle">DOBERMAN e-commerce</h1>
        <div className="taskLine"></div>
        <p className="tasktText">Pagina web e-commerce enfocada en la compra y venta de prendas de ropa para un comercio real,Realizada con React js, MongoDB, Mysql y CSS.</p>
        <button className="btnTask" >Vista en progreso
        <img className="loadImg" src={loading} alt="" />
        </button>

      </div>
      </div>

      <div className="taskDiv">
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={enmacipatic} />
          
        </div>
        <h1 className="taskTitle">Red Enmacipatic</h1>
        <div className="taskLine"></div>
        <p className="tasktText">App dedicada a el contacto entre personas de la tercera edad, voluntarios y personas del sector, realizada con React js, CSS, y MongoDB</p>
        <button className="btnTask" >Vista en progreso
        <img className="loadImg" src={loading} alt="" />
        </button>

      </div>
      </div>
  
    </div>
  );
}

export default ProjecstTask;
