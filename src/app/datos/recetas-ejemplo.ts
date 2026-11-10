import { Receta } from '../modelos/receta';

// RECETAS FICTICIAS COMPARTIDAS
export const RECETAS_EJEMPLO: Receta[] = [

  // RECETA 1
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

  // RECETA 2
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

  // RECETA 3
  {
    id: 3,
    nombre: 'Salmón a la plancha con verduras',
    imagen: 'assets/fotos/salmon.png',
    tiempo: 5,
    dificultad: 'Fácil',
    disponibles: 4,
    ingredientes: ['salmón', 'zanahoria', 'calabacín', 'aceite'],
    vegetariano: false,
    sinGluten: false,
    rapido: true,
    economico: true
  },

  // RECETA 4
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
  },

  // RECETA 5
  {
    id: 5,
    nombre: 'Gazpacho',
    imagen: 'assets/fotos/gazpacho.png',
    tiempo: 5,
    dificultad: 'Fácil',
    disponibles: 4,
    ingredientes: ['tomate', 'pepino', 'pimiento', 'aceite'],
    vegetariano: true,
    sinGluten: false,
    rapido: true,
    economico: true
  },

  // RECETA 6
  {
    id: 6,
    nombre: 'Salmorejo',
    imagen: 'assets/fotos/salmorejo.png',
    tiempo: 5,
    dificultad: 'Fácil',
    disponibles: 4,
    ingredientes: ['tomate', 'pan sin gluten', 'aceite', 'ajo'],
    vegetariano: true,
    sinGluten: true,
    rapido: true,
    economico: false
  }

];

