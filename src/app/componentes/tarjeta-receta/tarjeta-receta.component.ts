import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

import { Receta } from '../../modelos/receta';

@Component({
  selector: 'app-tarjeta-receta',
  templateUrl: './tarjeta-receta.component.html',
  styleUrls: ['./tarjeta-receta.component.scss'],
  imports: [IonIcon, RouterLink],
})
export class TarjetaRecetaComponent {

  // receta que mostramos en la página
  receta = input.required<Receta>();

  // ver abre el detalle
  modo = input<'ver' | 'modificar' | 'eliminar'>('ver');

}
