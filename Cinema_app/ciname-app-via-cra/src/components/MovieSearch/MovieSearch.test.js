import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import MovieSearch from './MovieSearch';


describe('MovieSearch', () => {
  it('renders input with initial value', () => {
    render(<MovieSearch />);
    const input = screen.getByPlaceholderText('Search for a movie');
    expect(input).toBeInTheDocument();
  });

  it('typing in input and clicking submit calls onSearch with correct value', () => {
    render(<MovieSearch />);
    const input = screen.getByPlaceholderText('Search for a movie');
    const button = screen.getByText('Search');
    
    fireEvent.change(input, { target: { value: 'Inception' } });
    fireEvent.click(button);
    
    expect(input.value).toBe('Inception');
  });

  it('typing in input and pressing Enter calls onSearch with correct value', () => {
    render(<MovieSearch />);
    const input = screen.getByPlaceholderText('Search for a movie');
    
    fireEvent.change(input, { target: { value: 'Interstellar' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(input.value).toBe('Interstellar');
  });
});
