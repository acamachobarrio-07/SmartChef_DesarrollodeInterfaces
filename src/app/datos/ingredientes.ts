import { Ingrediente } from '../modelos/ingrediente';

export const INGREDIENTES: Ingrediente[] = [

  // VERDURAS

  {
    id: 2,
    nombre: 'Espinacas',
    unidad: 'GRAMOS',
    calorias: 23,
    precio: 0.40,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/espinacas.png',
    categoria: 'Verduras'
  },
  {
    id: 7,
    nombre: 'Tomates',
    unidad: 'UNIDADES',
    calorias: 22,
    precio: 0.30,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/tomates.png',
    categoria: 'Verduras'
  },
  {
    id: 8,
    nombre: 'Lechuga',
    unidad: 'UNIDADES',
    calorias: 80,
    precio: 0.80,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/lechuga.png',
    categoria: 'Verduras'
  },
  {
    id: 10,
    nombre: 'Zanahoria',
    unidad: 'UNIDADES',
    calorias: 25,
    precio: 0.15,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 11,
    nombre: 'Calabacín',
    unidad: 'UNIDADES',
    calorias: 33,
    precio: 0.60,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 12,
    nombre: 'Cebolla',
    unidad: 'UNIDADES',
    calorias: 44,
    precio: 0.20,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/cebolla.png',
    categoria: 'Verduras'
  },
  {
    id: 13,
    nombre: 'Pepino',
    unidad: 'UNIDADES',
    calorias: 45,
    precio: 0.40,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 14,
    nombre: 'Pimiento',
    unidad: 'UNIDADES',
    calorias: 30,
    precio: 0.50,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 16,
    nombre: 'Ajo',
    unidad: 'UNIDADES',
    calorias: 4,
    precio: 0.05,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 18,
    nombre: 'Brócoli',
    unidad: 'GRAMOS',
    calorias: 34,
    precio: 0.45,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 19,
    nombre: 'Champiñones',
    unidad: 'GRAMOS',
    calorias: 22,
    precio: 0.65,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },
  {
    id: 20,
    nombre: 'Berenjena',
    unidad: 'UNIDADES',
    calorias: 25,
    precio: 0.75,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Verduras'
  },

  // FRUTAS

  {
    id: 6,
    nombre: 'Aguacate',
    unidad: 'UNIDADES',
    calorias: 240,
    precio: 0.90,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/aguacate.png',
    categoria: 'Frutas'
  },
  {
    id: 21,
    nombre: 'Manzana',
    unidad: 'UNIDADES',
    calorias: 95,
    precio: 0.40,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Frutas'
  },
  {
    id: 22,
    nombre: 'Plátano',
    unidad: 'UNIDADES',
    calorias: 105,
    precio: 0.30,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Frutas'
  },
  {
    id: 23,
    nombre: 'Naranja',
    unidad: 'UNIDADES',
    calorias: 62,
    precio: 0.35,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Frutas'
  },
  {
    id: 24,
    nombre: 'Fresas',
    unidad: 'GRAMOS',
    calorias: 32,
    precio: 0.85,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Frutas'
  },
  {
    id: 25,
    nombre: 'Pera',
    unidad: 'UNIDADES',
    calorias: 101,
    precio: 0.40,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Frutas'
  },
  {
    id: 26,
    nombre: 'Kiwi',
    unidad: 'UNIDADES',
    calorias: 42,
    precio: 0.50,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Frutas'
  },

  // CARNE

  {
    id: 27,
    nombre: 'Pechuga de pollo',
    unidad: 'GRAMOS',
    calorias: 165,
    precio: 0.95,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Carne'
  },
  {
    id: 28,
    nombre: 'Ternera',
    unidad: 'GRAMOS',
    calorias: 250,
    precio: 1.80,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Carne'
  },
  {
    id: 29,
    nombre: 'Carne picada',
    unidad: 'GRAMOS',
    calorias: 254,
    precio: 1.10,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Carne'
  },
  {
    id: 30,
    nombre: 'Pavo',
    unidad: 'GRAMOS',
    calorias: 135,
    precio: 1.10,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Carne'
  },
  {
    id: 31,
    nombre: 'Lomo de cerdo',
    unidad: 'GRAMOS',
    calorias: 195,
    precio: 1.20,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Carne'
  },
  {
    id: 32,
    nombre: 'Muslos de pollo',
    unidad: 'GRAMOS',
    calorias: 209,
    precio: 0.85,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Carne'
  },

  // PESCADO

  {
    id: 9,
    nombre: 'Salmón',
    unidad: 'GRAMOS',
    calorias: 208,
    precio: 2.00,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Pescado'
  },
  {
    id: 33,
    nombre: 'Merluza',
    unidad: 'GRAMOS',
    calorias: 82,
    precio: 1.50,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Pescado'
  },
  {
    id: 34,
    nombre: 'Atún',
    unidad: 'GRAMOS',
    calorias: 132,
    precio: 1.40,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Pescado'
  },
  {
    id: 35,
    nombre: 'Bacalao',
    unidad: 'GRAMOS',
    calorias: 82,
    precio: 1.60,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Pescado'
  },
  {
    id: 36,
    nombre: 'Gambas',
    unidad: 'GRAMOS',
    calorias: 99,
    precio: 2.20,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Pescado'
  },
  {
    id: 37,
    nombre: 'Sardinas',
    unidad: 'GRAMOS',
    calorias: 208,
    precio: 0.90,
    vegetariano: false,
    sinGluten: true,
    categoria: 'Pescado'
  },

  // LEGUMBRES

  {
    id: 5,
    nombre: 'Garbanzos',
    unidad: 'GRAMOS',
    calorias: 139,
    precio: 0.30,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/garbanzos.png',
    categoria: 'Legumbres'
  },
  {
    id: 38,
    nombre: 'Lentejas',
    unidad: 'GRAMOS',
    calorias: 116,
    precio: 0.25,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Legumbres'
  },
  {
    id: 39,
    nombre: 'Alubias blancas',
    unidad: 'GRAMOS',
    calorias: 114,
    precio: 0.30,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Legumbres'
  },
  {
    id: 40,
    nombre: 'Judías pintas',
    unidad: 'GRAMOS',
    calorias: 127,
    precio: 0.35,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Legumbres'
  },
  {
    id: 41,
    nombre: 'Guisantes',
    unidad: 'GRAMOS',
    calorias: 81,
    precio: 0.35,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Legumbres'
  },
  {
    id: 42,
    nombre: 'Soja',
    unidad: 'GRAMOS',
    calorias: 173,
    precio: 0.50,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Legumbres'
  },

  // OTROS

  {
    id: 1,
    nombre: 'Huevos',
    unidad: 'UNIDADES',
    calorias: 70,
    precio: 0.25,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/huevos.png',
    categoria: 'Otros'
  },
  {
    id: 3,
    nombre: 'Queso fresco',
    unidad: 'GRAMOS',
    calorias: 98,
    precio: 0.90,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/queso-fresco.png',
    categoria: 'Otros'
  },
  {
    id: 4,
    nombre: 'Aceite de oliva',
    unidad: 'MILILITROS',
    calorias: 884,
    precio: 0.90,
    vegetariano: true,
    sinGluten: true,
    imagen: 'assets/fotos/ingredientes/aceite-de-oliva.png',
    categoria: 'Otros'
  },
  {
    id: 15,
    nombre: 'Pan sin gluten',
    unidad: 'GRAMOS',
    calorias: 250,
    precio: 0.90,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 17,
    nombre: 'Sal',
    unidad: 'GRAMOS',
    calorias: 0,
    precio: 0.06,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 43,
    nombre: 'Arroz',
    unidad: 'GRAMOS',
    calorias: 130,
    precio: 0.20,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 44,
    nombre: 'Pasta',
    unidad: 'GRAMOS',
    calorias: 158,
    precio: 0.25,
    vegetariano: true,
    sinGluten: false,
    categoria: 'Otros'
  },
  {
    id: 45,
    nombre: 'Leche',
    unidad: 'MILILITROS',
    calorias: 61,
    precio: 0.12,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 46,
    nombre: 'Yogur natural',
    unidad: 'UNIDADES',
    calorias: 75,
    precio: 0.35,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 47,
    nombre: 'Harina de trigo',
    unidad: 'GRAMOS',
    calorias: 364,
    precio: 0.10,
    vegetariano: true,
    sinGluten: false,
    categoria: 'Otros'
  },
  {
    id: 48,
    nombre: 'Azúcar',
    unidad: 'GRAMOS',
    calorias: 387,
    precio: 0.12,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 49,
    nombre: 'Mantequilla',
    unidad: 'GRAMOS',
    calorias: 717,
    precio: 0.85,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  },
  {
    id: 50,
    nombre: 'Queso rallado',
    unidad: 'GRAMOS',
    calorias: 400,
    precio: 0.95,
    vegetariano: true,
    sinGluten: true,
    categoria: 'Otros'
  }

];
