import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton,
  IonIcon,
  IonRouterLink
} from '@ionic/angular';

import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonIcon,
    RouterLink,
    IonRouterLink
  ]
})
export class LoginPage {

  // Servicio para controlar la sesión
  private sesion = inject(SesionService);

  // Simular el inicio de sesión (la navegación la hace el routerLink del botón)
  iniciarSesion(): void {

    this.sesion.iniciarSesion();

  }

}
