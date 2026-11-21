import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonSearchbar, IonModal, IonButton, IonRouterLink } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { clipboardOutline, nutritionOutline } from 'ionicons/icons';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';
import { LISTA_COMPRA } from '../../datos/lista-compra';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.page.html',
  styleUrls: ['./lista-compra.page.scss'],
  imports: [
    IonRouterLink,
    RouterLink,
    IonButton,
    IonContent,
    IonIcon,
    IonSearchbar,
    IonModal,
    CabeceraComponent,
    EstadoVacioComponent,
    ConfirmacionRecetaComponent
  ]
})
export class ListaCompraPage {

  lista = LISTA_COMPRA;

  // unidades
  unidades = {
    GRAMOS: 'gramos',
    MILILITROS: 'mililitros',
    UNIDADES: 'unidades'
  };

  // modal mostrando la confirmación
  modalEnviadaAbierto = false;
  correo = 'correoprueba@smartchef.es';

  constructor() {
    addIcons({ clipboardOutline, nutritionOutline });
  }

}
