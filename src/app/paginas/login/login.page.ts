import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

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

  // Navegación entre páginas
  private router = inject(Router);

  // Simular el inicio de sesión
  iniciarSesion(): void {

    this.sesion.iniciarSesion();

    this.router.navigate(['/app/inicio-login']);

  }

}
