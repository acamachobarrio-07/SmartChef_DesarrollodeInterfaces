import { Component } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    TarjetaRecetaComponent,
    CabeceraComponent,
  ]
})
export class RecetasPage {

  recetas = RECETAS_EJEMPLO;

  // Es una maqueta: el panel de filtros se abre y se marca, pero no filtra
  panelFiltrosAbierto = false;
  mostrarDificultad = false;
  mostrarTiempo = false;

  filtros = {
    vegetariano: false,
    sinGluten: false,
    rapido: false,
    economico: false
  };

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
  }

}
