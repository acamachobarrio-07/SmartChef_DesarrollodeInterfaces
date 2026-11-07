import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';

interface Receta {
  id: number;
  nombre: string;
  imagen: string;
  tiempo: number;
  dificultad: 'Fácil' | 'Media' | 'Difícil';
  disponibles: number;
  ingredientes: string[];
  vegetariano: boolean;
  sinGluten: boolean;
  rapido: boolean;
  economico: boolean;
}

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    FormsModule,
    RouterLink,
    TarjetaRecetaComponent
  ]
})
export class RecetasPage {

  busqueda = '';
  panelFiltrosAbierto = false;
  mostrarDificultad = false;
  mostrarTiempo = false;

  filtros = {
    vegetariano: false,
    sinGluten: false,
    rapido: false,
    economico: false
  };

  dificultad = 'Todas';
  tiempoMaximo: number | null = null;

  recetas: Receta[] = [
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

  get recetasFiltradas(): Receta[] {
    const texto = this.normalizar(this.busqueda.trim());

    return this.recetas.filter(receta => {

      const coincideBusqueda =
        !texto ||
        this.normalizar(receta.nombre).includes(texto) ||
        receta.ingredientes.some(ingrediente =>
          this.normalizar(ingrediente).includes(texto)
        );

      return (
        coincideBusqueda &&
        (!this.filtros.vegetariano || receta.vegetariano) &&
        (!this.filtros.sinGluten || receta.sinGluten) &&
        (!this.filtros.rapido || receta.rapido) &&
        (!this.filtros.economico || receta.economico) &&
        (this.dificultad === 'Todas' ||
          receta.dificultad === this.dificultad) &&
        (this.tiempoMaximo === null ||
          receta.tiempo <= this.tiempoMaximo)
      );
    });
  }

  get filtrosActivos(): string[] {
    const activos: string[] = [];

    if (this.filtros.vegetariano) activos.push('vegetariano');
    if (this.filtros.sinGluten) activos.push('sin gluten');
    if (this.filtros.rapido) activos.push('rápido');
    if (this.filtros.economico) activos.push('económico');

    if (this.dificultad !== 'Todas') {
      activos.push(this.dificultad.toLowerCase());
    }

    if (this.tiempoMaximo !== null) {
      activos.push('máx. ' + this.tiempoMaximo + ' min');
    }

    return activos;
  }

  alternarFiltro(
    filtro: 'vegetariano' | 'sinGluten' | 'rapido' | 'economico'
  ): void {
    this.filtros[filtro] = !this.filtros[filtro];
  }

  limpiarFiltros(): void {
    this.filtros = {
      vegetariano: false,
      sinGluten: false,
      rapido: false,
      economico: false
    };

    this.dificultad = 'Todas';
    this.tiempoMaximo = null;
  }

  private normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}

