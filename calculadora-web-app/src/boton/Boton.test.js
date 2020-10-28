import { render, screen } from '@testing-library/react';
import Boton from './Boton';

test('renders learn react link', () => {
  render(<Boton />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
