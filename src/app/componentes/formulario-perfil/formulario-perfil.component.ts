import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink, IonToggle, ToggleCustomEvent } from '@ionic/angular';

import { DatosPerfil } from '../../modelos/perfil';

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.component.html',
  styleUrls: ['./formulario-perfil.component.scss'],
  imports: [IonToggle, RouterLink, IonRouterLink]
})
export class FormularioPerfilComponent {

  datos = input.required<DatosPerfil>();

  volver = input.required<string>();

  // interruptor sale encendido si el modo oscuro está activado
  modoOscuro = document.documentElement.classList.contains('ion-palette-dark');

  // activamos o desactivar el modo oscuro
  cambiarTema(evento: ToggleCustomEvent): void {
    const activado = evento.detail.checked;
    document.documentElement.classList.toggle('ion-palette-dark', activado);
  }

}
