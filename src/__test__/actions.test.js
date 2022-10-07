import * as actions from '../__mocks__/actions';

describe('actions', () => {
  it('it should fetch covid data from countries', () => {
    const expectedAction = {
      type: 'FETCH_COVID_DATA',
      payload: [],
    };
    expect(actions.fetchCovid([])).toEqual(expectedAction);
  });
});
