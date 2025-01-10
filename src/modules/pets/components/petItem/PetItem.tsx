import React from 'react';
import { Pet } from '../../entities/Pet';
import './petItem.css';

interface PetItemProps {
  pet: Pet;
  onDelete: (id: number) => void;
}

export const PetItem: React.FC<PetItemProps> = ({ pet, onDelete }) => {
  const handleDelete = () => {
    onDelete(pet.id);
  };

  return (
    <div className="card">
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age}</p>
      <p>Owner: {pet.ownerName}</p>
      <button className="delete-btn" onClick={handleDelete}>
        Eliminar
      </button>
    </div>
  );
};
