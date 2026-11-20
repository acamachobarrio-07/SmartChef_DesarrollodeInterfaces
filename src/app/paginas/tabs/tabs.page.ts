import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonModal,
  IonContent,
  IonButton
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  homeOutline,
  nutritionOutline,
  clipboardOutline,
  calendarOutline,
  bookmarkOutline,
  lockClosedOutline
} from 'ionicons/icons';

import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonModal,
    IonContent,
    IonButton,
    RouterLink
  ]
})
export class TabsPage {

  sesion = inject(SesionService);

  // Control del modal
  modalAbierto = false;

  // Nombre de la sección bloqueada
  seccion = '';

  constructor() {
    addIcons({
      homeOutline,
      nutritionOutline,
      clipboardOutline,
      calendarOutline,
      bookmarkOutline,
      lockClosedOutline
    });
  }

  // Comprobar si podemos acceder
  comprobarAcceso(nombre: string): void {

    if (!this.sesion.comprobarSesion()) {
      this.seccion = nombre;
      this.modalAbierto = true;
    }

  }

  // Cerrar el modal
  cerrarModal(): void {
    this.modalAbierto = false;
  }

}
