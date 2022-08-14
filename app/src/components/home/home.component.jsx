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
    addHospitals();
   // window.open("/results");
    

  };


  //filters hospital data
  const filteredData = data.filter(hospitales => {
    if ( hospitales.properties.c.includes(city) && hospitales.properties.s.includes(state)) {
      return hospitales;
    }
  })

  console.log(filteredData)

  
 
  

const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [zoom, setZoom] = useState(13);
 
useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
});
});
 console.log(filteredData)
useEffect(() => {
if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});

}) 
 //adds Hospitals to page
 const addHospitals = filteredData.map(hospitales => {
  const handleHospital = () => {
      // setLng(hospitales.geometry.coordinates[0])
      // setLat(hospitales.geometry.coordinates[1])

  console.log(hospitales.geometry.coordinates)
  //   // map.flyTo({
  //   //   center: [lng, lat]
  //   //   });
  //   // map.marker([lng, lat]).addTo(map.current);
  }
  return (
    <div className = "container"  >
      <h3>{hospitales.properties.n}</h3>
          
      <li>Inpatient Beds in Use: {hospitales.properties.bc}</li>
      <li>Hospital Address: {hospitales.properties.a}</li>
      <button onClick={handleHospital()}>map</button>
      </div>
  )
})


  
    

  

  


  
  //output
  return (
    <div className="home">
      <h1>Welcome to MedObserver</h1>
      <div className="input-stuff">
        <input placeholder="enter state..." ref={inputRef} type="text" />
        <input type="text" placeholder="enter city..." ref={inputRef2} />

        <button onClick={handleClick} >Enter</button>
      </div>
      <footer>Created by High School Students</footer>

      <div className = "list">
        {addHospitals}
      </div>
      
      
      <h1>Results</h1>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Home
