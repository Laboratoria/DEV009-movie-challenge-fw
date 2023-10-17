/*import React from 'react';
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

describe('getOne', () => {
  it('should simulate a successful getOne call', async () => {
    // Simular una respuesta exitosa de getOne
    const mockResponse = { id: 1, title: 'Movie 1' };
    global.fetch.mockResolvedValue({ json: () => mockResponse });

    // Llamar a la función getOne y verificar su comportamiento
    const movieId = 123; // Reemplaza con el ID de la película que deseas simular
    const movieData = await moviesRepository.getOne(movieId);

    // Verificar que la función getOne devuelva los datos simulados
    expect(movieData).toEqual(mockResponse);
  });

  it('should handle API errors', async () => {
    // Simular un error en la respuesta de getOne
    global.fetch.mockRejectedValue(new Error('API error'));

    // Llamar a la función getOne y verificar su comportamiento
    const movieId = 123; // Reemplaza con el ID de la película que deseas simular
    const movieData = await moviesRepository.getOne(movieId);

    // Verificar que la función devuelva null en caso de un error
    expect(movieData).toBeNull();
  });
});

describe('getMovieSorted', () => {
  it('should fetch and return sorted movie data', async () => {
    const mockResponse = {
      results: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
    };

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test
    const page = 1; // Replace with the desired page number
    const sortMovies = 'popularity.desc'; // Replace with the desired sorting option
    const sortedMovies = await moviesRepository.getMovieSorted(page, sortMovies);

    // Assert that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/discover/movie/?page=${page}&sort_by=${sortMovies}`,
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          accept: 'application/json',
          Authorization: expect.any(String), // Ensure that the Authorization header is present
        }),
      })
    );

    // Assert that the function returned the expected sorted movie data
    expect(sortedMovies).toEqual(mockResponse.results);
  });

  it('should handle API errors', async () => {
    // Mock a failed API response
    global.fetch = jest.fn().mockRejectedValue(new Error('API error'));

    // Call the function you want to test
    const page = 1; // Replace with the desired page number
    const sortMovies = 'popularity.desc'; // Replace with the desired sorting option
    const sortedMovies = await moviesRepository.getMovieSorted(page, sortMovies);

    // Assert that the function returned an empty array in case of an error
    expect(sortedMovies).toEqual([]);
  });
});

describe('getGenre', () => {
  it('should fetch and return genre data', async () => {
    const mockResponse = {
      genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }],
    };

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test
    const genreData = await moviesRepository.getGenre();

    // Assert that the fetch function was called with the correct URL and headers
    expect(fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          accept: 'application/json',
          Authorization: expect.any(String), // Ensure that the Authorization header is present
        }),
      })
    );

    // Assert that the function returned the expected genre data
    expect(genreData).toEqual(mockResponse);
  });

  it('should handle API errors', async () => {
    // Mock a failed API response
    global.fetch = jest.fn().mockRejectedValue(new Error('API error'));

    // Call the function you want to test
    const genreData = await moviesRepository.getGenre();

    // Assert that the function returned an empty array in case of an error
    expect(genreData).toEqual([]);
  });
});
describe('searchMovie', () => {
  it('should fetch and return search results', async () => {
    const searchQuery = 'The Matrix';

    const mockResponse = {
      results: [{ title: 'The Matrix' }, { title: 'Matrix Reloaded' }],
    };

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test
    const searchResults = await moviesRepository.searchMovie(searchQuery);

    // Assert that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/search/movie?&query=${searchQuery}`
    );

    // Assert that the function returned the expected search results
    expect(searchResults).toEqual(mockResponse.results);
  });

  it('should handle empty search results', async () => {
    const searchQuery = 'Nonexistent Movie';

    // Mock an empty response
    const mockResponse = {
      results: [],
    };

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test
    const searchResults = await moviesRepository.searchMovie(searchQuery);

    // Assert that the function returned an empty results array
    expect(searchResults).toEqual([]);
  });

  it('should handle API errors', async () => {
    const searchQuery = 'The Matrix';

    // Mock a failed API response
    global.fetch = jest.fn().mockRejectedValue(new Error('API error'));

    // Call the function you want to test
    const searchResults = await moviesRepository.searchMovie(searchQuery);

    // Assert that the function returned an empty array in case of an error
    expect(searchResults).toEqual([]);
  });
});

});*/