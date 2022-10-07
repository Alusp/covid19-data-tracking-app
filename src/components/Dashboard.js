/* eslint-disable */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

import { fetchCovid } from '../redux/countries/Coountry.js';
import Home from './Home';

import './dashb.css';

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');

  const covidData = useSelector((state) => state.CountryReducer.countriesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid());
  }, []);
  console.log(covidData);
  const searchFilter = (event) => {
    setSearchText(event.target.value);
  };

  const filtered = covidData.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));

  let total = filtered.reduce((acc, item) => {
    return acc + item.TotalConfirmed;
  }, 0);
   
  return (
    <motion.div className="bg-my-header ">
      <div className="h-30 md:h-45 flex items-center justify-center hero sticky top-0 z-10 bg-my-header">
        <div className="w-2/3 md:w-3/4 bg-my-header">
          <h1 className="covid-header text-xl sm:text-2xl md:text-3xl mt-10 lg:text-5xl">
            COVID-19 Data Tracking System
          </h1>
          <p className="covid-header text-xs sm:text-lg font-thin text-white">
            Latest updates on current COVID-19 metrics around
            the world
          </p>
          <div className="flex items-center justify-between gap-8">
          
           <input
            type="text"
            placeholder="Search by country name"
            className="py-3 px-5 mt-3 mb-3 focus:outline-pink-500 rounded-full w-full md:3/4 lg:w-2/5"
            value={searchText}
            onChange={searchFilter}
           />
            <div className="covid-header box flex items-center justify-between w-1/2 sm:w-1/5 md:w-1/5 rounded-md p-1 mb-6 ml-auto"
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}>
            <h1>Global Confirmed Cases: {total}</h1>
            </div>
        </div>
        </div>
      </div>
      <div className="covid-header container mx-auto md:mt-16 md:mb-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-my-header">
        {filtered.map((country) => (
          <div key={country.ID}>
            <Home country={country} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Dashboard;
