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
  selector: 'app-contrasena-olvidada-chef',
  templateUrl: './contrasena-olvidada-chef.page.html',
  styleUrls: ['./contrasena-olvidada-chef.page.scss'],
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonIcon,
    RouterLink,
    IonRouterLink
  ]
})
export class ContrasenaOlvidadaChefPage {

}
