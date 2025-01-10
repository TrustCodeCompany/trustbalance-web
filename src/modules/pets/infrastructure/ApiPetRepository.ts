import { PetRepository } from '../repositories/PetRepository';
import { Pet } from '../entities/Pet';
import { ApiPetAdapter } from '../adapters/ApiPetAdapter';

export class ApiPetRepository implements PetRepository {
  private apiUrl = 'https://apimocha.com/airplane/pets';

  async addPet(pet: Omit<Pet, 'id'>): Promise<Pet> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pet),
    });
    const data = await response.json();
    return ApiPetAdapter.toEntity(data);
  }

  async getPets(): Promise<Pet[]> {
    const response = await fetch(this.apiUrl);
    const data = await response.json();
    return data.map(ApiPetAdapter.toEntity);
  }

  async updatePet(pet: Pet): Promise<void> {
    await fetch(`${this.apiUrl}/${pet.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pet),
    });
  }

  async deletePet(id: number): Promise<any> {
    const response = await fetch(`${this.apiUrl}/${id}`, { method: 'DELETE' });
    const text = await response.text(); // Leer como texto para manejar cualquier caso extraño
    console.log('Respuesta recibida como texto:', text);

    try {
      const data = JSON.parse(text); // Intentar convertir el texto a JSON
      console.log('Respuesta convertida a JSON:', data);

      // Validar que sea un array y que tenga los objetos necesarios
      if (Array.isArray(data) && data[0]?.status === 'deleted' && data[1]) {
        return data;
      } else {
        throw new Error('Formato inesperado en la respuesta del servidor.');
      }
    } catch (error) {
      console.error('Error procesando la respuesta:', error, text);
      throw new Error('La respuesta de la API no es válida.');
    }
  }
}
