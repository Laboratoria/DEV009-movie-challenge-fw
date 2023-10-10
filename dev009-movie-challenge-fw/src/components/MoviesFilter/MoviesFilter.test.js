import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieFilter from './MoviesFilter';

// Mock del módulo moviesRepository
import * as moviesRepository from '../../utils/Services/moviesRepository';

// Mock de la función getMovies
jest.mock('../../utils/Services/moviesRepository', () => ({
  getMovies: jest.fn(),
}));

const mockYearFilterChange = jest.fn();
const mockGenreFilterChange = jest.fn();

const setup = () => {
  const utils = render(
    <MovieFilter
      onYearFilterChange={mockYearFilterChange}
      onGenreFilterChange={mockGenreFilterChange}
      filteredYear="all"
      filteredGenre="all"
    />
  );
  return utils;
};

describe('MovieFilter', () => {
  it('should render the component', () => {
    // Configura el mock de getMovies para devolver datos ficticios
    moviesRepository.getMovies.mockResolvedValue([{ title: 'Movie 1' }, { title: 'Movie 2' }]);

    const { getByText } = setup();

    // Verifica que el componente se renderice correctamente
    expect(getByText('FILTER BY YEAR')).toBeInTheDocument();
    expect(getByText('FILTER BY GENRE')).toBeInTheDocument();
  });

  it('should handle year change', () => {
    // Configura el mock de getMovies para devolver datos ficticios
    moviesRepository.getMovies.mockResolvedValue([{ title: 'Movie 1' }, { title: 'Movie 2' }]);

    const { getByTitle } = setup();

    const yearFilter = getByTitle('Dropdown filtro por año');
    fireEvent.change(yearFilter, { target: { value: '2022' } });

    // Verifica que la función de cambio de año se llame con el valor correcto
    expect(mockYearFilterChange).toHaveBeenCalledWith('2022');
  });

  it('should handle genre change', () => {
    // Configura el mock de getMovies para devolver datos ficticios
    moviesRepository.getMovies.mockResolvedValue([{ title: 'Movie 1' }, { title: 'Movie 2' }]);

    const { getByTitle } = setup();

    const genreFilter = getByTitle('Dropdown filtro por género');
    fireEvent.change(genreFilter, { target: { value: '1' } });

    // Verifica que la función de cambio de género se llame con el valor correcto
    expect(mockGenreFilterChange).toHaveBeenCalledWith('1');
  });
});
