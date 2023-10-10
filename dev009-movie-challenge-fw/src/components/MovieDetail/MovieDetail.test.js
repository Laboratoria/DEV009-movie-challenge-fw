import React from 'react';
import '@testing-library/jest-dom/extend-expect'; 
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes} from 'react-router-dom'; 
import MovieDetail from './MovieDetail';


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), 
  useParams: () => ({ movieId: '1' }), 
}));

describe('MovieDetail Component', () => {
  it('renders movie details correctly', async () => {

    const movieData = {
      id: 1,
      title: 'Movie 1',
      release_date: '2022-10-05',
      poster_path: '/path-to-poster.jpg',
      overview: 'This is a movie overview',
      vote_average: 7.5,
      genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }],
      production_companies: [
        { id: 1, name: 'Company 1', logo_path: '/path-to-logo1.jpg' },
        { id: 2, name: 'Company 2', logo_path: '/path-to-logo2.jpg' },
      ],
    };

    // Mock the API call with the movieData
    jest.spyOn(require('../../utils/api/moviesRepository'), 'getOne').mockResolvedValue(movieData);

    render(
    <MemoryRouter initialEntries={['/movie/1']}>
        <Routes>
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </MemoryRouter>
    );
    // Wait for the component to load with the movie data
    await screen.findByText('Movie 1');
    // Assertions for various elements in your MovieDetail component
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Release Year: 2022')).toBeInTheDocument();
    expect(screen.getByText('Overview:')).toBeInTheDocument();
    expect(screen.getByText('This is a movie overview')).toBeInTheDocument();
    expect(screen.getByText(/Score:\s*\d+\.\d+/)).toBeInTheDocument();
    expect(screen.getByText('Genres:')).toBeInTheDocument();
    expect(screen.getByText('Action')).toBeInTheDocument();
    expect(screen.getByText('Adventure')).toBeInTheDocument();
    expect(screen.getByAltText('Company 1')).toBeInTheDocument();
    expect(screen.getByAltText('Company 2')).toBeInTheDocument();
  });
});
