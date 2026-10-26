
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon,
  IonRouterLink
} from '@ionic/angular';

@Component({
  selector: 'app-registro-confirmacion',
  templateUrl: './registro-confirmacion.page.html',
  styleUrls: ['./registro-confirmacion.page.scss'],
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    RouterLink,
    IonRouterLink
  ]
})
export class RegistroConfirmacionPage {

}
