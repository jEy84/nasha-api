import React, {  useState } from 'react'
 import './Mars.css';
import {Link, useNavigate} from 'react-router-dom';

function Mars() {
const navigate = useNavigate();
const [cname,setCname] = useState([]);
 


  return (

    // for the warning add <tbody> my be it fix ...
    <div>

      <table className='table-auto w-full mt-4  bg-gray-200 opacity-75 rounded-2xl'>
        <tr>
          <th>Abbreviation</th>
          <th>Camera</th>
          <th>Curiosity</th>
          <th>Opportunity</th>
          <th>Spirit</th>
        </tr>
        <tr>
      
        <Link className='cursor-pointer w-full hover:bg-slate-400 rounded-md'  to='/mars/FHAZ'>
          <td  
   >FHAZ</td>
  </Link> 
          <td >Front Harzard Avoidance Camera</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
          <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/RHAZ" > 
          <td className=''>RHAZ</td>
           </Link>
          <td>Rear Hazard Avoidance Camera</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/MAST" > 
          <td className=''>MAST</td>
           </Link>
          <td>Mast Camera</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/CHEMCAM" > 
          <td className=''>CHEMCAM</td>
           </Link>
          <td>Chemistry and Camera Complex</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/MAHALI" > 
          <td className=''>MAHALI</td>
           </Link>
          <td>Mars Hand Lens Image</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/MARDI" > 
          <td className=''>MARDI</td>
           </Link>
          <td>Mars Descent Imager</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/NAVCAM" > 
          <td className=''>NAVCAM</td>
           </Link>
          <td>Navigation Camera </td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/PANCAM" > 
          <td className=''>PANCAM</td>
           </Link>
          <td>Panoramic Camera</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>
        <Link className='cursor-pointer hover:bg-slate-400 rounded-md' to="/mars/MANITIES" > 
          <td className=''>MANITIES</td>
           </Link>
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