import React, { useEffect, useState } from "react";
import "./index.scss";
import Country from "../Country";
const URL = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(URL);
    const countries = await response.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="countries">
        {countries.map((country, index) => {
          return (
           <Country country={country} index={index}/>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
