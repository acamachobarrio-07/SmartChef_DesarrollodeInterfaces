import { Component, input, output, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonToggle, ToggleCustomEvent } from '@ionic/angular';
import { DatosPerfil } from '../../modelos/perfil';

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

  // Imagen seleccionada para el perfil
  imagenPerfil: string | null = null;

  constructor() {

    // Rellenar el formulario con los datos recibidos
    effect(() => {
      const perfil = this.datos();

      this.nombre = perfil.nombre;
      this.correo = perfil.correo;
      this.modoOscuro = perfil.modoOscuro;
      this.imagenPerfil = perfil.imagenPerfil ?? null;
    });

  }

  // Activar o desactivar el modo oscuro
  alCambiarTema(evento: ToggleCustomEvent): void {
    this.modoOscuro = evento.detail.checked;
    this.cambiarTema.emit(this.modoOscuro);
  }


  // Guardar los cambios del perfil
  guardarPerfil(): void {

    this.guardar.emit({
      nombre: this.nombre,
      correo: this.correo,
      modoOscuro: this.modoOscuro,
      imagenPerfil: this.imagenPerfil
    });

  }



// Seleccionar una nueva imagen de perfil
  seleccionarImagen(evento: Event): void {

    const input = evento.target as HTMLInputElement;
    const archivo = input.files?.[0];

    // Comprobar que se ha seleccionado una imagen
    if (!archivo || !archivo.type.startsWith('image/')) {
      return;
    }

    // Leer la imagen seleccionada
    const lector = new FileReader();

    lector.onload = () => {
      this.imagenPerfil = lector.result as string;
    };

    lector.readAsDataURL(archivo);
  }


}

