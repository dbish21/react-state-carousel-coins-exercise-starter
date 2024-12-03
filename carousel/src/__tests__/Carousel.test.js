import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from '../../../react-state-carousel-coins/carousel/src/Carousel';

const photos = [
  { src: "test1.jpg", caption: "Test 1" },
  { src: "test2.jpg", caption: "Test 2" },
  { src: "test3.jpg", caption: "Test 3" }
];

// Smoke test
test('Carousel renders without crashing', () => {
  render(<Carousel photos={photos} title="Test Carousel" />);
});

// Snapshot test
test('Carousel matches snapshot', () => {
  const { asFragment } = render(
    <Carousel photos={photos} title="Test Carousel" />
  );
  expect(asFragment()).toMatchSnapshot();
});

// Test for left arrow functionality
test('left arrow moves to previous image', () => {
  const { getByTestId } = render(
    <Carousel photos={photos} title="Test Carousel" />
  );
  
  // Move to second image
  const rightArrow = getByTestId('right-arrow');
  fireEvent.click(rightArrow);

  // Click left arrow to go back
  const leftArrow = getByTestId('left-arrow');
  fireEvent.click(leftArrow);
  
  expect(getByTestId('curr-slide')).toHaveTextContent('1');
});

// Test for hiding arrows
test('hides arrows appropriately', () => {
  const { getByTestId, queryByTestId } = render(
    <Carousel photos={photos} title="Test Carousel" />
  );
  
  // On first image, left arrow should be hidden
  expect(queryByTestId('left-arrow')).toBeNull();
  
  // Move to last image
  const rightArrow = getByTestId('right-arrow');
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  
  // On last image, right arrow should be hidden
  expect(queryByTestId('right-arrow')).toBeNull();
}); 