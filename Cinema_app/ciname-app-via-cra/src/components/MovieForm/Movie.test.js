import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MovieForm from './MovieForm';

// Mock для fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ id: 1, title: 'Mock Movie' }),
  })
);

afterEach(() => {
  jest.clearAllMocks();
});

describe('MovieForm component', () => {
  it('renders all input fields and buttons', () => {
    render(<MovieForm />);

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Image/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Genres/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Trailer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Release Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Duration/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Update/i })).toBeInTheDocument();
  });

  it('allows input and calls fetch on submit', async () => {
    render(<MovieForm />);

    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: 'Test Movie' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'Test description' } });
    fireEvent.change(screen.getByLabelText(/Image/i), { target: { value: 'http://image.jpg' } });
    fireEvent.change(screen.getByLabelText(/^Genres$/i), { target: { value: 'Action,Comedy' } });
    fireEvent.change(screen.getByLabelText(/Rating/i), { target: { value: '8' } });
    fireEvent.change(screen.getByLabelText(/Trailer/i), { target: { value: 'http://trailer.com' } });
    fireEvent.change(screen.getByLabelText(/Release Date/i), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText(/Duration/i), { target: { value: '120' } });

    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:4000/movies',
        expect.objectContaining({
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: 'Test Movie',
            overview: 'Test description',
            poster_path: 'http://image.jpg',
            genres: ['Action', 'Comedy'],
            vote_count: 8,
            tagline: 'http://trailer.com',
            release_date: '2023-01-01',
            runtime: 120,
          }),
        })
      );
    });
  });
});
