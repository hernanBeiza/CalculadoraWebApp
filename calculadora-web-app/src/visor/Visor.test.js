import { render, screen } from '@testing-library/react';
import Visor from './Visor';

test('renders learn react link', () => {
  render(<Visor />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
