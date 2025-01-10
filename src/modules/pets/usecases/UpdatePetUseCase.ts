import { Pet } from '../entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class UpdatePetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute(pet: Pet): Promise<void> {
    return this.petRepository.updatePet(pet);
  }
}
