import { render, screen } from '@testing-library/react';
import App from './App';

test('renders submit button', () => {
  render(<App />);
  const submitButton = screen.getByText(/Apply/i);
  expect(submitButton).toBeInTheDocument();
});
