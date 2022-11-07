import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Mars from './Mars';
import Earth from './Earth';
import Home from './Home';
import  Search from '../components/Search';
import ApodDate from '../components/ApodDate';
import MarsShow from './MarsShow';

function Pages() {
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/mars" element={<Mars/>}/>
        <Route path="/earth" element={<Earth/>}/>
        <Route path="/searched/:query" element={<Search/>}/>
        {/* to search for specific date */}
        <Route path="/s/:date" element={<ApodDate/>}/>

        {/* for mars show */}
        <Route path='/mars/:camname' element={<MarsShow/>}/>
    </Routes>
  )
}

export default Pages