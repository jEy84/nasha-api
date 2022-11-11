import React from 'react'
import Apod from '../components/Apod';

function Home() {
  return (<>
     
    <p className='m-2 text-2xl '>One of the most popular websites at NASA is the Astronomy Picture of the Day.</p>
          
    <div className='flex flex-col items-center m-6 space-y-4'>
        <Apod/>
    </div>
  </>
  )
}

export default Home