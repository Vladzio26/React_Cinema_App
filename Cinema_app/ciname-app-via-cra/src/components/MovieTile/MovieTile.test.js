import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieTile from './MovieTile';

// Мокуємо Dialog
jest.mock('../Dialog/Dialog', () => ({ title, open, onClose, children }) => {
  return open ? (
    <div data-testid="dialog">
      <h2 data-testid="dialog-title">{title}</h2>
      <button onClick={onClose}>Close</button>
      <div>{children}</div>
    </div>
  ) : null;
});

describe('MovieTile component', () => {
  const mockMovie = {
    title: 'Test Movie',
    poster_path: 'https://example.com/poster.jpg',
    genres: ['Action', 'Adventure'],
    id: 123,
    release_date: '2023-01-01',
    onClick: jest.fn()
  };

  it('opens dialog when button is clicked', () => {
    render(
      <MemoryRouter>
        <MovieTile movie={mockMovie} />
      </MemoryRouter>
    );

    const openBtn = screen.getByRole('button', { name: '...' });
    fireEvent.click(openBtn);

    const dialog = screen.getByTestId('dialog');
    expect(dialog).toBeInTheDocument();

    // Тепер перевірка тексту в межах модалки
    expect(within(dialog).getByTestId('dialog-title')).toHaveTextContent('Test Movie');
    expect(within(dialog).getByText('I am a modal window')).toBeInTheDocument();
  });
});
