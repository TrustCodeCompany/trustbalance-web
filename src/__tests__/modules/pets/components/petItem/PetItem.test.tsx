import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { PetItem } from '../../../../../modules/pets/components/petItem/PetItem';
import { Pet } from '../../../../../modules/pets/entities/Pet';

describe('PetItem Component', () => {
  const mockPet: Pet = {
    id: 1,
    name: 'Max',
    type: 'Dog',
    age: 5,
    ownerName: 'John Doe',
  };

  const mockOnDelete = jest.fn();

  beforeEach(() => {
    // Montamos el componente antes de cada test
    render(<PetItem pet={mockPet} onDelete={mockOnDelete} />);
  });

  it('debería mostrar la información de la mascota correctamente', () => {
    // Verificamos que todos los datos de la mascota se muestren
    expect(screen.getByText(mockPet.name)).toBeInTheDocument();
    expect(screen.getByText(`Type: ${mockPet.type}`)).toBeInTheDocument();
    expect(screen.getByText(`Age: ${mockPet.age}`)).toBeInTheDocument();
    expect(screen.getByText(`Owner: ${mockPet.ownerName}`)).toBeInTheDocument();
  });

  it('debería llamar a onDelete con el ID correcto cuando se hace click en eliminar', () => {
    // Buscamos el botón de eliminar y simulamos un click
    const deleteButton = screen.getByText('Eliminar');
    fireEvent.click(deleteButton);

    // Verificamos que la función onDelete fue llamada con el ID correcto
    expect(mockOnDelete).toHaveBeenCalledWith(mockPet.id);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
