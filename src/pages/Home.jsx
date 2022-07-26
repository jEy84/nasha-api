import React from 'react'
import Navbar from '../components/Navbar'
import Apod from '../components/Apod';

function Home() {
  return (
    <div className=''>
        <h3>Daily astronent image</h3>
        <Apod className='bg-black '/>
    </div>
  )
}

export default Home