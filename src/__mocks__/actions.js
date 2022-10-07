/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */
export const fetchCovid = (id) => {
  return {
    type: 'FETCH_COVID_DATA',
    payload: id,
  };
};
