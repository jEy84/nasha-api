import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';


function Search() {
  let params = useParams();

  let queryR = params.query;
  const {data,loading,error} = useFetch(`https://images-api.nasa.gov/search?q=${queryR}`);

  if(loading) return <h1>Loading ..........</h1>;

  if(error) console.log(error);
  // 
  return (
    <>
    <h1>there{console.log(data?.collection)}</h1>
    {data?.collection.items.map(ith=>{
        <>
  <h1>{ith.data[0].title}</h1>
  <img src={ith.links[0].href} alt="..."  />
  <p>
    {ith.data[0].description}
  </p>
  <h3>Date Create: {ith.data[0].date_created}</h3>
        </>
    })}
    </>
  )
}

export default Search;