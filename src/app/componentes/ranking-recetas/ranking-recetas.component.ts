import { Component, input } from '@angular/core';
import { IonAvatar, IonItem, IonLabel, IonList, IonNote } from '@ionic/angular';

import { RecetaPopular } from '../../modelos/informe';

@Component({
  selector: 'app-ranking-recetas',
  templateUrl: './ranking-recetas.component.html',
  styleUrls: ['./ranking-recetas.component.scss'],
  imports: [IonAvatar, IonItem, IonLabel, IonList, IonNote]
})
export class RankingRecetasComponent {

  recetas = input.required<RecetaPopular[]>();
  texto = input.required<string>();

}
