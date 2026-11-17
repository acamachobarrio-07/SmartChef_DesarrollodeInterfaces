export interface Ingrediente {
  id: number;
  nombre: string;
  unidad: 'GRAMOS' | 'MILILITROS' | 'UNIDADES';
  calorias: number;
  precio: number;
  vegetariano: boolean;
  sinGluten: boolean;
  imagen?: string;
  categoria?: string;
}
