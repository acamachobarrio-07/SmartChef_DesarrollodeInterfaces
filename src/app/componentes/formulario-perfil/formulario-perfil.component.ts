import { Component, input, output, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonToggle, ToggleCustomEvent } from '@ionic/angular';

// DATOS DEL PERFIL
export interface DatosPerfil {
  nombre: string;
  correo: string;
  modoOscuro: boolean;
}

@Component({
  selector: 'app-formulario-perfil',
  templateUrl: './formulario-perfil.component.html',
  styleUrls: ['./formulario-perfil.component.scss'],
  imports: [FormsModule, IonToggle]
})
export class FormularioPerfilComponent {

  // Recibimos los datos del usuario o chef
  datos = input.required<DatosPerfil>();

  // Avisamos a la página padre
  guardar = output<DatosPerfil>();
  cerrar = output<void>();
  cambiarTema = output<boolean>();

  // Campos del formulario
  nombre = '';
  correo = '';
  modoOscuro = false;

  constructor() {

    // Rellenar el formulario con los datos recibidos
    effect(() => {
      const perfil = this.datos();

      this.nombre = perfil.nombre;
      this.correo = perfil.correo;
      this.modoOscuro = perfil.modoOscuro;
    });

  }

  // Activar o desactivar el modo oscuro
  alCambiarTema(evento: ToggleCustomEvent): void {
    this.modoOscuro = evento.detail.checked;
    this.cambiarTema.emit(this.modoOscuro);
  }

  // Enviar los datos modificados al padre
  guardarPerfil(): void {
    this.guardar.emit({
      nombre: this.nombre,
      correo: this.correo,
      modoOscuro: this.modoOscuro
    });
  }

}

