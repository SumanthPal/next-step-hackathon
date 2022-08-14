import "./home.styles.css";
import "animate.css";
import React, { useState, useEffect, useRef } from "react";
import Results from "../../Results";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtYW50aHBhbCIsImEiOiJjbDJycHl0bGwzNzM3M2Nsd3Y1dzZtdHBuIn0.C8bl-xGiXrmz_WBAeYpOsA';

const Home = () => {

  const [data, setData] = useState([])

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospitals] = useState([]);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const handleClick = () => {
    setState(inputRef.current.value.toLocaleUpperCase());
    setCity(inputRef2.current.value);
   // window.open("/results");
  };



  useEffect(() => {

    fetch("bed_data.json")
    .then((response) => response.json()
    .then((users) => {
        setHospitals(users)
        })
      );


  }, [])

  console.log(hospital);
  console.log(city);
  console.log(state);

  var Hospitales = []

  var Hospitales = hospital.filter(hospitals => {
    if( hospitals.properties.c.includes(city) && hospitals.properties.s.includes(city)) {
      return hospitals
    }
  })
  console.log(Hospitales);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });


  //method for displaying results



  return (
    <div className="home">
      <h1>Welcome to MedObserver</h1>
      <div className="input-stuff">
        <input placeholder="enter state..." ref={inputRef} type="text" />
        <input type="text" placeholder="enter city..." ref={inputRef2} />

        <button onClick={handleClick}>Enter</button>
      </div>
      <footer>Created by High School Students</footer>
      <h1>Results</h1>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Home
