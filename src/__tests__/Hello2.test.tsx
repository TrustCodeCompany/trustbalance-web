// src/__tests__/Hello.test.tsx
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hello2 from '../components/Hello2';

test('renders the Hello component with the correct name', () => {
  render(<Hello2 name="Fernando" />);
  const helloElement = screen.getByText(/Hello, Fernando!/i);
  expect(helloElement).toBeInTheDocument();
});
