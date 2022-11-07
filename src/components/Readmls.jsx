import React, { useState } from "react";
import { Link } from "react-router-dom";


const Readmls =({limit,children})=>{
  
    const [isReadMore,setReadMore] =useState(false);

    const toggleBtn = () =>{
        setReadMore( pstate => !pstate)
    }

    return (
        <div className="read-more-less">
            { isReadMore? children:children.substr(0,limit)}
            <button onClick={toggleBtn} className="text-purple-600">{isReadMore ? " Read Less":"...Read More"}</button>
        </div>
    )
}

export default Readmls;