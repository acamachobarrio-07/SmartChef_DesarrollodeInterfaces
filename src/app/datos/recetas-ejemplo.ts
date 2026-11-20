import { Receta } from '../modelos/receta';
import { INGREDIENTES } from './ingredientes';

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
    economico: true,

    // Detalle completo (receta modelo)
    descripcion: 'Una tortilla jugosa rellena de espinacas frescas y queso. Perfecta para una cena rápida y ligera.',
    raciones: 1,
    coste: 1.06,
    calorias: 269,
    ingredientesReceta: [
      { ingrediente: INGREDIENTES[37], cantidad: 2 },   // huevos
      { ingrediente: INGREDIENTES[0], cantidad: 50 },   // espinacas
      { ingrediente: INGREDIENTES[38], cantidad: 30 },  // queso fresco
      { ingrediente: INGREDIENTES[39], cantidad: 10 },  // aceite de oliva
      { ingrediente: INGREDIENTES[41], cantidad: 2 }    // sal
    ],
    pasos: [
      'Lava las espinacas, sécalas bien y trocéalas.',
      'Pon las espinacas en un cuenco con el queso fresco desmenuzado y una pizca de sal.',
      'Bate los dos huevos en otro recipiente con el resto de la sal.',
      'Calienta el aceite en una sartén a fuego bajo. Vierte los huevos batidos y deja que se cuajen un poco por la base.',
      'Reparte el relleno de espinacas y queso sobre una mitad de la tortilla.',
      'Dobla la tortilla por la mitad cubriendo el relleno, cocina 1 minuto más y sírvela recién hecha.'
    ]
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
