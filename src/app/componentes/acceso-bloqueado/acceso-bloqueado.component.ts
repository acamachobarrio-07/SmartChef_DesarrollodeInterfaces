import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-acceso-bloqueado',
  templateUrl: './acceso-bloqueado.component.html',
  styleUrls: ['./acceso-bloqueado.component.scss'],
  imports: [
    IonButton,
    IonIcon,
    RouterLink
  ]
})
export class AccesoBloqueadoComponent {

  @Input() titulo = 'esta sección';

  constructor() {
    addIcons({ lockClosedOutline });
  }

}
