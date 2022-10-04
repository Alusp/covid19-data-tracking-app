import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Nav = () => {
  // assigning location variable
  const location = useLocation();

  // destructuring pathname from location
  const { pathname } = location;

  // Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
  return (

    <>
      <div className="navig-container">
        <div className="logo-header">
          <h1 className="title">Covid Route</h1>
        </div>
        <ul>
          <li className={splitLocation[1] === '' ? 'active' : ''}>
            <Link to="/"><BiArrowBack /></Link>
          </li>
          <li className={splitLocation[1] === 'mission' ? 'active' : ''}>
            <Link to="/CountryDetails">Country Details</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Nav;
