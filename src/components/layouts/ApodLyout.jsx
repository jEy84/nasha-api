import React from "react";

function apdlayouts({hdurl,title,desc,date}){

    return(

        <div className="w-3/4 rounded-md overflow-hidden shadow-lg shadow-white p-2">
    <img src={hdurl} alt="Image not avl" className=""/>
    <div className="p-2 my-2">
      <h5 className="text-3xl">{title}</h5>
      <p>{desc} </p>
      <p>📅 Date : {date}</p>
    </div>
</div>
        );

}

export default apdlayouts; 