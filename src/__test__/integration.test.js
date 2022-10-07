import { fetchCovidDataFromCountries } from '../__mocks__/api';

beforeEach(() => {
  fetch.resetMocks();
});

it('fetches covid data from countries', () => {
  fetch.mockResponseOnce(JSON.stringify({ Countries: [] }));

  fetchCovidDataFromCountries().then((res) => {
    expect(res.Countries).toEqual([]);
  });

  expect(fetch.mock.calls.length).toEqual(1);
  expect(fetch.mock.calls[0][0]).toEqual('https://api.covid19api.com/summary');
});
