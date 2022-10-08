import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { BsArrowRightCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Country = (props) => {
  const navigate = useNavigate();

  const {
    country: { Country, TotalConfirmed },
  } = props;
  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: -10 }}
      transition={{ delay: 0.1, duration: 1.3 }}
      whileHover={{ scale: 1.1, zIndex: 1 }}
      className="border ml-4 border-pink-400 h-60 py-5 country px-8 bg-my-header"
    >
      <div className="flex justify-end items-end">
        <BsArrowRightCircle
          onClick={() => navigate(`/details/${Country}`)}
          className=" text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col justify-end items-end mt-8 md:mt-16 bg-my-header">
        <button
          type="button"
          onClick={() => navigate(`/details/${Country}`)}
          className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold uppercase focus:outline-none"
        >
          {Country}
        </button>
        <p className=" text-xs sm:text-sm md:text-lg mt-1">
          {TotalConfirmed}
        </p>
      </div>
    </motion.div>
  );
};

Country.propTypes = {
  country: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    Country: PropTypes.string,
  }).isRequired,
};

export default Country;
