import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Pages from './pages/Pages'
import Navbar from './components/Navbar'
function App() {
  return (
   
   <div>
     <Navbar/>
      <Pages/>
   </div>
   
  )
}

export default App