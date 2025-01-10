import { Pet } from '../entities/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class GetPetsUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute(): Promise<Pet[]> {
    return this.petRepository.getPets();
  }
}
