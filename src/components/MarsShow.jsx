import React, {useState } from "react";
import { useParams } from "react-router-dom";
import MarsImageShow from "./MarsImageShow";

//modificaion needed
function MarsShow(){
    let params = useParams();

    const [sol,setSol] = useState(null);
    const  submitHandler = (e)=>{
      e.preventDefault();
  }

  return<>
  <h1> All Photos taken by the {params.rovername}</h1>
  <p>Give the informatin about the sol and Input
  </p>
 <div>
  <form onSubmit={submitHandler}>

  Enter the Sol Day: <input  onChange={
    (e)=>{
      setSol(e.target.value);

    }
  } type="text" className="rounded border-2 border-blue-600 bg-slate-100" value={sol} />
  <button  type="submit" className="bg-slate-400 p-1  ml-3 rounded-md">Show Image</button>
  </form>
 </div>

<div className="grid grid-cols-1 md:gap-2 md:grid-cols-2 lg:gap-4 lg:grid-cols-3 m-4 ml-9">
 { (sol &&params.rovername)?<MarsImageShow  solValue={sol} roverName={params.rovername} />:<h2>Enter Sol value to see image</h2>}
</div>
  </>
}

export default MarsShow;