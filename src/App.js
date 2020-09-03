import React, { useEffect, useState } from "react";
import "./App.css";
import SearchParams from "./components/SearchParams";
import TotalResults from "./components/TotalResults";

function App() {
  const [countries, setCountries] = useState([]);
  const [totalInfo, setTotalInfo] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.covid19api.com/summary");
      const data = await response.json();
      setCountries(data.Countries);
      setTotalInfo(data.Global);
      const date = new Date(data.Date);
      setDate(date.toLocaleString());
    }

    getData();
  }, []);

  return (
    <div className="App">
      <SearchParams countries={countries} date={date} totalInfo={totalInfo} />
      <TotalResults
        countries={countries}
        totalConfirmed={totalInfo.TotalConfirmed}
        totalNewCases={totalInfo.NewConfirmed}
        setCountries={setCountries}
      />
    </div>
  );
}

export default App;
