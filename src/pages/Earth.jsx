import React, { useEffect, useState } from 'react'

import useFetch from '../components/useFetch' //custom function to fetch data

function Earth() {
  const { data, loading, error } = useFetch(` https://api.nasa.gov/EPIC/api/natural?api_key=${import.meta.env.VITE_API_KEY}`);

  if (loading) return null;

  if (error) console.log(error);
  return (
    <div className='container '>


      <div className="grid grid-rows-4 grid-flow-col gap-3 ">

        {/* for making img url */}
        {data?.map(ith => {
          // console.log(element.date.split(" ")[0])
          console.log(ith);
          var imgeName = ith.image + ".png";
          var archive = `https://epic.gsfc.nasa.gov/archive/natural/${ith.date.slice(0, 4)}/${ith.date.slice(5, 7)}/${ith.date.slice(8, 10)}/png/`;

          var image = archive + imgeName;
          // console.log(image)
          return (
            <div className='flex flex-row'>

              <img key={ith.identifier} src={image} alt="not alv" className='rounded-lg' />
            </div>
          )
        })
        }
      </div>
      {/* {console.log(earthImage[0].date )} */}
    </div>
  )
}

export default Earth