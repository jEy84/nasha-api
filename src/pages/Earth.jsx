import React from 'react'
import useFetch from '../components/useFetch' //custom function to fetch data
import loading from '../assets/loading.svg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import '../components/layouts/imageslider';
import Load from '../components/layouts/Loading';



function Earth() {
  const { data, loading, error } = useFetch(` https://api.nasa.gov/EPIC/api/natural?api_key=${import.meta.env.VITE_API_KEY}`);

 

  if (error) console.log(error);

  let date = data ? data[0].date.substr(0, 10) : null;

  return (
    <div className='flex flex-col items-center mx-2'>
      <p className='text-xl text-center font-medium tracking-wide'>This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</p>

      <p>📅 {date} </p>
     {loading ?<Load/> : <Swiper
        spaceBetween={10}
        centeredSlides={true}

        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper w-full my-4 lg:w-1/2 "
      >

        {/* for making img url */}
        { data?.map(ith => {

          var imgeName = ith.image + ".png";
          var archive = `https://epic.gsfc.nasa.gov/archive/natural/${ith.date.slice(0, 4)}/${ith.date.slice(5, 7)}/${ith.date.slice(8, 10)}/png/`;

          var image = archive + imgeName;

          return (
            <SwiperSlide >

              <img key={ith.identifier} src={image} alt="not alv" className='rounded-lg' />
            </SwiperSlide>


          )
        })
        }


      </Swiper>}

      <div className='w-10/11 lg:w-7/12 rounded-md p-4 my-4 mx-3 bg-russianviolet-2 shadow-md shadow-white'>
        <h1 className='text-bold tracking-wider underline decoration-2 mb-2'>About Image :-</h1>
        <article className='prose lg:prose-xl text-palepurple'>
          <p>➡️The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument.</p> 
          <p> ➡️Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.</p>
        </article>
      </div>
    </div>
  )
}

export default Earth
