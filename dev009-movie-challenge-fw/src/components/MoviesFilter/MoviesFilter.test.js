import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieFilter from './MoviesFilter';
import * as moviesRepository from '../../utils/Services/moviesRepository'; // Importa el módulo que deseas simular

describe('MovieFilter', () => {
  it('should filter by year', async () => {
    // Simular datos ficticios que devolverá getMovies
    jest.spyOn(moviesRepository, 'getMovies').mockResolvedValue([]);

    // Restablecer el estado del mock antes de cada prueba
    jest.clearAllMocks();
    jest.spyOn(moviesRepository, 'getGenre').mockResolvedValue({ genres: [] });

    const onYearFilterChange = jest.fn();
    
    // Render the MovieFilter component
    render(
      <MovieFilter
        onYearFilterChange={jest.fn()}
        onGenreFilterChange={jest.fn()}
        filteredYear="all"
        filteredGenre="all"
      />
    );


    // Find the year filter dropdown
    const yearFilterDropdown = screen.getByTitle('Dropdown filtro por año');

    // Simulate selecting a year
    fireEvent.change(yearFilterDropdown, { target: { value: '2022' } });

  });

  it('should filter by genre', () => {
    // Simular datos ficticios que devolverá getMovies
    moviesRepository.getMovies.mockResolvedValue([
      // Agrega películas simuladas aquí
    ]);

    // Restablecer el estado del mock antes de cada prueba
    moviesRepository.getMovies.mockClear();
    const onGenreFilterChange = jest.fn();
    // Render the MovieFilter component
    render(
      <MovieFilter
        onYearFilterChange={jest.fn()}
        onGenreFilterChange={jest.fn()}
        filteredYear="all"
        filteredGenre="all"
      />
    );

    // Find the genre filter dropdown
    const genreFilterDropdown = screen.getByTitle('Dropdown filtro por género');

    // Simulate selecting a genre
    fireEvent.change(genreFilterDropdown, { target: { value: '2' } });

  });
});
