import { Receta } from '../modelos/receta';

export const RECETAS_RECOMENDADAS: Receta[] = [
  {
    id: 1,
    nombre: 'Tortilla de espinacas y queso',
    imagen: 'assets/fotos/tortilla.png',
    tiempo: 10,
    dificultad: 'Fácil',
    disponibles: 4,
    ingredientes: ['huevo', 'espinacas', 'queso', 'aceite'],
    vegetariano: true,
    sinGluten: false,
    rapido: true,
    economico: true
  },
  {
    id: 2,
    nombre: 'Ensalada de garbanzos y aguacate',
    imagen: 'assets/fotos/ensalada-garbanzos.png',
    tiempo: 5,
    dificultad: 'Fácil',
    disponibles: 4,
    ingredientes: ['garbanzos', 'aguacate', 'tomate', 'lechuga'],
    vegetariano: true,
    sinGluten: false,
    rapido: true,
    economico: true
  },
  {
    id: 4,
    nombre: 'Salteado de garbanzos con espinacas y tomate',
    imagen: 'assets/fotos/salteado-garbanzos.png',
    tiempo: 5,
    dificultad: 'Fácil',
    disponibles: 4,
    ingredientes: ['garbanzos', 'espinacas', 'tomate', 'cebolla'],
    vegetariano: true,
    sinGluten: false,
    rapido: true,
    economico: true
  }
];
