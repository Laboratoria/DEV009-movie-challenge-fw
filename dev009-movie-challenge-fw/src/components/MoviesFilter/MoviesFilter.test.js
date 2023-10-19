import React, { useState } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { waitFor, render, screen } from '@testing-library/react';
import MovieFilter from './MoviesFilter';
import { getGenre } from '../../utils/Services/moviesRepository';

// Mock de la función getGenre para simular la respuesta de la API
jest.mock('../../utils/Services/moviesRepository', () => ({
  getGenre: jest.fn(() => Promise.resolve({ genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }] })),
}));

describe('MovieFilter Component', () => {
  it('renders movie details correctly', async () => {

    render(
      <MovieFilter
        setSelectedGenre={jest.fn()}
      />
    );
    await waitFor(() => {

      // Simulando la selección del género
      expect(screen.getByText('FILTER BY GENRE')).toBeInTheDocument();
      expect(screen.getByTitle('Dropdown filtro por género')).toHaveValue('all');
    });
  });
});
