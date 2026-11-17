import { Component, input } from '@angular/core';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { trashOutline, bookmarkOutline, searchOutline } from 'ionicons/icons';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

import { Coleccion } from '../../modelos/coleccion';
import { Receta } from '../../modelos/receta';
import { COLECCIONES } from '../../datos/colecciones';

@Component({
  selector: 'app-coleccion-detalle',
  templateUrl: './coleccion-detalle.page.html',
  styleUrls: ['./coleccion-detalle.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonModal,
    CabeceraComponent,
    TarjetaRecetaComponent,
    ConfirmacionRecetaComponent,
    EstadoVacioComponent
  ]
})
export class ColeccionDetallePage {

  // Recibe el ":id" de la dirección (/app/colecciones/1)
  id = input<string>();

  modalAbierto = false;
  recetaSeleccionada: Receta | null = null;
  quitada = false;

  constructor() {
    addIcons({ trashOutline, bookmarkOutline, searchOutline });
  }

  get coleccion(): Coleccion | undefined {
    return COLECCIONES.find(c => c.id === Number(this.id()));
  }

  abrirQuitar(receta: Receta): void {
    this.recetaSeleccionada = receta;
    this.quitada = false;
    this.modalAbierto = true;
  }

  // Es una maqueta: solo mostramos la confirmación, no se borra nada
  confirmarQuitar(): void {
    this.quitada = true;
  }

}
