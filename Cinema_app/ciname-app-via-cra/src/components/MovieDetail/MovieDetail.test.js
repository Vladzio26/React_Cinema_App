import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetail from '../MovieDetail/MovieDetail';


jest.mock('../MovieTile/MovieTile', () => () => <div>MovieCard</div>);

describe('MovieDetail', () => {
  const mockMovie = {
    title: 'Inception',
    poster_path: 'https://example.com/inception.jpg',
    overview: 'A mind-bending thriller.',
    genres: ['Action', 'Sci-Fi'],
    id: 1
  };

  const mockRecomendations = [
    { title: 'Interstellar', poster_path: 'https://example.com/interstellar.jpg', genres: ['Sci-Fi'], id: 2 }
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockMovie)
      })
    );
  });

  test('renders movie details correctly', async () => {
    render(
      <MemoryRouter>
        <MovieDetail onGenreSelect={jest.fn()} recomendation={mockRecomendations} />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Inception')).toBeInTheDocument());
    expect(screen.getByText('A mind-bending thriller.')).toBeInTheDocument();
    expect(screen.getByAltText('Inception')).toHaveAttribute('src', 'https://example.com/inception.jpg');
    expect(screen.getByText('Recomendations')).toBeInTheDocument();
    expect(screen.getByText('MovieCard')).toBeInTheDocument();
  });

  test('calls onGenreSelect when a genre is selected', async () => {
    const onGenreSelect = jest.fn();
    render(
      <MemoryRouter>
        <MovieDetail onGenreSelect={onGenreSelect} recomendation={[]} />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Inception')).toBeInTheDocument());
    const genreButton = screen.getByLabelText('Action');
    fireEvent.click(genreButton);

    expect(onGenreSelect).toHaveBeenCalledWith('Action');
  });

  test('highlights the selected genre', async () => {
    render(
      <MemoryRouter>
        <MovieDetail onGenreSelect={jest.fn()} recomendation={[]} />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText('Inception')).toBeInTheDocument());
    const genreButton = screen.getByLabelText('Sci-Fi');
    fireEvent.click(genreButton);

    expect(genreButton).toBeChecked();
  });
});
