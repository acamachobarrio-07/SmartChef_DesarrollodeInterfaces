
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonIcon,
  IonInput,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-contrasena-olvidada-confirmacion',
  templateUrl: './contrasena-olvidada-confirmacion.page.html',
  styleUrls: ['./contrasena-olvidada-confirmacion.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonInput,
    IonButton,
    RouterLink
  ]
})
export class ContrasenaOlvidadaConfirmacionPage {

}
