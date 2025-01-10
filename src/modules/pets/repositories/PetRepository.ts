import { Pet } from '../entities/Pet';

export interface PetRepository {
  addPet(pet: Omit<Pet, 'id'>): Promise<Pet>;
  getPets(): Promise<Pet[]>;
  updatePet(pet: Pet): Promise<void>;
  deletePet(id: number): Promise<void>;
}
