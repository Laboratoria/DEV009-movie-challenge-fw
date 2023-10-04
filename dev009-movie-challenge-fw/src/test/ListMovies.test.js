import React from 'react';
import { render, screen } from '@testing-library/react';
import ListMovies from './ListMovies';

describe('ListMovies Component', () => {
  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      release_date: '2023-01-01',
      poster_path: '/path/to/poster1.jpg',
    },
    {
      id: 2,
      title: 'Movie 2',
      release_date: '2023-02-01',
      poster_path: '/path/to/poster2.jpg',
    },
  ];

  it('renders movie cards correctly', () => {
    render(
      <ListMovies
        movies={movies}
        sortedList={movies} 
        filteredYear="all"
        filteredGenre="all"
      />
    );

    // Make assertions based on your component's output
    const movieCards = screen.getAllByTestId('movie-card');
    expect(movieCards).toHaveLength(2);

    // You can add more specific assertions here based on your component's rendering
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

});


