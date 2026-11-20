import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addCircle, timeOutline } from 'ionicons/icons';

import { Receta } from '../../modelos/receta';

@Component({
  selector: 'app-tarjeta-comida',
  templateUrl: './tarjeta-comida.component.html',
  styleUrls: ['./tarjeta-comida.component.scss'],
  imports: [IonIcon]
})
export class TarjetaComidaComponent {

  tipo = input.required<string>();
  receta = input<Receta | null>(null);

  constructor() {
    addIcons({
      addCircle,
      timeOutline
    });
  }

}
