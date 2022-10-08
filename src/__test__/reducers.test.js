describe('is fetchCovidDataFromCountries', () => {
  it('fetches covid data from countries', () => {
    fetch.mockResponseOnce(JSON.stringify({ Countries: [] }));

    expect(fetch.mock.calls.length).toBeFalsy();
  });
});
