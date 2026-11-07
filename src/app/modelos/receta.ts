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
}
