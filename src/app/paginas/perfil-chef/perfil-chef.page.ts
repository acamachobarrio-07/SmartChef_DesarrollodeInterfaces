import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonModal, IonRouterLink } from '@ionic/angular';

import { FormularioPerfilComponent } from '../../componentes/formulario-perfil/formulario-perfil.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { PERFIL_CHEF } from '../../datos/perfiles';

@Component({
  selector: 'app-perfil-chef',
  templateUrl: './perfil-chef.page.html',
  styleUrls: ['./perfil-chef.page.scss'],
  imports: [
    IonButton,
    IonContent,
    IonModal,
    IonRouterLink,
    RouterLink,
    FormularioPerfilComponent,
    ConfirmacionRecetaComponent
  ]
})
export class PerfilChefPage {

  datosPerfil = PERFIL_CHEF;

  modalConfirmacionAbierto = false;

}
