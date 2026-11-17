import { LineaCompra } from '../modelos/lista-compra';
import { INGREDIENTES } from './ingredientes';

// Lista de la compra del usuario
export const LISTA_COMPRA: LineaCompra[] = [
  { ingrediente: INGREDIENTES[2], cantidad: 60 },   // queso fresco
  { ingrediente: INGREDIENTES[0], cantidad: 6 }     // huevos
];
