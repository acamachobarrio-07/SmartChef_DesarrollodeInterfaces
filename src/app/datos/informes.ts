import { RecetaPopular } from '../modelos/informe';
import { RECETAS_EJEMPLO } from './recetas-ejemplo';

export const PERIODO_INFORME = '1 - 30 de noviembre';

export const RECETAS_MAS_COCINADAS: RecetaPopular[] = [
  { receta: RECETAS_EJEMPLO[0], total: 48 },   // tortilla
  { receta: RECETAS_EJEMPLO[3], total: 35 },   // salteado de garbanzos
  { receta: RECETAS_EJEMPLO[1], total: 27 },   // ensalada de garbanzos
  { receta: RECETAS_EJEMPLO[4], total: 19 }    // gazpacho
];

export const RECETAS_MAS_GUARDADAS: RecetaPopular[] = [
  { receta: RECETAS_EJEMPLO[2], total: 62 },   // salmón
  { receta: RECETAS_EJEMPLO[0], total: 51 },   // tortilla
  { receta: RECETAS_EJEMPLO[5], total: 33 },   // salmorejo
  { receta: RECETAS_EJEMPLO[1], total: 20 }    // ensalada de garbanzos
];
