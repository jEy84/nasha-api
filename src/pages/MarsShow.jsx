import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

function MarsShow(){
    const [imgs, setImgs] = useState([]);
    const [loading, isLoading] = useState(false);
    let params = useParams();

    //make one custom function to get all data 
    //argument pass only URL 
    const getMarsData = async (camname) => {
      try {
  
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camname}&page=1&api_key=${import.meta.env.VITE_API_KEY}`);
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
      getMarsData(params.camname);
    }, [params.camname]);
  
  return<>
  <h1></h1>
  </>
}

export default MarsShow;