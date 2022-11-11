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
    {/* show card */}
      <ApodLyout hdurl={data?.hdurl} title={data?.title} desc={data?.explanation} date={data?.date}  />

    {/* to get specific date  image*/}
        <div className="flex">
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
