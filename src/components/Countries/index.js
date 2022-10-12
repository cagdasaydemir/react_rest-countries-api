import React, { useEffect, useState } from 'react'

const URL = 'https://restcountries.com/v3.1/all';

const Countries = () => {
const [countries, setCountries] = useState([]);

const fetchCountryData = async() => {
    const response = await fetch(URL);
    const countries = await response.json();
    setCountries(countries);
console.log(countries);
}

useEffect(()=>{
fetchCountryData()
},[])

  return (
    <>
    {countries.map((country,index)=>{

        return <article key={index}> {country.ccn3} <span>{country.name.common}</span></article>
    })}
    </>
  )
}

export default Countries