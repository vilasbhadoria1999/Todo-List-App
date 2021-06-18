import React from "react";

const ToDolists=(props)=>{
    
    return(
        <>
    <div className="list">
    
     <button className="cross" onClick={()=>{props.onSelect(props.id)}}>x</button>
     <li>{props.text}</li>
     </div>

     </>
    )
};

export default ToDolists;