import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListMovies from './ListMovies';

jest.mock('../../assets/svg/error.svg');

describe('ListMovies Component', () => {
  it.only('renders movie titles and release years correctly', () => {
    const movies = [
      { id: 1, title: 'Movie 1', release_date: '2022-10-05', poster_path: '/path-to-poster1.jpg' },
      { id: 2, title: 'Movie 2', release_date: '2022-09-15', poster_path: '/path-to-poster-that-does-not-exist.jpg' },
    ];
    

    render(
      <MemoryRouter>
        <ListMovies movies={movies}/>
      </MemoryRouter>
    );

    movies.forEach((movie) => {
      const titleElement = screen.getByText(movie.title);
      const releaseYearElements = screen.getAllByText(`Release Year: ${movie.release_date.split('-')[0]}`);
      const imageElement = screen.getByRole('/path-to-poster-that-does-not-exist.jpg');

      expect(titleElement).toBeInTheDocument();
      expect(releaseYearElements).toHaveLength(2);

      // Simula un error en la carga de la imagen
      fireEvent.error(imageElement);

      // Verifica que el atributo 'src' de la imagen sea igual a la imagen de reemplazo
      expect(imageElement).toHaveAttribute('src', 'error.svg');
    });
  });

});

