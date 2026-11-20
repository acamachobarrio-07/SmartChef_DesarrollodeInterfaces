import { Receta } from './receta';

// Un día del plan semanal (como RegistroComida en el backend: DESAYUNO, COMIDA y CENA)
export interface DiaPlan {
  nombre: string;
  desayuno: Receta | null;
  comida: Receta | null;
  cena: Receta | null;
}
