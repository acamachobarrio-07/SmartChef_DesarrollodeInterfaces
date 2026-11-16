export interface Ingrediente {
  id: number;
  nombre: string;
  unidad: 'GRAMOS' | 'MILILITROS' | 'UNIDADES';
  calorias: number;     // por 100 g, por 100 ml o por unidad
  precio: number;       // en euros
  vegetariano: boolean;
  sinGluten: boolean;
}
