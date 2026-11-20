import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

import { Coleccion } from '../../modelos/coleccion';

@Component({
  selector: 'app-tarjeta-coleccion',
  templateUrl: './tarjeta-coleccion.component.html',
  styleUrls: ['./tarjeta-coleccion.component.scss'],
  imports: [IonIcon, RouterLink]
})
export class TarjetaColeccionComponent {

  // coleccion que mostramos en la tarjeta
  coleccion = input.required<Coleccion>();

  // ver abre la coleccion
  modo = input<'ver' | 'seleccionar'>('ver');

}
