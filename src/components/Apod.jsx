import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


function Apod() {
  const [loading, isLoading] = useState(false);
  const [apod, setApod] = useState([]);
  const [date,setDate] = useState();
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${
          import.meta.env.VITE_API_KEY}`
      );
      const data = await response.json();
      setApod(data);
      console.log("😎 reponse: ", data);
    } catch (e) {
      console.log("❌❌❌", e);
    } finally {
      isLoading(true);
    }
  };
  const  submitHandler = (e)=>{
    e.preventDefault();
    navigate('/searched/'+date);
}
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {/* show card */}
      <div className="flex flex-col container m-6 space-y-5 p-2 bg-gray-200  w-3/4 rounded-md">
        <img src={apod.hdurl} alt="Image not avl" className="w-72 rounded-md" />
        <h3 className="text-3xl">{apod.title}</h3>
        <p>{apod.explanation} </p>
        <p>📅 : {apod.date}</p>
      </div>


    
      <div className="mx-3 space-x-4">
        <form onSubmit={submitHandler}>
          Day : <input  onChange={
              (e)=>{
                setDate(e.target.value);
              }} type="date" name="date" id="date" value={date} />
              {console.log(date)}

              <button className="bg-slate-400 p-2 rounded-md ml-3" type="submit">getDetails</button>
        </form>
      </div>
    </>
  );
}

export default Apod;
