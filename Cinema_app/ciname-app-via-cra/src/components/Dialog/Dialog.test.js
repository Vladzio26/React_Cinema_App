import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Dialog from './Dialog';

beforeEach(() => {
  // Створюємо контейнер для порталу
  const portalRoot = document.createElement('div');
  portalRoot.setAttribute('id', 'portal');
  document.body.appendChild(portalRoot);
});

afterEach(() => {
  cleanup(); // очищає DOM після кожного тесту
  const portal = document.getElementById('portal');
  if (portal) {
    portal.remove();
  }
});

describe('Dialog component', () => {
  it('does not render when open is false', () => {
    render(
      <Dialog open={false} title="Test Modal">
        <p>Test content</p>
      </Dialog>
    );
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('renders correctly when open is true', () => {
    render(
      <Dialog open={true} title="Test Modal">
        <p>Test content</p>
      </Dialog>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('calls onClose when Close button is clicked', () => {
    const handleClose = jest.fn();

    render(
      <Dialog open={true} title="Close Test" onClose={handleClose}>
        <p>Some content</p>
      </Dialog>
    );

    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
