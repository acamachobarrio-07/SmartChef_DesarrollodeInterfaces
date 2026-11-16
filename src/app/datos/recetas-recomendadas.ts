import { Receta } from '../modelos/receta';
import { RECETAS_EJEMPLO } from './recetas-ejemplo';

// Recetas que se muestran en el inicio.
// Se toman de RECETAS_EJEMPLO para no repetir los datos en dos archivos.
export const RECETAS_RECOMENDADAS: Receta[] = RECETAS_EJEMPLO.filter(
  receta => [1, 2, 4].includes(receta.id)
);
