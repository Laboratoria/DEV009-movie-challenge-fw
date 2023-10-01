import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders the Header component', () => {
  const { getByText } = render(<Header />);

  // Verificar que el texto "Home" esté presente en el componente renderizado
  const homeLink = getByText('Home');
  expect(homeLink).toBeInTheDocument();

  // Verificar que el texto "Movies" esté presente en el componente renderizado
  const moviesLink = getByText('Movies');
  expect(moviesLink).toBeInTheDocument();

});
