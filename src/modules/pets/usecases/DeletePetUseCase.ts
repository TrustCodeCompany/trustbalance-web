import { PetRepository } from '../repositories/PetRepository';

export class DeletePetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute(id: number): Promise<any> {
    return this.petRepository.deletePet(id);
  }
}
