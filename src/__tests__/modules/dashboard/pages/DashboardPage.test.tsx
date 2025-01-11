import React from 'react';
import { render, screen } from '@testing-library/react';
import { DashboardPage } from '../../../../modules/dashboard/pages/DashboardPage';

describe('DashboardPage Component', () => {
  it('debería renderizar el título correctamente', () => {
    render(<DashboardPage />);

    // Verificamos que el texto del dashboard se muestre correctamente
    const dashboardText = screen.getByText('DashboardPage');
    expect(dashboardText).toBeInTheDocument();

    // Verificamos que tenga las clases de Tailwind correctas
    expect(dashboardText).toHaveClass('text-3xl', 'font-bold', 'underline');
  });
});
