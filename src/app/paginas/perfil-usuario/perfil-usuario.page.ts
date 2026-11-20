import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonButton,
  IonContent,
  IonIcon,
  IonModal,
  IonRouterLink,
  IonToggle,
  ToggleCustomEvent
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  cameraOutline
} from 'ionicons/icons';

import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
  imports: [
    IonButton,
    IonContent,
    IonIcon,
    IonModal,
    IonRouterLink,
    IonToggle,
    RouterLink,
    ConfirmacionRecetaComponent
  ]
})
export class PerfilUsuarioPage {

  // Datos ficticios del usuario (es una maqueta: no se guardan)
  nombre = 'Ana';
  correo = 'ana@smartchef.es';

  // El interruptor sale encendido si el modo oscuro ya está activo
  modoOscuro = document.documentElement.classList.contains('ion-palette-dark');

  modalConfirmacionAbierto = false;

  constructor() {
    addIcons({
      arrowBackOutline,
      cameraOutline
    });
  }

  // Activar o desactivar el modo oscuro (igual que en el paso 11 del manual)
  cambiarModoOscuro(evento: ToggleCustomEvent): void {
    const activado = evento.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', activado);
  }

}
