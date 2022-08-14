import "./home.styles.css";
import "animate.css";
import React, { useState, useEffect, useRef } from "react";
import Results from "../../Results";
import Map from 'react-map-gl'
import Mapbox from "react-map-gl/dist/esm/mapbox/mapbox";
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
    <div>
      <Results />
    </div>
  };



  useEffect(() => {

    fetch("hello.json")
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
    if( hospitals.city.includes(city) && hospitals.state.includes(state)) {
      return hospitals
    }
  })
  console.log(Hospitales);


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
    </div>
  );
};

export default Home
