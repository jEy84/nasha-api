import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mars from './Mars';
import Earth from './Earth';
import Home from './Home';

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/mars" element={<Mars/>}/>
        <Route path="/earth" element={<Earth/>}/>
    </Routes>
  )
}

export default Pages