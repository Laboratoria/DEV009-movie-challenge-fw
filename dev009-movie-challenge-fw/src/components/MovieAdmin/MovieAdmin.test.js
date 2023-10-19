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
    


    expect(wanderlustText).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(currentPageInput).toBeInTheDocument();
    expect(totalPagesInput).toBeInTheDocument();
  });
});

