import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonBackButton, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBackOutline, personCircleOutline } from 'ionicons/icons';

import { SesionService } from '../../servicios/sesion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
  imports: [IonBackButton, IonIcon, RouterLink],
})
export class CabeceraComponent {

  // Dirección a la que vuelve si no hay pantalla anterior (vacía = sin botón)
  volver = input('');

  sesion = inject(SesionService);

  constructor() {
    addIcons({
      arrowBackOutline,
      personCircleOutline
    });
  }

}
