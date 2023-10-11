import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as moviesRepository from './moviesRepository';
import { getMovies } from './moviesRepository'

describe('getMovies', () => {
  it('should fetch and return movie data', async () => {
    const mockResponse = {
      results: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
    };

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test
    const movies = await getMovies(1);

    // Assert that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/discover/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c&page=1'
    );

    // Assert that the function returned the expected data
    expect(movies).toEqual(mockResponse.results);
  });

  it('should handle API errors', async () => {
    // Mock a failed API response
    global.fetch = jest.fn().mockRejectedValue(new Error('API error'));

    // Call the function you want to test
    const movies = await getMovies(1);

    // Assert that the function returned an empty array in case of an error
    expect(movies).toEqual([]);
  });
});

// Configurar un mock global para fetch
global.fetch = jest.fn();

describe('MovieFilter', () => {
  // Configurar un mock para la función getGenre
  const mockGetGenre = jest.spyOn(moviesRepository, 'getGenre');

  beforeEach(() => {
    // Restablecer el estado de los mocks antes de cada prueba
    jest.resetAllMocks();
  });

  it('should display the filter options', async () => {
    // Simular una respuesta exitosa de getGenre
    mockGetGenre.mockResolvedValue({ genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }] });
  });
// Prueba para simular una respuesta exitosa de getOne
it('should simulate a successful getOne call', async () => {
  // Simular una respuesta exitosa de getOne
  const mockResponse = { id: 1, name: 'Action'};
  global.fetch.mockResolvedValue({ json: () => mockResponse });

  // Llamar a la función getOne y verificar su comportamiento
  const movieId = 123; // Reemplaza con el ID de la película que deseas simular
  const movieData = await moviesRepository.getOne(movieId);

  // Verificar que la función getOne devuelva los datos simulados
  expect(movieData).toEqual(mockResponse);
});


})