import React  from "react";


function MarsShow(){

    const [imgs, setImgs] = useState([]);
    const [loading, isLoading] = useState(false);
  
    const getMarsData = async () => {
      try {
  
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&page=1&api_key=${import.meta.env.VITE_API_KEY}`);
        // console.log(response);
        const data = await response.json();
        setImgs(data.photos);
        console.log("😎", data.photos);
      } catch (e) {
        console.log("❌❌❌", e);
      } finally {
        isLoading(true);
      }
  
    }
    useEffect(() => {
      getMarsData();
    }, []);
  
  
}

export default MarsShow;