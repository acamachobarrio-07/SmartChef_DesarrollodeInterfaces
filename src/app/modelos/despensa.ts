import { Ingrediente } from './ingrediente';

export interface ProductoDespensa {
  ingrediente: Ingrediente;
  cantidad: number;
  caducidad: string;    // formato 'AAAA-MM-DD', igual que lo enviará el backend
}
