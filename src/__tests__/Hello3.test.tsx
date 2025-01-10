// src/__tests__/Hello.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello3 from '../components/Hello3';

test('renders the Hello component with the correct name', () => {
  render(<Hello3 name="Fernando" />);
  const helloElement = screen.getByText(/Hello, Fernando!/i);
  expect(helloElement).toBeInTheDocument();
});
