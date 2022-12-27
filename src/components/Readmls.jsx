import React, { useState } from "react";
import { Link } from "react-router-dom";


const Readmls =({limit,children})=>{
  
    const [isReadMore,setReadMore] =useState(false);

    const toggleBtn = () =>{
        setReadMore( pstate => !pstate)
    }

    return (
        <div className="read-more-less">
            { isReadMore? children:children.substr(0,limit)
                }    
                {/* add custom color red just temp */}
            {children.length >limit ?  <button onClick={toggleBtn} className="" style={{color:"red"}}>

            {isReadMore ? " Read Less":"...Read More"}
            </button>:null}
          </div> 
    )
}

export default Readmls;