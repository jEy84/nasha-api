import React, { } from 'react'
import './Mars.css';
import { Link } from 'react-router-dom';

function Mars() {

  return (

    // for the warning add <tbody> my be it fix ...

    //some camera full name remain
    <div className='m-5'>

      <table className='text-black table-auto w-full mt-4  bg-gray-200  rounded-2xl'>
        <tr>
          <th>Abbreviation</th>
          <th>Camera</th>
          <th>Curiosity</th>
          <th>Opportunity</th>
          <th>Spirit</th>
        </tr>
        <tr>


          <td
          >FHAZ</td>

          <td >Front Harzard Avoidance Camera</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>

          <td className=''>RHAZ</td>

          <td>Rear Hazard Avoidance Camera</td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>

          <td className=''>MAST</td>

          <td>Mast Camera</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>

          <td className=''>CHEMCAM</td>

          <td>Chemistry and Camera Complex</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>
          <td className=''>MAHALI</td>

          <td>Mars Hand Lens Image</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>
        <tr>

          <td className=''>MARDI</td>

          <td>Mars Descent Imager</td>
          <td>✅</td>
          <td>❌</td>
          <td>❌</td>
        </tr>

        <tr>

          <td className=''>NAVCAM</td>

          <td>Navigation Camera </td>
          <td>✅</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>

          <td className=''>PANCAM</td>

          <td>Panoramic Camera</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
        <tr>

          <td className=''>MANITIES</td>

          <td>Miniature Thermal Emission Spectrometer</td>
          <td>❌</td>
          <td>✅</td>
          <td>✅</td>
        </tr>
      </table>

      <div className='w-32 mt-3 flex flex-col'>
        <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/curiosity">
          Curiosity
        </Link>
        <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/spirit">
          Spirit
        </Link>
        <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/opportunity">
          Opportunity
        </Link>
        <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/perseverance">
          Perseverance
        </Link>
      </div>
    </div>
  )
}
export default Mars;