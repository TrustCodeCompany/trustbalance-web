import { render, screen } from '@testing-library/react';
import { DashboardPage } from '../../pages/DashboardPage';

describe('DashboardPage Component', () => {
  it('debería renderizar el título correctamente', () => {
    render(<DashboardPage />);

    // Verificamos que el texto del dashboard se muestre correctamente
    const dashboardText = screen.getByText('Dashboard Content');
    expect(dashboardText).toBeInTheDocument();

    // Verificamos que tenga las clases de Tailwind correctas
    expect(dashboardText).toHaveClass('text-2xl', 'font-bold');
  });
});
