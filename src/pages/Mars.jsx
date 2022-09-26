import React, { useEffect, useState } from 'react'
 import './Mars.css';


function Mars() {


  return (
    <div>

      <table className='table-auto mx-5 my-3 w-full border-solid border-2 border-sky-500'>
        <tr>
          <th >Abbreviation</th>
          <th >Camera</th>
          <th>Curiosity</th>
          <th>Opportunity</th>
          <th>Spirit</th>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md' >FHAZ</td>
          <td >Front Harzard Avoidance Camera</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md'>RHAZ</td>
          <td>Rear Hazard Avoidance Camera</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md' >MAST</td>
          <td>Mast Camera</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md'>CHEMCAM</td>
          <td>Chemistry and Camera Complex</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md' >MAHALI</td>
          <td>Mars Hand Lens Image</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md' >MARDI</td>
          <td>Mars Descent Imager</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md'>NAVCAM</td>
          <td>Navigation Camera </td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md'>PANCAM</td>
          <td>Panoramic Camera</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <td className='cursor-pointer hover:bg-slate-400 rounded-md'>MINITES</td>
          <td>Miniature Thermal Emission Spectrometer</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
      </table>
    </div>
  )
}
export default Mars;