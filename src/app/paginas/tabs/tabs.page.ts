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

  modalAbierto = false;

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

  comprobarAcceso(nombre: string): void {

    if (!this.sesion.comprobarSesion()) {
      this.seccion = nombre;
      this.modalAbierto = true;
    }

  }

  cerrarModal(): void {
    this.modalAbierto = false;
  }

}
