import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonIcon,
  IonSearchbar,
  IonPopover,
  IonRouterLink
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  notificationsOutline,
  chevronForwardCircle,
  createOutline,
  logOutOutline
} from 'ionicons/icons';

import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { RECETAS_RECOMENDADAS } from '../../datos/recetas-recomendadas';
import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-inicio-login',
  templateUrl: './inicio-login.page.html',
  styleUrls: ['./inicio-login.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonSearchbar,
    IonPopover,
    RouterLink,
    IonRouterLink,
    TarjetaRecetaComponent
  ]
})
export class InicioLoginPage {

  sesion = inject(SesionService);

  recetas = RECETAS_RECOMENDADAS;

  constructor() {
    addIcons({
      notificationsOutline,
      chevronForwardCircle,
      createOutline,
      logOutOutline
    });
  }

}
