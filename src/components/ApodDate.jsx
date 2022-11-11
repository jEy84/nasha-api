import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import ApodLyout from "./layouts/ApodLyout";

function ApodDate() { 

  let params = useParams();

  const {data,loading,error} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY}&date=${params.date}`);

  if(loading) return <h1>Loading ..........</h1>;

  if(error) console.log(error);
  return (
    <div className='flex flex-col items-center m-6 space-y-4'>

    <ApodLyout   hdurl={data?.hdurl} title={data?.title} desc={data?.explanation} date={data?.date}/>
    
    </div>
    
  )
}

export default ApodDate;