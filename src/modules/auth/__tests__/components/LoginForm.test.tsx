import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { LoginForm } from '../../components/LoginForm';
import '@testing-library/jest-dom';

// Mock del useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

// Mock de fetch para simular las llamadas al backend
const mockFetch = jest.fn();
global.fetch = mockFetch;

const renderLoginForm = () => {
  return render(
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>,
  );
};

describe('LoginForm Component', () => {
  beforeEach(() => {
    // Limpiar todos los mocks antes de cada prueba
    jest.clearAllMocks();
    mockNavigate.mockReset();
    mockFetch.mockReset();
  });

  it('debería renderizar el formulario correctamente', () => {
    renderLoginForm();

    expect(screen.getByLabelText(/correo:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña:/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /iniciar sesión/i }),
    ).toBeInTheDocument();
  });

  it('debería mostrar errores de validación cuando los campos están vacíos', async () => {
    renderLoginForm();

    const submitButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });
    fireEvent.click(submitButton);

    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
    expect(alerts[0]).toHaveTextContent('El correo es requerido');
    expect(alerts[1]).toHaveTextContent('La contraseña es requerida');
  });

  it('debería mostrar error cuando el email es inválido', async () => {
    renderLoginForm();

    const emailInput = screen.getByLabelText(/correo:/i);
    const submitButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });

    fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });
    fireEvent.click(submitButton);

    const alerts = await screen.findAllByRole('alert');
    const emailError = alerts.find((alert) =>
      alert.textContent?.includes('El correo no es válido'),
    );
    expect(emailError).toBeTruthy();
    expect(emailError).toHaveTextContent('El correo no es válido');
  });

  it('debería llamar a la API y navegar al dashboard cuando el login es exitoso', async () => {
    // Mock de una respuesta exitosa
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ token: 'fake-token' }),
    });

    renderLoginForm();

    const emailInput = screen.getByLabelText(/correo:/i);
    const passwordInput = screen.getByLabelText(/contraseña:/i);
    const submitButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });

    // Llenar el formulario
    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Enviar el formulario
    fireEvent.click(submitButton);

    // Verificar que se llamó a fetch con los datos correctos
    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        'https://tb-api-jl9j.onrender.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'test@example.com',
            password: 'password123',
          }),
        },
      );
    });

    // Verificar que se navegó al dashboard
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('debería manejar errores de la API correctamente', async () => {
    // Mock de una respuesta con error
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 401,
    });

    renderLoginForm();

    const emailInput = screen.getByLabelText(/correo:/i);
    const passwordInput = screen.getByLabelText(/contraseña:/i);
    const submitButton = screen.getByRole('button', {
      name: /iniciar sesión/i,
    });

    // Llenar el formulario
    fireEvent.change(emailInput, {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Enviar el formulario
    fireEvent.click(submitButton);

    // Verificar que se muestra el mensaje de error
    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Error al iniciar sesión. Por favor, intente nuevamente.',
      );
    });

    // Verificar que no se navegó al dashboard
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
