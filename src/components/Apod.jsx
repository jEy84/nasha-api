import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import useFetch from "./useFetch";
import load from '../assets/loading.svg'
import ApodLyout from "./layouts/ApodLyout";

function Apod() {
  const navigate = useNavigate();

  const [date,setDate] = useState();  

  const  submitHandler = (e)=>{
    e.preventDefault();
    navigate('/s/'+date);
}

  const {data,loading,error} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY}`);

  if(loading) return <img src={load} alt="...Loading" />;

  if(error) console.log(error);
  return (
    <>
     <div className='flex flex-col items-center p-1 my-1'>

    {/* show card */}
      <ApodLyout hdurl={data?.hdurl} title={data?.title} desc={data?.explanation} date={data?.date}  />
    </div>
    
    {/* to get specific date  image*/}
        <div className="flex flex-col ml-6 mt-8 items-center mb-8">
          <p className="text-xl mb-2">To Get the specific picture of the Day select the Date here ...👇 </p>
          <form onSubmit={submitHandler} className="space-x-5 bg-heliotrope rounded-md p-2">
            Day : <input  onChange={
              (e)=>{
                setDate(e.target.value);
              }} className="rounded-md p-1" type="date" name="date" id="date" value={date} />
                <button  className="ml-3 p-2 rounded-md bg-persianindigo hover:text-russianviolet" type="submit">GetDetails</button>
          </form>
        </div>
    </>
  );
}

export default Apod;
