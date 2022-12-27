import React from "react";

function apdlayouts({ hdurl, title, desc, date }) {

  return (
  <>
   <p className="text-lg  item-center">📅{date}</p>
    <div className="lg:w-4/5   rounded-md overflow-hidden shadow-md shadow-white " >

    {/* <LazyLoadComponent  src={hdurl} alt="image not avl" effect="blur"/> */}
        <img src={hdurl} alt="Image not avl" className="object-fill"/>
      <div className="p-3 lg:p-2 my-2 ">
        <article className="propse-base lg:prose-lg  " > 

        <h5 className="text-3xl mb-2">{title}</h5>
        <p className="ml-2 text-ptext font-medium ">{desc} </p>
        </article>
      </div>
    </div>
  </>
  );

}

export default apdlayouts; 