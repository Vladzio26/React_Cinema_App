import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CounterComponent from './CounterComponent';

describe('CounterComponent', () => {
  it('renders initial value provided in props', () => {
    const setCount = jest.fn();
    render(<CounterComponent count={0} text={{ text1: 'Increment', text2: 'Decrement' }} setCount={setCount} />);
    expect(screen.getByText('Count is 0')).toBeInTheDocument();
    expect(screen.getByText('Increment')).toBeInTheDocument();
    expect(screen.getByText('Decrement')).toBeInTheDocument();
  });

  it('clicking on "Increment" button increases count', () => {
    let count = 0;
    const setCount = jest.fn((callback) => {
      count = callback(count);
    });
    
    render(<CounterComponent count={count} text={{ text1: 'Increment', text2: 'Decrement' }} setCount={setCount} />);
    const button = screen.getByText('Increment');
    
    fireEvent.click(button);
    
    expect(setCount).toHaveBeenCalled();
    expect(count).toBe(1);
  });

  it('clicking on "Decrement" button decreases count', () => {
    let count = 5;
    const setCount = jest.fn((callback) => {
      count = callback(count);
    });
    
    render(<CounterComponent count={count} text={{ text1: 'Increment', text2: 'Decrement' }} setCount={setCount} />);
    const button = screen.getByText('Decrement');
    
    fireEvent.click(button);
    
    expect(setCount).toHaveBeenCalled();
    expect(count).toBe(4);
  });
});
