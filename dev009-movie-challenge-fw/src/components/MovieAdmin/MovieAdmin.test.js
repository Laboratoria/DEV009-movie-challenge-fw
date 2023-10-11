import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieAdmin from './MovieAdmin';

// Mock the custom hooks and other dependencies
jest.mock('../../utils/CustomHook/useMovies', () => ({
  useMovies: () => ({
    movies: [], // Mock movies data
    currentPage: 1,
    setCurrentPage: jest.fn(),
  }),
}));

jest.mock('../../utils/CustomHook/useSortedList', () => ({
  useSortedList: (list, selectedSortOption) => list,
}));


describe('MovieAdmin', () => {
  it('should handle sort option change', () => {
    render(      
    <MemoryRouter>
      <MovieAdmin />
    </MemoryRouter>
  );
    
    // Find the sort option dropdown element
    const sortOptionDropdown = screen.getByTitle('Dropdown de opciones de orden');
    
    // Mock setSelectedSortOption function
    const setSelectedSortOption = jest.fn();
    
    // Override the useState implementation
    jest.spyOn(React, 'useState').mockImplementation((initialState) => [initialState, setSelectedSortOption]);

    // Simulate selecting a sort option
    fireEvent.change(sortOptionDropdown, { target: { value: 'title-asc' } });
    
    // Verify if setSelectedSortOption was called with the expected value
    expect(setSelectedSortOption).toHaveBeenCalledWith('title-asc');
  });
});


  it('should handle filter changes', () => {
    render(      
      <MemoryRouter>
        <MovieAdmin />
      </MemoryRouter>
    );
    
    // You can use screen to find elements and simulate user interactions
    const yearFilterDropdown = screen.getByTitle('Dropdown filtro por año');
    const genreFilterDropdown = screen.getByTitle('Dropdown filtro por género');
    
    // Simulate selecting a year and genre
    fireEvent.change(yearFilterDropdown, { target: { value: '2022' } });
    fireEvent.change(genreFilterDropdown, { target: { value: 'action' } });
    
// For pagination, find the pagination element
    const paginationElement = screen.getByTitle('Paginación');

    // Simulate changing the page
    fireEvent.click(paginationElement);

    // You can add assertions here to check if the page change worked as expected.

    // For ListMovies, find the component or an element inside it
    const listMoviesComponent = screen.getByTitle('Lista de películas');

  });

