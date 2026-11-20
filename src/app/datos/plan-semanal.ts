import { DiaPlan } from '../modelos/dia-plan';
import { RECETAS_EJEMPLO } from './recetas-ejemplo';

// Semana de ejemplo para la maqueta
export const PLAN_SEMANAL: DiaPlan[] = [
  { nombre: 'Lunes 16', desayuno: RECETAS_EJEMPLO[0], comida: RECETAS_EJEMPLO[1], cena: RECETAS_EJEMPLO[2] },
  { nombre: 'Martes 17', desayuno: null, comida: RECETAS_EJEMPLO[3], cena: RECETAS_EJEMPLO[0] },
  { nombre: 'Miércoles 18', desayuno: null, comida: RECETAS_EJEMPLO[4], cena: null },
  { nombre: 'Jueves 19', desayuno: null, comida: null, cena: null },
  { nombre: 'Viernes 20', desayuno: null, comida: null, cena: null },
  { nombre: 'Sábado 21', desayuno: null, comida: null, cena: null },
  { nombre: 'Domingo 22', desayuno: null, comida: null, cena: null }
];
