import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { flameOutline } from 'ionicons/icons';

@Component({
  selector: 'app-resumen-calorias',
  templateUrl: './resumen-calorias.component.html',
  styleUrls: ['./resumen-calorias.component.scss'],
  imports: [IonIcon]
})
export class ResumenCaloriasComponent {

  titulo = input<string>('Calorías de la semana');
  calorias = input.required<number>();

  constructor() {
    addIcons({ flameOutline });
  }

}
