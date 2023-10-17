/*import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Usamos MemoryRouter para pruebas

import App from './App';

describe('App', () => {
  it('renders MovieAdmin when on the home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Verificar que el componente MovieAdmin se renderiza en la página de inicio
    const movieAdminElement = screen.getByText('WANDERLUST MOVIES TRAVELER COMMUNITY');
    expect(movieAdminElement).toBeInTheDocument();
  });

  it('renders MovieDetail when on a movie detail page', () => {
    render(
      <MemoryRouter initialEntries={['/movie/123']}>
        <App />
      </MemoryRouter>
    );

    // Verificar que el componente MovieDetail se renderiza en la página de detalles de la película
    const movieDetailElement = screen.getByText('Movie Detail'); // Ajusta esto según lo que contenga tu componente MovieDetail
    expect(movieDetailElement).toBeInTheDocument();
  });

});*/
