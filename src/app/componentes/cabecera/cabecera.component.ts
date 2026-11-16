import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBackOutline, personCircleOutline } from 'ionicons/icons';

import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  imports: [IonIcon, RouterLink],
})
export class CabeceraComponent {

  // Si la página lo indica, se muestra la flecha para volver
  volver = input(false);

  sesion = inject(SesionService);
  location = inject(Location);

  constructor() {
    addIcons({
      arrowBackOutline,
      personCircleOutline
    });
  }

  irAtras(): void {
    this.location.back();
  }

}
