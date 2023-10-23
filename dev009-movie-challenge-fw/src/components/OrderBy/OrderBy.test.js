import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderBy from './OrderBy';

test('OrderBy component renders correctly', () => {
  render(<OrderBy selectedSortOption="vote_average.desc" handleSortOptionChange={() => {}} />);

  expect(screen.getByText('SORT BY')).toBeInTheDocument( );
  expect(screen.getByTitle('Dropdown para ordenar películas')).toHaveValue('vote_average.desc');
});
