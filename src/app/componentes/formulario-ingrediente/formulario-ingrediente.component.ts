import { Component, input, output } from '@angular/core';
import {
  IonButton,
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
    IonButton,
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

  // Ingrediente que se añade o se modifica
  ingrediente = input.required<Ingrediente>();

  // Textos opcionales (por defecto, para añadir)
  titulo = input<string>('Añadir ingrediente');
  textoBoton = input<string>('Añadir');

  // Avisamos a la página padre
  guardar = output<void>();
  cancelar = output<void>();

  constructor() {
    addIcons({ nutritionOutline });
  }

}
