import "./home.styles.css";
import "animate.css";
import React, { useState, useEffect, useRef } from "react";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtYW50aHBhbCIsImEiOiJjbDJycHl0bGwzNzM3M2Nsd3Y1dzZtdHBuIn0.C8bl-xGiXrmz_WBAeYpOsA';

const Home = () => {

  const [data, setData] = useState([])

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [fdata, setfdata] = useState([])
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(()=> {
    fetch("bed_data.json").then((response) =>
        response.json().then((data) => {
            setData(data.features)
        })
      );
  })
  const handleClick = () => {
    setState(inputRef.current.value.toLocaleUpperCase());
    setCity(inputRef2.current.value.toLocaleUpperCase());
    
    const filteredData = data.filter(hospitales => {
      if ( hospitales.properties.c.includes(city) && hospitales.properties.s.includes(state)) {
        return hospitales;
      }
    } 
    )
    setfdata(filteredData);
   // window.open("/results");
  
    
  };


  //filters hospital data
 


  const addHospitals = fdata.map(hospitales => {
    const handleHospital = () => {
        //setLng(5)
       // setLat(-5)
  
     
    }
    var url = "https://www.google.com/maps/place/" + Number(hospitales.geometry.coordinates[1]) +","+ Number(hospitales.geometry.coordinates[0])
    return (
      <div className = "container"  >
        <h3>{hospitales.properties.n}</h3>
            
        <li>Inpatient Beds in Use: {hospitales.properties.bc}</li>
        <li>Hospital Address: {hospitales.properties.a}</li>
        <a href={url}> 
          <input type = "button" value="Get Directions!" />
         </a>

        </div>
    )
  })
 
  





 //adds Hospitals to page
 


  
    

  

  


  
  //output
  return (
    <div className="home">
      <h1>Welcome to MedObserver</h1>
      <div className="input-stuff">
        <input placeholder="enter state abbrev..." ref={inputRef} type="text" />
        <input type="text" placeholder="enter city..." ref={inputRef2} />

        <button onClick={handleClick} >Enter</button>
      </div>

      <div className="list">
      {addHospitals}


      </div>


      <h1>Results</h1>
      <footer>Created by High School Students</footer>

    </div>
  );
}
;

export default Home
