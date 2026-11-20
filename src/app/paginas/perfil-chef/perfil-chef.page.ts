import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonModal, IonButton } from '@ionic/angular';

import { FormularioPerfilComponent } from '../../componentes/formulario-perfil/formulario-perfil.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { DatosPerfil } from '../../modelos/perfil';
import { PERFIL_CHEF } from '../../datos/perfiles';

@Component({
  selector: 'app-perfil-chef',
  templateUrl: './perfil-chef.page.html',
  styleUrls: ['./perfil-chef.page.scss'],
  imports: [
    IonContent,
    IonModal,
    IonButton,
    FormularioPerfilComponent,
    ConfirmacionRecetaComponent
  ]
})
export class PerfilChefPage {

  private router = inject(Router);

  // Datos ficticios del chef
  datosPerfil: DatosPerfil = { ...PERFIL_CHEF };

  // Control del modal
  modalConfirmacionAbierto = false;
  volverAlInicio = false;

  // Simular el guardado del perfil
  guardarPerfil(datos: DatosPerfil): void {
    this.datosPerfil = datos;
    this.modalConfirmacionAbierto = true;
  }

  // Cerrar el formulario
  cerrarPerfil(): void {
    this.router.navigate(['/inicio-chef']);
  }

  // Pulsar Aceptar en la confirmación
  aceptarConfirmacion(): void {
    this.volverAlInicio = true;
    this.modalConfirmacionAbierto = false;
  }

  // Cuando termina de cerrarse el modal
  alCerrarConfirmacion(): void {
    this.modalConfirmacionAbierto = false;

    if (this.volverAlInicio) {
      this.volverAlInicio = false;
      this.router.navigate(['/inicio-chef']);
    }
  }

  // Cambiar el modo oscuro
  cambiarTema(activado: boolean): void {
    document.documentElement.classList.toggle(
      'ion-palette-dark',
      activado
    );
  }

}
