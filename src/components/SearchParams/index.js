import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard";
import "./SearchParams.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function SearchParams() {
  const [countries, setCountries] = useState([]);
  const [date, setDate] = useState("");
  const [country, setCountry] = useState("");
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      setCountries(data.Countries);
      const date = new Date(data.Date);
      setDate(date.toLocaleString());
    }

    getData();
  }, []);

  const searchCountry = (e) => {
    e.preventDefault();
    setSearchedCountry("");
    countries
      .filter((elem) => {
        const success =
          elem.Country.toLowerCase() === country.toLowerCase() ||
          elem.CountryCode.toLowerCase() === country.toLowerCase();
        return success ? success : setError(true);
      })
      .map((countryObj) => {
        setError(false);
        console.log(countryObj);
        return setSearchedCountry(countryObj);
      });
    setCountry("");
  };

  return (
    <div className="search__info-wrapper">
      <div className="search__info">
        <form className="search__info-form" onSubmit={searchCountry}>
          <TextField
            id="standard-basic"
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </div>
      <h2>By {date}</h2>
      {error && <h2>Country not found</h2>}
      <CountryCard
        key={searchedCountry.CountryCode}
        countryName={searchedCountry.Country}
        totalCases={searchedCountry.TotalConfirmed}
        newCases={searchedCountry.NewConfirmed}
        error={error}
      />
    </div>
  );
}
