import { Receta } from './receta';

export interface Coleccion {
  id: number;
  nombre: string;
  imagen: string;
  recetas: Receta[];
}
