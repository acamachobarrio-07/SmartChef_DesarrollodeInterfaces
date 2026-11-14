import { Component, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  IonContent,
  IonIcon,
  IonSearchbar,
  IonPopover
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
    TarjetaRecetaComponent
  ]
})
export class InicioLoginPage {

  @ViewChild('popoverPerfil') popoverPerfil!: IonPopover;

  sesion = inject(SesionService);
  router = inject(Router);

  recetas = RECETAS_RECOMENDADAS;

  constructor() {
    addIcons({
      notificationsOutline,
      chevronForwardCircle,
      createOutline,
      logOutOutline
    });
  }

  async abrirEdicionPerfil(): Promise<void> {

    await this.popoverPerfil.dismiss();

    await this.router.navigate(['/perfil-usuario']);

  }

  async cerrarSesion(): Promise<void> {

    await this.popoverPerfil.dismiss();

    this.sesion.cerrarSesion();

    await this.router.navigate(['/app/inicio']);

  }

}

