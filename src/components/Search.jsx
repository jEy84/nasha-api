import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import Readmls from './Readmls';
import load from '../assets/loading.svg' 

function Search() {
  let params = useParams();


  let queryR = params.query;
  const { data, loading, error } = useFetch(`https://images-api.nasa.gov/search?q=${queryR}`);

  if (loading) return <img src={load} className="w-max" alt="...." srcset="" />
  if (error) console.log(error);
  // 

  return (
    <>
     
     <div className='grid gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3 m-4 ml-9'>
      {data?.collection.items.map(ith => {

        console.log(ith);
        return (

            <div  className="bg-blue-900 max-w-sm rounded overflow-hidden shadow-md shadow-white  my-2">
              <img  src={ith.links ? ith.links[0].href : "not avl"} style={{width:384,height:250}} alt="..." />
              
              <div className="px-6 py-4">
                <div className='font-bold text-xl mb-2'>{ith.data[0].title}</div>
                <Readmls limit={184} className='text-gray-700 text-base'>
                  {ith.data[0].description}
                </Readmls>
              </div>
            <div className="px-6 pt-4 pb-2">
              <h1>📅 Created: {ith.data[0].date_created}</h1>

            </div>
            </div>
        )
      })}
      </div>

    </>
  )
}

export default Search;