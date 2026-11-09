import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { Receta } from '../../modelos/receta';
import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    FormsModule,
    RouterLink,
    TarjetaRecetaComponent,
    CabeceraComponent,
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

  recetas: Receta[] = [...RECETAS_EJEMPLO];

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

