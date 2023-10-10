import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import MovieFilter from '../components/MoviesFilter';
import { getGenre } from '../utils/api/moviesRepository';

// Importa jest-fetch-mock
import fetchMock from 'jest-fetch-mock';

// Configura jest-fetch-mock
fetchMock.enableMocks();

describe('MovieFilter Component', () => {
  // Mock de la función getGenre
  const mockGetGenre = jest.fn();

  beforeEach(() => {
    // Limpia el mock antes de cada prueba
    fetchMock.mockClear();
  });

  it('renders year filter correctly', async () => {
    // Simula una respuesta de getGenre
    mockGetGenre.mockResolvedValue({
      genres: [
        { id: 1, name: 'Genre 1' },
        { id: 2, name: 'Genre 2' },
      ],
    });

    // Renderiza el componente MovieFilter
  render(
      <MovieFilter
        onYearFilterChange={() => {}}
        onGenreFilterChange={() => {}}
        filteredYear="2022"
        filteredGenre="all"
      />
    );

    // Verifica que el componente renderice el filtro de año y muestre el valor seleccionado
    expect(screen.getByText('FILTER BY YEAR')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2022')).toBeInTheDocument();

    // Espera a que se resuelva la llamada a getGenre
    await waitFor(() => {
      expect(mockGetGenre).toHaveBeenCalledTimes(1);
    });
  });

  it('renders genre filter correctly', async () => {
    mockGetGenre.mockResolvedValue({
      genres: [
        { id: 1, name: 'Genre 1' },
        { id: 2, name: 'Genre 2' },
      ],
    });

    // Renderiza el componente MovieFilter
   render(
      <MovieFilter
        onYearFilterChange={() => {}}
        onGenreFilterChange={() => {}}
        filteredYear="all"
        filteredGenre="1"
      />
    );

    // Verifica que el componente renderice el filtro de género y muestre el valor seleccionado
    expect(screen.getByText('FILTER BY GENRE')).toBeInTheDocument();
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    // Espera a que se resuelva la llamada a getGenre
    await waitFor(() => {
      expect(mockGetGenre).toHaveBeenCalledTimes(1);
    });
  });

});

