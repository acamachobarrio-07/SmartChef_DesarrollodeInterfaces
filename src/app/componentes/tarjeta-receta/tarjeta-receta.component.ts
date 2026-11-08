import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCard, IonIcon } from '@ionic/angular';
import { Receta } from '../../modelos/receta';

@Component({
  selector: 'app-tarjeta-receta',
  templateUrl: './tarjeta-receta.component.html',
  styleUrls: ['./tarjeta-receta.component.scss'],
  imports: [IonCard, IonIcon, RouterLink],
})
export class TarjetaRecetaComponent {

  receta = input.required<Receta>();

}
