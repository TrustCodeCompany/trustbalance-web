import { Pet } from '../entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class AddPetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute(pet: Omit<Pet, 'id'>): Promise<Pet> {
    const newPet = await this.petRepository.addPet(pet);
    return newPet;
  }
}
