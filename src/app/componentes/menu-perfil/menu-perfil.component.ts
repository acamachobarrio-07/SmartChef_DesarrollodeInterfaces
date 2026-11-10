import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-menu-perfil',
  templateUrl: './menu-perfil.component.html',
  styleUrls: ['./menu-perfil.component.scss'],
  imports: []
})
export class MenuPerfilComponent {

  // Nombre del usuario o chef
  nombre = input<string>('Usuario');

  // Avisar al padre cuando pulse Editar perfil
  editarPerfil = output<void>();

  // Avisar al padre cuando pulse Cerrar sesión
  cerrarSesion = output<void>();

}
