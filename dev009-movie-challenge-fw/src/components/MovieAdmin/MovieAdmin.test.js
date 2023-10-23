import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieAdmin from './MovieAdmin';

jest.mock('../../assets/img/logo.png');
global.fetch = () => Promise.resolve({
  json: () => Promise.resolve({ results: [{ title: 'Avengers' }] })
})



test('renders MovieAdmin component', async () => {
  render(<MovieAdmin />);
  waitFor(() => {
    const wanderlustText = screen.getByText('WANDERLUST');
    const introText = screen.getByText('Are you passionate about movies');
    const logoImage = screen.getByAltText('Logo de mi sitio web');
    const currentPageInput = screen.getByLabelText('Current Page');
    const totalPagesInput = screen.getByLabelText('Total Pages');
   

  // Encuentra y simula la entrada de búsqueda
  const searchInput = screen.getByPlaceholderText('Search for movies');
  fireEvent.change(searchInput, { target: { value: searchTerm } });
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);
  const avengersResult = screen.getByText('Avengers');

  


    expect(wanderlustText).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(currentPageInput).toBeInTheDocument();
    expect(totalPagesInput).toBeInTheDocument();
    expect(avengersResult).toBeInTheDocument();
  });
});

jest.mock('../../utils/Services/moviesRepository', () => ({
  ...jest.requireActual('../../utils/Services/moviesRepository'), // Mantiene las implementaciones no mockeadas
  searchMovie: jest.fn((searchTerm) => Promise.resolve({ results: [{ title: 'Avengers' }] })),
  getGenre: jest.fn(() => Promise.resolve({ genres: [{ id: 1, name: 'Action' }, { id: 2, name: 'Adventure' }] })),
}));

test('searchMovie is called with the correct searchTerm', () => {
  render(<MovieAdmin />);

  // Simula la búsqueda
  const searchInput = screen.getByPlaceholderText('Buscar películas');
  fireEvent.change(searchInput, { target: { value: 'Avengers' } });

  // Simula el botón de búsqueda
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  // Verifica que searchMovie se haya llamado con el término de búsqueda correcto
  expect(moviesRepository.searchMovie).toHaveBeenCalledWith('Avengers');
});

test('searchResults are displayed correctly', async () => {
  render(<MovieAdmin />);

  // Simula la búsqueda
  const searchInput = screen.getByPlaceholderText('Buscar películas');
  fireEvent.change(searchInput, { target: { value: 'Avengers' } });

  // Simula el botón de búsqueda
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);

  // Espera a que se muestren los resultados de la búsqueda
  await screen.findByText('Avengers');

  // Verifica que los resultados de la búsqueda se muestren en pantalla
  expect(screen.getByText('Avengers')).toBeInTheDocument();
});