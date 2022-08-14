import "./home.styles.css";
import "animate.css";
import React, { useState, useEffect, useRef } from "react";

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtYW50aHBhbCIsImEiOiJjbDJycHl0bGwzNzM3M2Nsd3Y1dzZtdHBuIn0.C8bl-xGiXrmz_WBAeYpOsA';

const Home = () => {

  const [data, setData] = useState([])

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
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
    
    
   // window.open("/results");
  
    
  };


  //filters hospital data
  
  const filteredData = data.filter(hospitales => {
    if ( hospitales.properties.c.includes(city) && hospitales.properties.s.includes(state) && state !== '') {
      return hospitales;
    }
    
  } 
  )


  const addHospitals = filteredData.map(hospitales => {
    
    var url = "https://www.google.com/maps/place/" + Number(hospitales.geometry.coordinates[1]) +","+ Number(hospitales.geometry.coordinates[0])
    return (
      <div className = "container"  >
        <h2>{hospitales.properties.n}</h2>
        
        <li>Vacant ICU Beds: <strong>{(Math.round(hospitales.properties.it)-Math.round(hospitales.properties.iu))}/{Math.round(hospitales.properties.it)}</strong></li>
        <li>Vacant In-Patient Beds <strong>{(Math.round(hospitales.properties.bt)-Math.round(hospitales.properties.bu))}/{Math.round(hospitales.properties.bt)}</strong></li>
        <li>Hospital Address: <strong>{hospitales.properties.a}</strong></li>
        <a href={url}> 
          <input type = "button" value="Get Directions!" className="btn-cool" />
         </a>

        </div>
    )
  })
 
  





 //adds Hospitals to page
 


  
    

  

  


  
  //output
  return (
    <div className="home">
      <h1>Welcome to Med Observer</h1>
      <div className="input-stuff">
        <input className='state-btn'placeholder="enter state abbrev..." ref={inputRef} type="text" />
        <input type="text" placeholder="enter city..." ref={inputRef2} className='city-btn' />
        </div>
        <button className='btn' onClick={handleClick} >Enter</button>
      

      <div className="list">
      {addHospitals}


      </div>


      <footer>Created by High School Students:
        Sumanth Pallamreddy, Rahil Pasha, Pradyum Chitlu, and Akhilesh Basetty
      </footer>

    </div>
  );
}
;

export default Home
