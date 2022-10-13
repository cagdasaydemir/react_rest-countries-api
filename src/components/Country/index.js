import React from 'react'

const Country = ({country,index}) => {
  return (
    <article key={index}>
    <div className="country">
      <div className="img-container">
        <img src={country.flags.svg} alt={country.name.common} />
      </div>
      <div className="details">
        <h3>{country.name.common}</h3>
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
  )
}

export default Country