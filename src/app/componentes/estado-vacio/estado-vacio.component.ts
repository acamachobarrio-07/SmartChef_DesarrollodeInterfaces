import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-estado-vacio',
  templateUrl: './estado-vacio.component.html',
  styleUrls: ['./estado-vacio.component.scss'],
  imports: [IonIcon, RouterLink]
})
export class EstadoVacioComponent {

  // Datos que recibimos de la página padre
  icono = input.required<string>();
  titulo = input.required<string>();
  mensaje = input.required<string>();

  // Botón opcional: solo aparece si la página le pasa un texto y un enlace
  textoBoton = input<string>('');
  enlace = input<string>('');

}
