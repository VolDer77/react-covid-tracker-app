import React from "react";
import "./CountryCard.css";

export default function CountryCard(props) {
  const {
    countryName,
    totalCases,
    newCases,
    totalDeaths,
    newDeaths,
    totalRecovered,
    newRecovered,
  } = props;

  return (

    <div className="country__wrapper">
      <h2 className="country__name">{countryName}</h2>
      <div className="country__info">
        <h3>
          Total confirmed <span>{totalCases}</span>
        </h3>
        <h3>
          New confirmed <span>{newCases}</span>
        </h3>
        <h3>
          Total deaths <span>{totalDeaths}</span>
        </h3>
        <h3>
          New deaths <span>{newDeaths}</span>
        </h3>
        <h3>
          Total recovered <span>{totalRecovered}</span>
        </h3>
        <h3>
          New recovered <span>{newRecovered}</span>
        </h3>
      </div>
    </div>
  );
}
