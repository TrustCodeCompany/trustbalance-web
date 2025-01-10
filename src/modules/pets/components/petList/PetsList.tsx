import { useEffect, useState } from 'react';
import { GetPetsUseCase } from '../../usecases/GetPetsUseCase';
import { DeletePetUseCase } from '../../usecases/DeletePetUseCase';
import { ApiPetRepository } from '../../infrastructure/ApiPetRepository';
import { Pet } from '../../entities/Pet';
import { PetItem } from '../petItem/PetItem';
import './petList.css';
import { toast } from 'react-toastify';

const PetsList = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [deletedPet, setDeletedPet] = useState<any>(null); // Guardar la respuesta del backend

  useEffect(() => {
    const fetchPets = async () => {
      const repository = new ApiPetRepository();
      const useCase = new GetPetsUseCase(repository);
      const petsData = await useCase.execute();
      setPets(petsData);
    };

    fetchPets();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const repository = new ApiPetRepository();
      const deleteUseCase = new DeletePetUseCase(repository);
      const response = await deleteUseCase.execute(id);

      console.log('Respuesta recibida del backend:', response);

      // Validar y manejar la respuesta
      if (Array.isArray(response) && response[0]?.status === 'deleted') {
        const deletedPetData = response[1]; // Información del pet eliminado
        toast.success(
          `Mascota eliminada: ${deletedPetData.name}, Tipo: ${deletedPetData.type}, Raza: ${deletedPetData.breed}`,
        );

        // Guardar temporalmente la información del pet eliminado
        setDeletedPet(deletedPetData);

        // Actualizar la lista de mascotas
        setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
      } else {
        toast.warn(
          'La mascota fue eliminada, pero no se recibió información adicional.',
        );
      }
    } catch (error) {
      toast.error('Error al eliminar la mascota.');
      console.error('Error en handleDelete:', error);
    }
  };

  return (
    <div className="list-card">
      {pets.map((pet) => (
        <PetItem key={pet.id} pet={pet} onDelete={handleDelete} />
      ))}

      {/* Mostrar el modal o alerta si hay una mascota eliminada */}
      {deletedPet && (
        <div className="modal">
          <div className="modal-content">
            <h2>Mascota eliminada</h2>
            <p>Nombre: {deletedPet[1].name}</p>
            <p>Tipo: {deletedPet[1].type}</p>
            <button onClick={() => setDeletedPet(null)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetsList;
