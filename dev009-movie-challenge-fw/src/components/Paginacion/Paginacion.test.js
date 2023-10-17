import React from 'react';
import '@testing-library/jest-dom/extend-expect'; 
import { render, screen, fireEvent } from '@testing-library/react';
import Paginacion from './Paginacion';

describe('Paginacion', () => {
 
  it('should handle page change', () => {
    const currentPage = 2;
    const totalPages = 5;
    const onPageChange = jest.fn();

    render(
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    // Simulate clicking the "Previous" button
    const previousButton = screen.getByText('Previous');
    fireEvent.click(previousButton);
    expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);

    // Simulate clicking a page number button
    const pageNumberButton = screen.getByText('3');
    fireEvent.click(pageNumberButton);
    expect(onPageChange).toHaveBeenCalledWith(3);

    // Simulate clicking the "Next" button
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
  });

  it('should handle disabled buttons correctly', () => {
    const currentPage = 1;
    const totalPages = 1;
    const onPageChange = jest.fn();

    render(
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    );

    // Verify that both "Anterior" and "Siguiente" buttons are disabled
    const previousButton = screen.getByText('Previous');
    const nextButton = screen.getByText('Next');
    expect(previousButton).toHaveAttribute('disabled');
    expect(nextButton).toHaveAttribute('disabled');

    // Verify that clicking disabled buttons doesn't call onPageChange
    fireEvent.click(previousButton);
    expect(onPageChange).not.toHaveBeenCalled();

    fireEvent.click(nextButton);
    expect(onPageChange).not.toHaveBeenCalled();
  });
});
