import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRouterLink } from '@ionic/angular';

@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.scss'],
  imports: [RouterLink, IonRouterLink]
})
export class MenuPerfilComponent {

  nombre = input<string>('Usuario');

  // página para editar el perfil
  rutaPerfil = input.required<string>();

  // al cerrar sesión
  rutaSalir = input.required<string>();

}
