import { Ingrediente } from './ingrediente';

export interface ProductoDespensa {
  ingrediente: Ingrediente;
  cantidad: number;
  caducidad: Date;
}
