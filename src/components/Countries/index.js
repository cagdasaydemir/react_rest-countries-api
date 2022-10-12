import React, { useEffect, useState } from "react";
import "./index.scss";
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
      <section className="grid">
        {countries.map((country, index) => {
          return (
            <article key={index}>
              <div className="country">
                <div className="img-container">
                  <img src={country.flags.svg} alt={country.name.common} />
                </div>
                <div className="details">
                  <h2>{country.name.common}</h2>
                  <h4>
                    Capital: <span>{country.capital}</span>
                  </h4>
                  <h4>
                    Population: <span>{country.population}</span>
                  </h4>
                  <h4>
                    Region: <span>{country.region}</span>
                  </h4>
                  <h4>
                    Subregion: <span>{country.subregion}</span>
                  </h4>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
