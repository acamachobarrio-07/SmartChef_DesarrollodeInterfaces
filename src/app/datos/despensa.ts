import { ProductoDespensa } from '../modelos/despensa';
import { INGREDIENTES } from './ingredientes';

// Mi despensa: ingredientes que el usuario tiene en casa
export const DESPENSA: ProductoDespensa[] = [
  { ingrediente: INGREDIENTES[38], cantidad: 60, caducidad: '12/12/2026' },    // queso fresco
  { ingrediente: INGREDIENTES[37], cantidad: 6, caducidad: '05/12/2026' },     // huevos
  { ingrediente: INGREDIENTES[0], cantidad: 200, caducidad: '22/11/2026' },    // espinacas
  { ingrediente: INGREDIENTES[1], cantidad: 3, caducidad: '25/11/2026' },      // tomates
  { ingrediente: INGREDIENTES[31], cantidad: 300, caducidad: '15/01/2027' },   // garbanzos
  { ingrediente: INGREDIENTES[39], cantidad: 750, caducidad: '30/06/2027' }    // aceite de oliva
];
