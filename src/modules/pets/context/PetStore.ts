import { create } from 'zustand'; // Importación correcta de `create`
import { Pet } from '../entities/Pet';

// Definir la estructura del estado
interface PetState {
  pets: Pet[]; // Lista de mascotas
  selectedPet: Pet | null; // Mascota seleccionada
  setPets: (pets: Pet[]) => void; // Método para establecer la lista de mascotas
  selectPet: (pet: Pet) => void; // Método para seleccionar una mascota
  clearSelectedPet: () => void; // Método para limpiar la mascota seleccionada
}

// Crear el estado global con Zustand
export const usePetStore = create<PetState>((set) => ({
  pets: [], // Estado inicial para la lista de mascotas
  selectedPet: null, // Estado inicial para la mascota seleccionada
  setPets: (pets) => set(() => ({ pets })), // Actualiza la lista de mascotas
  selectPet: (pet) => set(() => ({ selectedPet: pet })), // Establece una mascota seleccionada
  clearSelectedPet: () => set(() => ({ selectedPet: null })), // Limpia la mascota seleccionada
}));
