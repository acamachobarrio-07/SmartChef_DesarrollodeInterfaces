
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonInput,
  IonButton,
  IonIcon,
  IonRouterLink
} from '@ionic/angular';

@Component({
  selector: 'app-contrasena-olvidada-confirmacion',
  templateUrl: './contrasena-olvidada-confirmacion.page.html',
  styleUrls: ['./contrasena-olvidada-confirmacion.page.scss'],
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonIcon,
    RouterLink,
    IonRouterLink
  ]
})
export class ContrasenaOlvidadaConfirmacionPage {

}

