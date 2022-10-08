/* eslint-disable */
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Country from '../components/Home';

const country = {
  country: {
    Country: 'Nigeria',
    TotalConfirmed: 100,
  },
};

describe('Country', () => {
  it('should render country', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Country {...country} />
      </BrowserRouter>,
    );
    expect(getByText('Nigeria')).toBeTruthy();
  });
});


jest.mock('../components/Dashboard', () => () => <div>Mocked Dashboard</div>);
