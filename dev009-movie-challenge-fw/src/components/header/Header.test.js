import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('Buscar películas al escribir "Avengers"', async () => {
  // Crea un mock de la función onSearch
  const mockOnSearch = jest.fn();

  render(<Header onSearch={mockOnSearch} />);

  const searchTerm = await screen.getByPlaceholderText('Buscar películas');

  // Simula la escritura de "Avengers" en el campo de búsqueda
  fireEvent.change(searchTerm, { target: { value: 'Avengers' } });

  const button = await screen.getByTestId('search-button'); // Asegúrate de establecer este atributo en tu componente
  fireEvent.click(button)
  // Espera a que se complete la búsqueda 
  await waitFor(() => {
    // Verifica que la función mockOnSearch se haya llamado con 'Avengers'
    return expect(mockOnSearch).toHaveBeenCalledWith('Avengers');
    
    //expect(results).toBeInTheDocument();
  });
});
