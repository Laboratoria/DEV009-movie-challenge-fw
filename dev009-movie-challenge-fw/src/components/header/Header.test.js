import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Header from './Header'; 

describe('Header Component', () => {
    it('renders correctly', () => {
      const { getByPlaceholderText, getByText } = render(<Header onSearch={() => {}} />);
  
      // Verifica que se renderice el texto y el campo de búsqueda.
      expect(getByText('Home')).toBeInTheDocument();
      expect(getByPlaceholderText('Buscar películas')).toBeInTheDocument();
    });
  
    it('calls onSearch function when form is submitted', () => {
      // Mock de la función onSearch
      const mockOnSearch = jest.fn();
      const { getByText, getByPlaceholderText } = render(<Header onSearch={mockOnSearch} />);
  
      // Simula la entrada de texto en el campo de búsqueda
      const searchInput = getByPlaceholderText('Buscar películas');
      fireEvent.change(searchInput, { target: { value: 'Avengers' } });
  
      // Simula el envío del formulario
      const submitButton = getByText(/submit/i); // Ajusta esto según el texto de tu botón de envío
      fireEvent.click(submitButton);
  
      // Verifica que la función onSearch haya sido llamada con el término de búsqueda correcto
      expect(mockOnSearch).toHaveBeenCalledWith('Avengers');
    });
  });
  