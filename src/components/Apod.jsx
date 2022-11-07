import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import useFetch from "./useFetch";

function Apod() {

const navigate = useNavigate();

  const [date,setDate] = useState();
  const  submitHandler = (e)=>{
    e.preventDefault();
    navigate('/s/'+date);
}

  const {data,loading,error} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY}`);

  if(loading) return <h1>Loading ..........</h1>;

  if(error) console.log(error);
  return (
    <>
    {/* show card */}
      <div className="flex flex-col container m-6 space-y-5 p-2 bg-gray-200  w-3/4 rounded-md">
        <img src={data?.hdurl} alt="Image not avl" className="w-72 rounded-md" />
        <h3 className="text-3xl">{data?.title}</h3>
        <p>{data?.explanation} </p>
        <p>📅 : {data?.date}</p>
      </div>

    
      <div className="mx-3 space-x-4">
        <form onSubmit={submitHandler}>
          Day : <input  onChange={
              (e)=>{
                setDate(e.target.value);
              }} type="date" name="date" id="date" value={date} />
              <button className="bg-slate-400 p-2 rounded-md ml-3" type="submit">getDetails</button>
        </form>
      </div>
    </>
  );
}

export default Apod;
