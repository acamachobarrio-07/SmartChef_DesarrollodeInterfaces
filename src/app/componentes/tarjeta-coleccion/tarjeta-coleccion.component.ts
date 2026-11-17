import { Component, input, output } from '@angular/core';
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

  // Colección que se muestra en la tarjeta
  coleccion = input.required<Coleccion>();

  // 'ver': abre la colección / 'seleccionar': avisa al padre
  modo = input<'ver' | 'seleccionar'>('ver');

  // Avisar al componente padre de la colección elegida
  seleccionar = output<Coleccion>();

}
