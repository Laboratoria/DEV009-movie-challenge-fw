import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as moviesRepository from './moviesRepository';
import { getMovies,getOne, searchMovie} from './moviesRepository'
import MovieDetail from '../../components/MovieDetail/MovieDetail';

describe('getMovies', () => {
  it('should fetch and return movie data without sort option', async () => {
    const mockResponse = {
      results: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
    };
    const genreId = 1;

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test without specifying a sort option
    const movies = await getMovies(1, genreId);

    // Assert that the fetch function was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/discover/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c&page=1&with_genres=${genreId}`
    );

    // Assert that the function returned the expected data
    expect(movies).toEqual(mockResponse.results);
  });

  it('should fetch and return movie data with sort option', async () => {
    const mockResponse = {
      results: [{ title: 'Movie 1' }, { title: 'Movie 2' }],
    };
    const genreId = 1;
    const selectedSortOption = 'popularity.desc'; 

    // Mock the global fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Call the function you want to test with a sort option
    const movies = await getMovies(1, genreId, selectedSortOption);

    // Assert that the fetch function was called with the correct URL including the sort option
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/discover/movie?api_key=ce209e5ff09d9bb827b2cd4025cd595c&page=1&with_genres=${genreId}&sort_by=${selectedSortOption}`
    );

    // Assert that the function returned the expected data
    expect(movies).toEqual(mockResponse.results);
  });

  it('should handle API errors', async () => {
    const genreId = 1; // Define genreId here
    // Mock a failed API response
    global.fetch = jest.fn().mockRejectedValue(new Error('API error'));

    // Call the function you want to test
    try {
      await getMovies(1, genreId);
      // Si no se lanza una excepción, la prueba debería fallar
    } catch (error) {
      // Verifica que la excepción sea del tipo Error
      expect(error).toBeInstanceOf(Error);

      expect(error.message).toBe('La respuesta de la API está vacía o no es válida.');
    }
  });

  it('should handle empty or invalid API response', async () => {
    const genreId = 1; // Define genreId here
    // Mock an API response with empty or invalid data
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ invalidData: true }),
    });

    // Call the function you want to test
    const movies = await getMovies(1, genreId);

    // Assert that the function returned an empty array
    expect(movies).toEqual([]);
  });
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
});


describe('getGenre', () => {
  it('should fetch and return genre data', async () => {
    const mockResponse = {
      genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Drama' }],
    };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

   
    const genreData = await moviesRepository.getGenre();

    // Assert that the fetch function was called with the correct URL and headers
    expect(fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/genre/movie/list?language=en',
      expect.objectContaining({
        method: 'GET',
        headers: expect.objectContaining({
          accept: 'application/json',
          Authorization: expect.any(String), 
        }),
      })
    );
    expect(genreData).toEqual(mockResponse);
  });

});


describe('searchMovie', () => {
  it('should fetch and return search results', async () => {
    const searchQuery = 'The Matrix';
    const searchResults = await searchMovie(searchQuery);

    // Asegúrate de que fetch y las aserciones estén dentro de esta función de prueba
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/search/movie?&query=${searchQuery}`,
      expect.any(Object)
    );

    // Otras aserciones para "should fetch and return search results"
  });

  it('should handle empty search results', async () => {
    const searchQuery = 'Nonexistent Movie';

    // Mock un resultado vacío

    const searchResults = await searchMovie(searchQuery);

    // Asegúrate de que fetch y las aserciones estén dentro de esta función de prueba
    expect(fetch).toHaveBeenCalledWith(
      `https://api.themoviedb.org/3/search/movie?&query=${searchQuery}`,
      expect.any(Object)
    );

    // Otras aserciones para "should handle empty search results"
  });
});
