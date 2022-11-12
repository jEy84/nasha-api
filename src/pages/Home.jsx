import React from 'react'
import Apod from '../components/Apod';

function Home() {
  return (<>
    <div className='flex flex-col items-center py-2'>
      <h2 className='text-4xl font-extrabold my-1 text-center'>Astronomy Picture of the Day </h2>
      <p className='lg:w-1/2 text-center'>
        Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
      </p>

    </div>

    <Apod  />

  </>
  )
}

export default Home