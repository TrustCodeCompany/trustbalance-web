import { Pet } from '../entities/Pet';

export class ApiPetAdapter {
  static toEntity(apiData: any): Pet {
    return {
      id: apiData.id,
      name: apiData.name,
      type: apiData.type,
      age: apiData.age,
      ownerName: apiData.owner_name,
    };
  }
}
