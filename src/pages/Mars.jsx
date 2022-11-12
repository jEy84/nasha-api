import React, { } from 'react'
import './Mars.css';
import { Link } from 'react-router-dom';
import imge from '../assets/tablemars.png';

function Mars() {

  return (

    // for the warning add <tbody> my be it fix ...

    //some camera full name remain
    <div className='flex flex-col items-center m-4'>
      <div className='w-8/12  bg-bluetype p-2 rounded-md'> 

      <p className='text-left text-palepurple'>Give Information about the NASA's Curiosity, Opportunity, and Spirit ,perseverance rovers on mars .

        Each rovers has its own set of photos stored which you can see it.
        You need to enter the sol value ,Each Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000.
        what is sol ? Sol is a solar day on Mars; that is, a Mars-day.</p>
      </div>

      <div>

      <div className='lg:hidden md:hidden'>
        <img src={imge} className="w-full" alt="" />
      </div>
      <div>
        <div className='hidden md:block lg:block'>

          <table className='table-auto'>
            <thead>
              <tr>
                <th>Abbreviation</th>
                <th>Camera</th>
                <th>Curiosity</th>
                <th>Opportunity</th>
                <th>Spirit</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>FHAZ</td>
                <td >Front Harzard Avoidance Camera</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>RHAZ</td>
                <td>Rear Hazard Avoidance Camera</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td >MAST</td>
                <td>Mast Camera</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td >CHEMCAM</td>
                <td>Chemistry and Camera Complex</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td >MAHALI</td>
                <td>Mars Hand Lens Image</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td >MARDI</td>
                <td>Mars Descent Imager</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td >NAVCAM</td>
                <td>Navigation Camera </td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td >PANCAM</td>
                <td>Panoramic Camera</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
              <tr>
                <td >MANITIES</td>
                <td>Miniature Thermal Emission Spectrometer</td>
                <td>❌</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
    </div>
  )
}
export default Mars;