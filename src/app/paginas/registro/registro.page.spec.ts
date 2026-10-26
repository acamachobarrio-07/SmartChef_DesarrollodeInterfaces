
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
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: [
    '../login/login.page.scss',
    './registro.page.scss'
  ],
  imports: [
    IonContent,
    IonInput,
    IonButton,
    IonIcon,
    RouterLink,
    IonRouterLink
  ]
})
export class RegistroPage {

}
