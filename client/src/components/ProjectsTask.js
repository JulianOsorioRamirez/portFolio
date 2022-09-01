// import cuberImg from "../assets/images/CUBER.jpg";
import React, { useState,useEffect} from "react";

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
        }
    },[taskDates]);

  return (
    <div className="taskDiv">
      {taskDates ? taskDates.map((date,i)=><div className="taskProject">
        <div className="producto_img">
          <img src={date.img} alt="" />
        </div>
        <h1 className="taskTitle">{date.tittle}</h1>
        <div className="taskLine"></div>
        <p className="tasktText">{date.Description}</p>
        <button className="btnTask" >Visitar</button>

      </div>) : ""}
    </div>
  );
}

export default ProjecstTask;
