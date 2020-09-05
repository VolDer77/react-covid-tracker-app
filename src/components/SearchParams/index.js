import React, { useState } from "react";
import CountryCard from "../CountryCard";
import Loader from "../Loader";
import "./SearchParams.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function SearchParams({ countries, date, loading }) {
  const [country, setCountry] = useState("");
  const [searchedCountry, setSearchedCountry] = useState([]);
  const [error, setError] = useState(false);


  const searchCountry = (e) => {
    e.preventDefault();
    setSearchedCountry("");
    countries
      .filter((elem) => {
        const success =
          elem.Slug === country.toLowerCase() ||
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

      {loading ? <Loader /> :
        <>
          <h2>By {date}</h2>
          {error && <h2>Country not found</h2>}
          {searchedCountry.Country && <CountryCard
            countryName={searchedCountry.Country}
            totalCases={searchedCountry.TotalConfirmed}
            newCases={searchedCountry.NewConfirmed}
            totalDeaths={searchedCountry.TotalDeaths}
            newDeaths={searchedCountry.NewDeaths}
            totalRecovered={searchedCountry.TotalRecovered}
            newRecovered={searchedCountry.NewRecovered}
          />}
        </>}
    </div>
  );
}
