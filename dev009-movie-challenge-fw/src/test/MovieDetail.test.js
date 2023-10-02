import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom'; // Importa MemoryRouter y Route
import MovieDetail from './MovieDetail';

describe('MovieDetail Component', () => {
    it('renders movie details', async () => {
      // Simula datos de película para las pruebas
      const selectedMovie = {
        id: 1,
        title: 'Movie Title',
        poster_path: '/path/to/poster.jpg',
        release_date: '2021-01-01',
        overview: 'Movie overview text.',
        vote_average: 7.5,
        production_companies: [
          {
            id: 101,
            logo_path: '/path/to/company1-logo.jpg',
            name: 'Company 1',
          },
        ],
        genre_ids: [1, 2], // Ejemplo de IDs de género
      };
  
      // Renderiza el componente dentro de MemoryRouter
      render(
        <MemoryRouter initialEntries={['/movie/1']}>
          <Route path="/movie/:movieId">
            <MovieDetail genres={[]} />
          </Route>
        </MemoryRouter>
      );
  
      // Simula una llamada a la API para obtener los detalles de la película
      jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(selectedMovie),
      });
  
      // Espera a que se carguen los datos de la película
      await waitFor(() => {
        screen.getByText('Movie Title');
        screen.getByText('Release Year: 2021');
        screen.getByText('Movie overview text.');
        screen.getByText('Score: 7.5');
        screen.getByAltText('Movie Title');
        screen.getByAltText('Company 1');
      });
  
      // Asegúrate de que las pruebas pasen según tus necesidades
    });
  });