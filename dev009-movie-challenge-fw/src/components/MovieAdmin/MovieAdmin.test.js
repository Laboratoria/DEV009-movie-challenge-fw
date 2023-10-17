import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieAdmin from './MovieAdmin';

test('renders MovieAdmin component', async () => {
  render(<MovieAdmin/>);

  const wanderlustText = screen.getByText('WANDERLUST');
  const introText = screen.getByText('Are you passionate about movies');
  const logoImage = screen.getByAltText('Logo de mi sitio web');

  expect(wanderlustText).toBeInTheDocument();
  expect(introText).toBeInTheDocument();
  expect(logoImage).toBeInTheDocument();
});



/*test('Buscar películas al escribir "Avengers"', async () => {
  // Crea un mock de la función searchMovie
  const mockSearchMovie = jest.fn().mockResolvedValue({
    page: 1,
    results: [
      {
        id: 1,
        title: 'Avengers',
        release_date: '2022-10-05',
        poster_path: '/path-to-poster.jpg',
        overview: 'This is a movie overview',
        vote_average: 7.5,
        genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }],
        production_companies: [
          { id: 1, name: 'Company 1', logo_path: '/path-to-logo1.jpg' },
          { id: 2, name: 'Company 2', logo_path: '/path-to-logo2.jpg' },
        ],
      },
    ],
    total_pages: 1,
    total_results: 1,
  });

  // Renderiza el componente MovieAdmin y pasa el mock de searchMovie
  render(<MovieAdmin searchMovie={mockSearchMovie} />);

  // Simula la escritura de "Avengers" en el campo de búsqueda
  const searchInput = screen.getByPlaceholderText('Buscar películas');
  fireEvent.change(searchInput, { target: { value: 'Avengers' } });

  // Asegúrate de que la función searchMovie se haya llamado con 'Avengers'
  await waitFor(() => {
    expect(mockSearchMovie).toHaveBeenCalledWith('Avengers');
  });

  
});
*/
