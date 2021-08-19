import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders link to command and La Carte', () => {
  
  render(<App />);
  expect(screen.getByText(/La Carte/i)).toBeInTheDocument();

});

