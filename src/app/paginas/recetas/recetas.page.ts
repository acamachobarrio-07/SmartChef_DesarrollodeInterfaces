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

  panelFiltrosAbierto = false;
  mostrarDificultad = false;
  mostrarTiempo = false;

  filtros = [
    { nombre: 'vegetariano', marcado: false },
    { nombre: 'sin gluten', marcado: false },
    { nombre: 'rápido', marcado: false },
    { nombre: 'económico', marcado: false }
  ];

  alternar(filtro: { nombre: string; marcado: boolean }): void {
    filtro.marcado = !filtro.marcado;
  }

  limpiarFiltros(): void {
    for (const filtro of this.filtros) {
      filtro.marcado = false;
    }
  }

}
