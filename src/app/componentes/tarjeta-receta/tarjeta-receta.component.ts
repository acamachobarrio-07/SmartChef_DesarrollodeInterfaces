
import { Component, input, output } from '@angular/core';
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

  // Receta que se muestra en la tarjeta
  receta = input.required<Receta>();

  // Modo de funcionamiento de la tarjeta
  modo = input<'ver' | 'modificar' | 'eliminar'>('ver');

  // Avisar al componente padre de la receta seleccionada
  seleccionar = output<Receta>();

}
