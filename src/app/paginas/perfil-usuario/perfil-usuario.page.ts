import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonIcon,
  IonToggle,
  IonModal,
  IonButton
} from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  cameraOutline
} from 'ionicons/icons';

import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonToggle,
    IonModal,
    IonButton,
    FormsModule,
    ConfirmacionRecetaComponent
  ]
})
export class PerfilUsuarioPage {

  nombre = 'Ana';
  correo = '';
  fotoPerfil = '';

  modoOscuro = false;

  modalConfirmacionAbierto = false;

  preferencias = {
    sinGluten: false,
    vegetariano: false,
    economico: false,
    rapidas: false
  };

  constructor(private router: Router) {

    addIcons({
      arrowBackOutline,
      cameraOutline
    });

    this.modoOscuro =
      document.documentElement.classList.contains('ion-palette-dark');

  }

  cambiarFoto(event: Event): void {

    const archivo = (event.target as HTMLInputElement).files?.[0];

    if (!archivo || !archivo.type.startsWith('image/')) {
      return;
    }

    const lector = new FileReader();

    lector.onload = () => {
      this.fotoPerfil = lector.result as string;
    };

    lector.readAsDataURL(archivo);

  }

  cambiarModoOscuro(event: any): void {

    this.modoOscuro = event.detail.checked;

    this.aplicarModoOscuro();

  }

  aplicarModoOscuro(): void {

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      this.modoOscuro
    );

  }

  guardarCambios(): void {

    this.modalConfirmacionAbierto = true;

  }

  aceptarConfirmacion(): void {

    this.modalConfirmacionAbierto = false;

    this.router.navigate(['/app/inicio-login']);

  }

  alCerrarConfirmacion(): void {

    this.modalConfirmacionAbierto = false;

  }

  volver(): void {

    this.router.navigate(['/app/inicio-login']);

  }

}

