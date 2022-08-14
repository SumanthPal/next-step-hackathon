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
    setState(inputRef.current.value.toLocaleUpperCase());
    setCity(inputRef2.current.value.toLocaleUpperCase());
   // window.open("/results");
    <div>
      <Results />
    </div>
  };

  

  useEffect(() => {

    fetch("/data").then((response) =>
        response.json().then((data) => {
            setHospitals(data)
        })
      );


  }, [])

  console.log(hospital);
  console.log(city);
  console.log(state);
  
  
  //method for displaying results
  const hospitals = hospital.map((beds) => {
    const {name, location, city, state, inpatient, icu, coordinates} = beds;

    return (
      <div>
        <h1>{name}</h1>
        
      </div>
    )
  })

  return (
    <div className="home">
      <h1>Welcome to MedObserver</h1>
      <div className="input-stuff">
        <input placeholder="enter state..." ref={inputRef} type="text" />
        <input type="text" placeholder="enter city..." ref={inputRef2} />

        <button onClick={handleClick}>Enter</button>
      </div>
      <footer>Created by High School Students</footer>

      {hospitals}
    </div>
  );
};

export default Home