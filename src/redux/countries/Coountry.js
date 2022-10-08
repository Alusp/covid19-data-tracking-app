import axios from 'axios';

const FETCH_COVID_DATA = 'covid/FETCH_COVID_DATA';
const covidApi = 'https://api.covid19api.com/summary';
// App initial state
const initialState = {
  countriesData: [],
};

// Actions
export const fetchCovidData = (payload) => ({
  type: FETCH_COVID_DATA,
  payload,
});

export const fetchCovid = () => async (dispatch) => {
  const covidData = await axios.get(covidApi);
  const data = await covidData.data;
  dispatch(fetchCovidData(data.Countries));
};

// Reducer
const CountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return { ...state, countriesData: action.payload };
    default:
      return state;
  }
};

export default CountryReducer;
