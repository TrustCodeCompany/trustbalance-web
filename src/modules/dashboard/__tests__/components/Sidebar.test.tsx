import { render, screen } from '@testing-library/react';
import { Sidebar } from '../../components/Sidebar';

describe('Sidebar Component', () => {
  const mockToggleSidebar = jest.fn();

  it('debería renderizar correctamente cuando está abierto', () => {
    render(<Sidebar isSidebarOpen={true} toggleSidebar={mockToggleSidebar} />);
    const logo = screen.getByText('Empresa Logo');
    const menuItems = screen.getAllByRole('listitem');

    expect(logo).toBeInTheDocument();
    expect(menuItems).toHaveLength(3);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('debería renderizar correctamente cuando está cerrado', () => {
    render(<Sidebar isSidebarOpen={false} toggleSidebar={mockToggleSidebar} />);
    const sidebarContainer = screen.getByRole('navigation').parentElement;
    expect(sidebarContainer).toHaveClass('transform', '-translate-x-full');
  });

  it('debería mostrar la imagen de la empresa', () => {
    render(<Sidebar isSidebarOpen={true} toggleSidebar={mockToggleSidebar} />);
    const image = screen.getByAltText('Imagen Empresa');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('rounded-sm', 'w-full', 'h-24', 'object-cover');
  });
});
