// import { render, screen, fireEvent } from '@testing-library/react';
// import { BrowserRouter } from 'react-router';
// import { LoginPage } from '../../pages/LoginPage';

// const renderWithRouter = (component: React.ReactElement) => {
//   return render(<BrowserRouter>{component}</BrowserRouter>);
// };

// // it('debería renderizar el formulario correctamente', () => {
// //   renderWithRouter(<LoginPage />);

// //   expect(screen.getByLabelText(/correo:/i)).toBeInTheDocument();
// //   expect(screen.getByLabelText(/contraseña:/i)).toBeInTheDocument();
// //   expect(
// //     screen.getByRole('button', { name: /iniciar sesión/i }),
// //   ).toBeInTheDocument();
// // });

// // it('debería mostrar errores de validación cuando los campos están vacíos', async () => {
// //   renderWithRouter(<LoginPage />);

// //   const submitButton = screen.getByRole('button', {
// //     name: /iniciar sesión/i,
// //   });
// //   fireEvent.click(submitButton);

// //   // Los mensajes de error del esquema Zod
// //   const alerts = await screen.findAllByRole('alert');
// //   expect(alerts).toHaveLength(2);
// //   expect(alerts[0]).toHaveTextContent('El correo es requerido');
// //   expect(alerts[1]).toHaveTextContent('La contraseña es requerida');
// // });

// // it('debería mostrar error cuando el email es inválido', async () => {
// //   renderWithRouter(<LoginPage />);

// //   const emailInput = screen.getByLabelText(/correo:/i);
// //   const submitButton = screen.getByRole('button', {
// //     name: /iniciar sesión/i,
// //   });

// //   fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });
// //   fireEvent.click(submitButton);

// //   const alerts = await screen.findAllByRole('alert');
// //   const emailError = alerts.find((alert) =>
// //     alert.textContent?.includes('El correo no es válido'),
// //   );
// //   expect(emailError).toBeTruthy();
// //   expect(emailError).toHaveTextContent('El correo no es válido');
// // });
