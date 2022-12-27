import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from './useFetch';
import ApodLyout from "./layouts/ApodLyout";
import Load from './layouts/Loading';



function ApodDate() { 

  let params = useParams();

  const {data,loading,error} = useFetch(`https://api.nasa.gov/planetary/apod?api_key=${
    import.meta.env.VITE_API_KEY}&date=${params.date}`);

  if(error) console.log(error);
  return (
    <div className='flex flex-col items-center m-6 space-y-4'>

    {loading?<Load/>:<ApodLyout   hdurl={data?.hdurl} title={data?.title} desc={data?.explanation} date={data?.date}/>}
    
    
    </div>
    
  )
}

export default ApodDate;