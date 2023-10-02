import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import ListMovies from '../components/ListMovies';

describe('ListMovies Component', () => {
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      release_date: '2021-01-01',
      poster_path: '/path/to/poster1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      release_date: '2022-02-02',
      poster_path: '/path/to/poster2.jpg',
    },
  ];

  it('renders a list of movies', () => {
    render(
      <MemoryRouter>
        <ListMovies sortedList={movies} filteredYear="all" />
      </MemoryRouter>
    );

    const movieElements = screen.getAllByRole('link', { name: /Movie/i });
    expect(movieElements).toHaveLength(movies.length);
  });

  it('filters movies by year', () => {
    render(
      <MemoryRouter>
        <ListMovies sortedList={movies} filteredYear="2022" />
      </MemoryRouter>
    );

    const movieElements = screen.getAllByRole('link', { name: /Movie/i });
    expect(movieElements).toHaveLength(1); // Only one movie in 2022
  });


});


