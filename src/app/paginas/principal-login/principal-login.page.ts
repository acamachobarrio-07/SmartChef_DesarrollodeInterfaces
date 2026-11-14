import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonIcon,
  IonSearchbar
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  chevronForwardCircle
} from 'ionicons/icons';

import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { RECETAS_RECOMENDADAS } from '../../datos/recetas-recomendadas';

@Component({
  selector: 'app-principal-login',
  templateUrl: './principal-login.page.html',
  styleUrls: ['./principal-login.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonSearchbar,
    RouterLink,
    TarjetaRecetaComponent
  ]
})
export class PrincipalLoginPage {

  // Recetas recomendadas para el usuario
  recetas = RECETAS_RECOMENDADAS;

  constructor() {
    addIcons({
      notificationsOutline,
      chevronForwardCircle
    });
  }

}

