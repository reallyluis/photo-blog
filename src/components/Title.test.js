import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders Photo Blog title', () => {
  render(<Title />);
  const headerElement = screen.getByText(/Photo Blog/i);
  expect(headerElement).toBeInTheDocument();
});
