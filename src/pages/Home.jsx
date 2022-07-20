import React from 'react'
import Navbar from '../components/Navbar'
import Apod from '../components/Apod';

function Home() {
  return (
    <div>
        <h3>Daily astronent image</h3>
        <Apod/>
    </div>
  )
}

export default Home