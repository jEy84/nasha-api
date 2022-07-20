import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function ApodDate() {
    const [loading,isLoading] = useState(false);
    const [apod,setApod] = useState([]);
    let params = useParams();

    const getData = async (date) => {
        try {
          const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${
              import.meta.env.VITE_API_KEY}&date=${date}`
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
      useEffect(()=>{
        getData(params.date);
      },[params.date])
  return (
    <div>ApodDate
        <img src={apod.hdurl} alt="..." />
    </div>
  )
}

export default ApodDate