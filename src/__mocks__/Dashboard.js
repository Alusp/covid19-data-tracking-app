/* eslint-disable import/no-named-as-default */
import React, { useEffect, useState } from 'react';
import fetchCovidDataFromCountries from './api';

const Dashboard = () => {
  const [covidData, setCovidData] = useState([]);

  useEffect(() => {
    fetchCovidDataFromCountries().then((data) => {
      setCovidData(data.Countries);
    });
  }, []);

  return (
    <div>
      {covidData.map((country) => (
        <div key={country.CountryCode}>
          <h1>{country.Country}</h1>
          <div>{country.TotalConfirmed}</div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
