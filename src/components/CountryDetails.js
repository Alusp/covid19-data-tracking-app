import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { BiArrowBack } from 'react-icons/bi';
import { BsFillMicFill } from 'react-icons/bs';
import { IoMdSettings } from 'react-icons/io';

import { fetchCovid } from '../redux/countries/Coountry';
import './details.css';

const CountryDetails = () => {
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.CountryReducer.countriesData);
  if (countryData.length === 0) {
    dispatch(fetchCovid());
  }
  const params = useParams();

  const country = countryData.find((item) => item.Country === params.id);

  return (
    <div className="bg-my-header">
      {countryData.length === 0 && (
        <div className="text-center mt-32">
          <h1 className="text-2xl">Fetching data...</h1>
        </div>
      )}
      {country && (
        <>
          <div className="py-5 hero">
            <div className=" text-color container mx-auto flex items-center justify-between px-5">
              <Link to="/">
                <BiArrowBack className="text-4xl" />
              </Link>
              <div>
                <h1 className="text-color text-xl md:text-2xl lg:text-3xl">
                  {country.Country}
                </h1>
              </div>
              <div className="text-color flex items-center">
                <BsFillMicFill className="mx-2 text-lg" />
                <IoMdSettings className="ml-2 text-xl" />
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: -10 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-16 mb-32 main-bg container mx-auto px-10"
          >
            <div className="text-color flex justify-between items-center border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                New Confirmed
              </h3>
              <p className="text-xl md:text-2xl">
                {country.NewConfirmed}
              </p>
            </div>
            <div className="text-color flex justify-between items-center   border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                Total Confirmed
              </h3>
              <p className="text-xl md:text-2xl">
                {country.TotalConfirmed}
              </p>
            </div>
            <div className="text-color flex justify-between items-center border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">New Death</h3>
              <p className="text-xl md:text-2xl">
                {country.NewDeaths}
              </p>
            </div>
            <div className="text-color flex justify-between items-center border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">Total Death</h3>
              <p className="text-xl md:text-2xl">
                {country.TotalDeaths}
              </p>
            </div>
            <div className="text-color flex justify-between items-center border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                New Recovered
              </h3>
              <p className="text-xl md:text-2xl">
                {country.NewRecovered}
              </p>
            </div>
            <div className="text-color flex justify-between items-center border border-pink-400 p-8">
              <h3 className="text-lg md:text-2xl font-semibold">
                Total Recovered
              </h3>
              <p className="text-xl md:text-2xl">
                {country.TotalRecovered}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};
export default CountryDetails;
