import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  useSortedList: (list, selectedSortOption) => list, // Mock useSortedList
}));

describe('MovieAdmin', () => {
  it('should render MovieAdmin component', () => {
    render(<MovieAdmin />);
    // You can add assertions here to check if the component renders correctly
    // For example, check if certain elements or text is present on the screen.
  });

  it('should handle filter changes', () => {
    render(<MovieAdmin />);
    
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
});
