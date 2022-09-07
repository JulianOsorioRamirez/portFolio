// import cuberImg from "../assets/images/CUBER.jpg";
import React, { useState,useEffect} from "react";
import cuber from "../assets/images/CUBER.jpg"

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
      {taskDates ? taskDates.map((date,i)=>
      <div className="taskDiv">
         <div className="taskProject">
        
        <div className="producto_img">
        <img className="imgCards" src={require(`../assets/images/` + date.img)} />
          
        </div>
        <h1 className="taskTitle">{date.tittle}</h1>
        <div className="taskLine"></div>
        <p className="tasktText">{date.Description}</p>
        <button className="btnTask" >Visitar</button>

      </div>
      </div>
      ) : ""}
    </div>
  );
}

export default ProjecstTask;
