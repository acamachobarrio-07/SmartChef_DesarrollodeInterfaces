import { Coleccion } from '../modelos/coleccion';
import { RECETAS_EJEMPLO } from './recetas-ejemplo';

// Colecciones del usuario. "Favoritos" existe siempre y no se puede borrar.
export const COLECCIONES: Coleccion[] = [
  { id: 1, nombre: 'Favoritos', imagen: 'assets/fotos/tortilla.png', recetas: [RECETAS_EJEMPLO[0]] },
  { id: 2, nombre: 'Tortillas', imagen: 'assets/fotos/tortilla.png', recetas: [RECETAS_EJEMPLO[0]] },
  { id: 3, nombre: 'Pasta', imagen: 'assets/fotos/pasta.png', recetas: [] },
  { id: 4, nombre: 'Carne', imagen: 'assets/fotos/carne.png', recetas: [] },
  { id: 5, nombre: 'Pescado', imagen: 'assets/fotos/salmon.png', recetas: [RECETAS_EJEMPLO[2]] },
  { id: 6, nombre: 'Rápidas', imagen: 'assets/fotos/salteado-garbanzos.png', recetas: [RECETAS_EJEMPLO[1], RECETAS_EJEMPLO[3]] }
];
