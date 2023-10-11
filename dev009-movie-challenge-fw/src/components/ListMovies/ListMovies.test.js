import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListMovies from './ListMovies';

describe('ListMovies Component', () => {
  it.only('renders movie titles and release years correctly', () => {
    const movies = [
      { id: 1, title: 'Movie 1', release_date: '2022-10-05', poster_path: '/path-to-poster1.jpg' },
      { id: 2, title: 'Movie 2', release_date: '2022-09-15', poster_path: '/path-to-poster2.jpg' },
    ];

    render(
      <MemoryRouter>
        <ListMovies movies={movies} sortedList={movies} filteredYear="all" filteredGenre="all" />
      </MemoryRouter>
    );

    movies.forEach((movie) => {
      const titleElement = screen.getByText(movie.title);
      const releaseYearElements = screen.getAllByText(`Release Year: ${movie.release_date.split('-')[0]}`);

      expect(titleElement).toBeInTheDocument();
      expect(releaseYearElements).toHaveLength(2); 
    });
  });

});

