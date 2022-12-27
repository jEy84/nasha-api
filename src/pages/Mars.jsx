import React, { } from 'react'
import './Mars.css';
import { Link } from 'react-router-dom';

import curo from '../assets/curo.jpg';
import oppor from '../assets/oppo.jpg';
import perv from '../assets/perv.jpg';
import spir from '../assets/spirit.jpg';



function Mars() {

  return (<div>
    {/* 
    // for the warning add  my be it fix ...
    
  //some camera full name remain */}
    <div className='mx-7 lg:ml-7 my-3'>


      {/* code repeat make loop store in spepreate  */}
      <div className='mt-3 flex flex-col lg:flex-row '>

        <Link className='p-1 figure' to="/mars/curiosity">
          <img src={curo} alt="...." className='rounded-lg object-cover w-4/5 h-4/5 hover:shadow-lg shadow-white' />
          <p className='mt-2'> Curiosity </p>
        </Link>
        <Link className=' p-1 figure' to="/mars/spirit">
          <img src={spir} className='rounded-lg object-cover w-4/5  h-4/5  ' />
          <p className='mt-2'>Spirit</p>
        </Link>
        <Link className=' p-1  figure' to="/mars/opportunity">
          <img src={oppor} className='rounded-lg object-cover w-4/5 h-4/5' />
          <p className='mt-2'> Opportunity </p>

        </Link>
        <Link className=' p-1  figure' to="/mars/perseverance">
          <img src={perv} className="rounded-lg object-cover w-4/5 h-4/5" />
          <p className='mt-2'>Perseverance </p>
        </Link>
      </div>



      <div className='w-11/15 lg:w-1/2  bg-russianviolet-2 p-2 rounded-md shadow-md shadow-white '>

        <div className='text-palepurple prose lg:prose-h4 p-2'>
          <p>
          ➡️Give Information about the NASA's Curiosity,Opportunity, and Spirit ,perseverance rovers on mars .
          </p>
          <p>
          ➡️Each rovers has its own set of photos stored which you can see it.
            </p> 
          <p>

          ➡️You need to enter the sol value ,Each Photos are organized by the sol (Martian rotation or day) on which they were taken, counting up from the rover's landing date.
          </p>
          <p>

          ➡️A photo taken on Curiosity's 1000th Martian sol exploring Mars, for example, will have a sol attribute of 1000.
          what is sol ? Sol is a solar day on Mars; that is, a Mars-day.
          </p>
          </div>
      </div>



    </div>
  </div>
  )
}
export default Mars;