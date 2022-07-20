import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mars from './Mars';
import Earth from './Earth';
import Home from './Home';

import ApodDate from '../components/ApodDate';

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/mars" element={<Mars/>}/>
        <Route path="/earth" element={<Earth/>}/>
        <Route path="/searched/:date" element={<ApodDate/>}/>
    </Routes>
  )
}

export default Pages