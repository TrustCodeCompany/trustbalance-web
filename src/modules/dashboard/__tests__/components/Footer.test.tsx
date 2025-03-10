import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/Footer';

describe('Footer Component', () => {
  it('debería renderizar el texto del footer correctamente', () => {
    render(<Footer />);
    const footerText = screen.getByText(
      /Sistema creado por Trust Code Company/i,
    );
    expect(footerText).toBeInTheDocument();
  });
});
