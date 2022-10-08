export const fetchCovidDataFromCountries = () => fetch('https://api.covid19api.com/summary').then((res) => {
  if (res.status === 200) return res.json();

  throw new Error('Something went wrong');
}).then((data) => data);

export default fetchCovidDataFromCountries;
