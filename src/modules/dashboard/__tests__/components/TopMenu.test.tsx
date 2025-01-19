import { render, screen, fireEvent } from '@testing-library/react';
import { TopMenu } from '../../components/TopMenu';

describe('TopMenu Component', () => {
  const mockToggleSidebar = jest.fn();

  it('debería renderizar correctamente', () => {
    render(<TopMenu toggleSidebar={mockToggleSidebar} />);
    const menuButton = screen.getByRole('button');
    expect(menuButton).toBeInTheDocument();
  });

  it('debería llamar a toggleSidebar cuando se hace clic en el botón', () => {
    render(<TopMenu toggleSidebar={mockToggleSidebar} />);
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    expect(mockToggleSidebar).toHaveBeenCalled();
  });
});
