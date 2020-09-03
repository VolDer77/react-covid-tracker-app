import React from "react";
import "./TotalResults.css";
import Button from "@material-ui/core/Button";

export default function TotalResults({
  countries,
  totalConfirmed,
  totalNewCases,
  setCountries,
}) {
  const sortBy = (option) => {
    const countriesCopy = [...countries];
    countriesCopy.sort((a, b) => b[option] - a[option]);
    return setCountries(countriesCopy);
  };

  return (
    <div className="total__wrapper">
      <h1>Global Statistic</h1>
      <h2>
        Total cases: {totalConfirmed}
        <br />
        Total confirmed: {totalNewCases}
      </h2>
      <div className="total__buttons-wrapper">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => sortBy("TotalConfirmed")}
        >
          Sort by total cases
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => sortBy("NewConfirmed")}
        >
          Sort by new cases
        </Button>
      </div>
      <div className="total__countries">
        {countries.map((country, index) => (
          <div key={country.Country} className="total__country-info">
            <h3>
              {index + 1}. {country.Country}
            </h3>
            <h3>Total cases: {country.TotalConfirmed}</h3>
            <h3>New cases: {country.NewConfirmed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
