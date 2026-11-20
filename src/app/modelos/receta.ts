import { Ingrediente } from './ingrediente';

// Ingrediente de una receta con su cantidad (en la unidad del ingrediente)
export interface IngredienteReceta {
  ingrediente: Ingrediente;
  cantidad: number;
}

export interface Receta {
  id: number;
  nombre: string;
  imagen: string;
  tiempo: number;
  dificultad: 'Fácil' | 'Media' | 'Difícil';
  disponibles: number;
  ingredientes: string[];
  vegetariano: boolean;
  sinGluten: boolean;
  rapido: boolean;
  economico: boolean;

  // Datos del detalle (opcionales: no todas las recetas los tienen todavía)
  descripcion?: string;
  raciones?: number;
  ingredientesReceta?: IngredienteReceta[];
  pasos?: string[];
  coste?: number;
  calorias?: number;
}
