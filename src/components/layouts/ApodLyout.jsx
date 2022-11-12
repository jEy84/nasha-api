import React from "react";

function apdlayouts({ hdurl, title, desc, date }) {

  return (<>
    <p className="text-lg item-center">📅  {date}</p>
    <div className="w-3/4  bg rounded-md overflow-hidden shadow-md shadow-white " >
      <img src={hdurl} alt="Image not avl" className="w-full" />
      <div className="p-2 my-2">
        <h5 className="text-3xl mb-2">{title}</h5>
        <p className="text-center text-slate-100">{desc} </p>
      </div>
    </div>
  </>
  );

}

export default apdlayouts; 