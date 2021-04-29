import { render, screen } from '@testing-library/react';
import BookPage from '.';

test('renders learn react link', () => {
  const data = {
    type: 'bookPage',
    image: './some-image.jpg',
    caption: 'Something interesting',
    text: 'Hey yo',
  };
  render(<BookPage { ...data } />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
