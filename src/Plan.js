import React from "react";
function Plan(props) {
    return <>
    <li className="shadow p-2 my-2 col-sm-4">{props.value}
    <button className="btn btn-danger my-2 c0l-sm-2 offset-1" onClick={() => {props.sendData(props.id)}}> X </button>

 
    </li>
  
   
  
    </>
}
 

export default Plan;