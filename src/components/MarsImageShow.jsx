import useFetch from "./useFetch";


function MarsImageShow({solValue,roverName}){

    
    const { data, loading, error } = useFetch(`http://mars-photos.herokuapp.com/api/v1/rovers/${roverName}/photos?sol=${solValue}`);
  
    if (loading) return <h1>Loading ..........</h1>;
  
    if (error) console.log(error);
    // console.log(data?.photos[0].img_src);

    return(<>
       {data?.photos.map(ith=>{
           return(<>
            <div  className="max-w-sm rounded overflow-hidden shadow-xl my-2">

            {/* {console.log(ith.img_src)} */}
            <h1>Camera Name: {ith.camera.name}</h1>
            <img  src={ith.img_src} style={{width:384,height:250}} alt="..." />
            <div className="px-6 pt-4 pb-2">
              <h1>📅 Created: {ith.earth_date}</h1>

            </div>
            </div>
            </>
            )
      
        })}
       
    </>)
}


export default MarsImageShow;