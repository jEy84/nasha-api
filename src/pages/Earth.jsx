import React, { useEffect, useState } from 'react'

function Earth() {
  const [earthImage,setEarthImage] = useState([]);


  const getData = async()=>{
    try{

      const response = await  fetch(`
      https://api.nasa.gov/EPIC/api/natural?api_key=${import.meta.env.VITE_API_KEY}
      `)
      
      const data =await response.json();
      setEarthImage(data);
      console.log("😎 response",data);
    }catch(err){
      console.log("❌❌❌",err);
    }
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
<div className='container'>
  {earthImage.map((ith)=>{
    console.log(ith.date.slice(8,10))  //0,4   5,7  8,10
  })}

<div className="grid grid-rows-4 grid-flow-col gap-3">

{/* for making img url */}
 { earthImage.map(ith => {
    // console.log(element.date.split(" ")[0])
    var  imgeName =ith.image + ".png";
    var archive = `https://epic.gsfc.nasa.gov/archive/natural/${ith.date.slice(0,4)}/${ith.date.slice(5,7)}/${ith.date.slice(8,10)}/png/`;

    var image = archive +imgeName;
    // console.log(image)
    return(
        <div className=''>
          <img key={ith.identifier} src={image} alt="not alv" className='w-34 rounded-sm' />
        </div>      
      )
    })
}
</div>
    {/* {console.log(earthImage[0].date )} */}
</div>
  )
}

export default Earth