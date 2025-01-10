// src/__tests__/Hello.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello from '../components/Hello';

test('renders the Hello component with the correct name', () => {
  render(<Hello name="Fernando" />);
  const helloElement = screen.getByText(/Hello, Fernando!/i);
  expect(helloElement).toBeInTheDocument();
});
