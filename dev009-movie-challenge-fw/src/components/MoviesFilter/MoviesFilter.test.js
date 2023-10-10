import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import MovieFilter from './MoviesFilter';
import { getGenre } from '../../utils/api/moviesRepository';


// Importa jest-fetch-mock
import fetchMock from 'jest-fetch-mock';

// Configura jest-fetch-mock
fetchMock.enableMocks();

const MovieData = [
  {
    "adult": false,
    "backdrop_path": "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
    "genre_ids": [1],
    "id": 926393,
    "original_language": "en",
    "original_title": "The Equalizer 3",
    "overview": "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    "popularity": 3761.779,
    "poster_path": "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
    "release_date": "2023-08-30",
    "title": "The Equalizer 3",
    "video": false,
    "vote_average": 7.4,
    "vote_count": 612
  },
  {
    "adult": false,
    "backdrop_path": "/pA3vdhadJPxF5GA1uo8OPTiNQDT.jpg",
    "genre_ids": [2],
    "id": 678512,
    "original_language": "en",
    "original_title": "Sound of Freedom",
    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    "popularity": 2724.044,
    "poster_path": "/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
    "release_date": "2023-07-03",
    "title": "Sound of Freedom",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 754
  }
];


it.only('MovieFilter Component', () => {
  // Mock de la función getGenre
  const mockGetGenre = jest.fn();

  beforeEach(() => {
    // Limpia el mock antes de cada prueba
    fetchMock.mockClear();
  });

  /*it('renders year filter correctly', async () => {
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
  
    expect(screen.getByText('FILTER BY YEAR')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2022')).toBeInTheDocument();
  
    // Espera a que se resuelva la llamada a getGenre
    await waitFor(() => {
      expect(mockGetGenre).toHaveBeenCalledTimes(1);
    });
  });*/
  

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
        filteredGenre={1}
        movies={MovieData} 
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
