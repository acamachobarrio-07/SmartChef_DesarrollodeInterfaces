import { Component, input, output } from '@angular/core';
import { IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addCircle } from 'ionicons/icons';

import { Ingrediente } from '../../modelos/ingrediente';

@Component({
  selector: 'app-tarjeta-ingrediente',
  templateUrl: './tarjeta-ingrediente.component.html',
  styleUrls: ['./tarjeta-ingrediente.component.scss'],
  imports: [
    IonIcon
  ]
})
export class TarjetaIngredienteComponent {

  ingrediente = input.required<Ingrediente>();

  seleccionar = output<Ingrediente>();

  constructor() {
    addIcons({
      addCircle
    });
  }

  pulsarAnadir(): void {
    this.seleccionar.emit(this.ingrediente());
  }

}

