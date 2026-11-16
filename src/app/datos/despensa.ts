import { ProductoDespensa } from '../modelos/despensa';
import { INGREDIENTES } from './ingredientes';

// Devuelve la fecha de hoy sumándole los días indicados.
// Así la maqueta siempre tiene fechas actuales, aunque pasen los días.
function fechaDentroDe(dias: number): Date {
  const fecha = new Date();
  fecha.setDate(fecha.getDate() + dias);
  return fecha;
}

// Ingredientes que el usuario tiene en casa
export const DESPENSA: ProductoDespensa[] = [
  { ingrediente: INGREDIENTES[0], cantidad: 6, caducidad: fechaDentroDe(8) },     // huevo
  { ingrediente: INGREDIENTES[1], cantidad: 200, caducidad: fechaDentroDe(1) },   // espinacas
  { ingrediente: INGREDIENTES[2], cantidad: 250, caducidad: fechaDentroDe(5) },   // queso fresco
  { ingrediente: INGREDIENTES[3], cantidad: 750, caducidad: fechaDentroDe(200) }, // aceite
  { ingrediente: INGREDIENTES[4], cantidad: 400, caducidad: fechaDentroDe(60) },  // garbanzos
  { ingrediente: INGREDIENTES[5], cantidad: 1, caducidad: fechaDentroDe(-1) },    // aguacate (caducado)
  { ingrediente: INGREDIENTES[6], cantidad: 4, caducidad: fechaDentroDe(2) },     // tomate
  { ingrediente: INGREDIENTES[7], cantidad: 1, caducidad: fechaDentroDe(0) },     // lechuga (caduca hoy)
  { ingrediente: INGREDIENTES[11], cantidad: 3, caducidad: fechaDentroDe(20) }    // cebolla
];
