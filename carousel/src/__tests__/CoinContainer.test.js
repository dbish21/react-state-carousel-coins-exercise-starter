import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CoinContainer from '../../../react-state-carousel-coins/carousel/src/CoinContainer';

test('CoinContainer renders without crashing', () => {
  render(<CoinContainer />);
});

test('coin starts hidden but appears after flip', () => {
  const { container, getByText } = render(<CoinContainer />);
  
  // Initially, no coin image should be present
  expect(container.querySelector('.Coin-image')).not.toBeInTheDocument();
  
  // Click the flip button
  fireEvent.click(getByText('Flip Me!'));
  
  // Now a coin image should be present
  expect(container.querySelector('.Coin-image')).toBeInTheDocument();
});

test('counter updates properly', () => {
  const { getByText } = render(<CoinContainer />);
  
  // Initial state
  expect(getByText('Out of 0 flips, there have been 0 heads and 0 tails.')).toBeInTheDocument();
  
  // Click the flip button
  fireEvent.click(getByText('Flip Me!'));
  
  // Total flips should now be 1
  expect(getByText(/Out of 1 flips/)).toBeInTheDocument();
}); 