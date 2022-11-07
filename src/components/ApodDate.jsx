import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';


function ApodDate() { 

  let params = useParams();

  const {data,loading,error} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY}&date=${params.date}`);

  if(loading) return <h1>Loading ..........</h1>;

  if(error) console.log(error);

  
  return (
    <div>ApodDate
        <img src={data?.hdurl} alt="..." />
        <h3 className="text-3xl">{data?.title}</h3>
        <p>{data?.explanation} </p>
        <p>📅 : {data?.date}</p>
    </div>
  )
}

export default ApodDate;