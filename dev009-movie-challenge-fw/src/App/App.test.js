/*import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieAdmin from './App'; // Asegúrate de que la ruta sea correcta

// Mock de la función MoviesList
jest.mock('../utils/api/moviesRepository', () => ({
  MoviesList: jest.fn(() => ({
    movies: [], // Mock de la lista de películas
    currentPage: 1,
    setCurrentPage: jest.fn(), // Mock de la función setCurrentPage
  })),
}));

// Mock de la función searchMovie
jest.mock('../components/Header', () => ({
  searchMovie: jest.fn(), // Mock de la función searchMovie
}));

describe('MovieAdmin Component', () => {
  it('renders MovieAdmin correctly', () => {
    render(<MovieAdmin />);
    
    // Verifica que el componente se renderice correctamente
    expect(screen.getByText(/WANDERLUST/i)).toBeInTheDocument();
  });

  it('handles year filter change correctly', () => {
    render(<MovieAdmin />);
    
    // Simula la interacción del usuario para cambiar el filtro por año
    fireEvent.change(screen.getByTestId('year-filter'), { target: { value: '2023' } });

    // Verifica que el filtro por año se haya cambiado correctamente
    expect(screen.getByTestId('year-filter')).toHaveValue('2023');
  });

  it('handles genre filter change correctly', () => {
    render(<MovieAdmin />);
    
    // Simula la interacción del usuario para cambiar el filtro por género
    fireEvent.change(screen.getByTestId('genre-filter'), { target: { value: 'Action' } });

    // Verifica que el filtro por género se haya cambiado correctamente
    expect(screen.getByTestId('genre-filter')).toHaveValue('Action');
  });

  it('handles sort option change correctly', () => {
    render(<MovieAdmin />);
    
    // Simula la interacción del usuario para cambiar la opción de orden
    fireEvent.change(screen.getByTestId('sort-option'), { target: { value: 'title-asc' } });

    // Verifica que la opción de orden se haya cambiado correctamente
    expect(screen.getByTestId('sort-option')).toHaveValue('title-asc');
  });

  
});
*/