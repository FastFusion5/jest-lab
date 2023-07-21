import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

test('check checkbox functionality', () => {
  render(<App />);
  userEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).toBeInTheDocument();
});

test('renders "Hello World"', () => {
  render(<App />);
  const helloWorldText = screen.getByText(/Hello World/i);
  expect(helloWorldText).toBeInTheDocument();
})