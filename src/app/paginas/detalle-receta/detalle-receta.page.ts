
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  searchOutline,
  nutritionOutline,
  timeOutline,
  checkmarkCircle,
  heartOutline,
  heart,
  bookmarkOutline,
  bookmark
} from 'ionicons/icons';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    RouterLink
  ]
})
export class DetalleRecetaPage {

  pasoActual = 0;

  meGusta = false;
  guardada = false;
  listaGuardada = false;

  ingredientes = [
    '2 huevos.',
    '50 g de espinacas frescas troceadas.',
    '2 cucharadas de queso fresco.',
    '1 cucharada de aceite de oliva.',
    'Sal al gusto.'
  ];

  pasos = [
    'Pon en un cuenco las espinacas troceadas con el queso. Añade sal.',

    'Bate los dos huevos en otro recipiente con una pizca de sal.',

    'Calienta el aceite en una sartén a fuego bajo. Vierte los huevos batidos y deja que se cuajen un poco por la base.',

    'Dobla la tortilla por la mitad cubriendo el relleno, cocina 1 minuto más y sírvela recién hecha.'
  ];

  constructor() {
    addIcons({
      searchOutline,
      nutritionOutline,
      timeOutline,
      checkmarkCircle,
      heartOutline,
      heart,
      bookmarkOutline,
      bookmark
    });
  }

  avanzarPaso(): void {
    if (this.pasoActual < this.pasos.length - 1) {
      this.pasoActual++;
    } else {
      this.pasoActual = 0;
    }
  }

  alternarMeGusta(): void {
    this.meGusta = !this.meGusta;
  }

  alternarGuardada(): void {
    this.guardada = !this.guardada;
  }

  alternarLista(): void {
    this.listaGuardada = !this.listaGuardada;
  }
}
