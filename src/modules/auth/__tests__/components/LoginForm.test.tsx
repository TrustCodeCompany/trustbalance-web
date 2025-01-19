import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../../pages/LoginPage';

describe('LoginForm Component', () => {
  it('debería renderizar el formulario correctamente', () => {
    render(<LoginForm />);

    expect(screen.getByLabelText(/correo:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña:/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /iniciar sesión/i }),
    ).toBeInTheDocument();
  });

  it('debería mostrar errores de validación cuando los campos están vacíos', async () => {
    render(<LoginForm />);

    const submitButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });
    fireEvent.click(submitButton);

    // Los mensajes de error del esquema Zod
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent('El correo es requerido');
    expect(alerts[1]).toHaveTextContent('La contraseña es requerida');
  });

  it('debería mostrar error cuando el email es inválido', async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText(/correo:/i);
    const passwordInput = screen.getByLabelText(/contraseña:/i);

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });

    const submitButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });
    fireEvent.click(submitButton);

    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(1);
    expect(alerts[0]).toHaveTextContent('El correo no es válido');
  });
});
