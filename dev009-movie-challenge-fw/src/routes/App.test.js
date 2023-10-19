import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes,Route } from 'react-router-dom';
import App from './App';

jest.mock('../../assets/img/logo.png');

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve({ results: [{ title: 'Avengers' }] })
});

test('renders MovieAdmin component for the root path', () => {
  render(<App />);

  const movieAdminText = screen.getByText(/WANDERLUST/);
  expect(movieAdminText).toBeInTheDocument();
});

/*test('renders MovieDetail component for /movie/:movieId path', () => {
   
    render(
    <MemoryRouter initialEntries={['Avengers']}>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </MemoryRouter>
    );
    waitFor
    // Wait for the component to load with the movie data
    expect(screen.findByText('Movie 1').toBeInTheDocument());

    });*/