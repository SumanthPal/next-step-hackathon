import "./home.styles.css";
import "animate.css";
import React, { useState, useEffect, useRef } from "react";
import Results from "../../Results";

const Home = () => {

  const [data, setData] = useState([])

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospitals] = useState([]);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const handleClick = () => {
    setState(inputRef.current.value);
    setCity(inputRef2.current.value);
    addHospitals();
   // window.open("/results");
    
  };

  

  const filteredData = data.filter(hospitales => {
    if ( hospitales.properties.c.includes(city) && hospitales.properties.s.includes(state)) {
      return hospitales;
    }
  })

  console.log(filteredData)

  const addHospitals = filteredData.map(hospitales => {
    return (
      <div className = "container">
        <h3>{hospitales.properties.n}</h3>
        <li>Inpatient Beds in Use: {hospitales.properties.bc}</li>
        <li>Hospital Address: {hospitales.properties.a}</li>
        <li>Percentage of ICU Beds in Use: {hospitales.properties.ic}</li>
      </div>
    )
  })
  

  

  useEffect(()=> {
    fetch("bed_data.json").then((response) =>
        response.json().then((data) => {
            setData(data.features)
        })
      );
  })


  

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
      
      </div>
  );
};

export default Home