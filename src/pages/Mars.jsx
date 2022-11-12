import React, { } from 'react'
import './Mars.css';
import { Link } from 'react-router-dom';

import imge from '../assets/tablemars.png';
import curo from '../assets/curo.jpg';
import oppor from '../assets/oppo.jpg';
import perv from '../assets/perv.jpg';
import spir from '../assets/spirit.jpg';






function Mars() {

  return (<div>
    {/* 
    // for the warning add  my be it fix ...

    //some camera full name remain */}
    <div className='flex flex-col items-center m-4'>


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
          <div className='w-8/12  bg-bluetype p-2 rounded-md'>

            <p className='text-lg text-palepurple'>Give Information about the NASA's Curiosity, Opportunity, and Spirit ,perseverance rovers on mars .
              <br />
              Each rovers has its own set of photos stored which you can see it.
              <br />
              You need to enter the sol value ,Each Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date. <br /> A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000.
              what is sol ? Sol is a solar day on Mars; that is, a Mars-day.</p>
          </div>
        </div>


      </div>

    </div>

    {/* code repeat make loop store in spepreate  */}
    <div className=' mt-3 flex flex-row items-center'>

      <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/curiosity">
        <img className='w-10/12' src={curo} alt="...." srcset="" />
        <p className='text-center'> Curiosity </p>
      </Link>
      <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/spirit">
        <img className='w-10/12' src={spir} alt="...." />
        <p className='text-center'>Spirit</p>
      </Link>
      <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/opportunity">
        <img className='w-10/12' src={oppor} alt="...." srcset="" />
        <p className='text-center'> Opportunity </p>

      </Link>
      <Link className='rounded-lg p-1 hover:bg-slate-500' to="/mars/perseverance">
        <img className='w-10/12' src={perv} alt="...." srcset="" />
        <p className='text-center'> Perseverance </p>
      </Link>
    </div>
  </div>
  )
}
export default Mars;