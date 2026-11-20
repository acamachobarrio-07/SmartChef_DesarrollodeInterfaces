import { Component, input } from '@angular/core';
import {
  IonDatetime,
  IonDatetimeButton,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonSelect,
  IonSelectOption
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { nutritionOutline } from 'ionicons/icons';

import { Ingrediente } from '../../modelos/ingrediente';

@Component({
  selector: 'app-formulario-ingrediente',
  templateUrl: './formulario-ingrediente.component.html',
  styleUrls: ['./formulario-ingrediente.component.scss'],
  imports: [
    IonDatetime,
    IonDatetimeButton,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonSelect,
    IonSelectOption
  ]
})
export class FormularioIngredienteComponent {

  // ingrediente que añadimos o modificamos
  ingrediente = input.required<Ingrediente>();

  // opcional, por defecto será añadir
  titulo = input<string>('Añadir ingrediente');

  constructor() {
    addIcons({ nutritionOutline });
  }

}
