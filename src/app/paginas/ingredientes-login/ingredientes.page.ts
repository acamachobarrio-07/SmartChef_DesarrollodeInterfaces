import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonModal, IonButton } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { addCircle, nutritionOutline, trashOutline } from 'ionicons/icons';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { FormularioIngredienteComponent } from '../../componentes/formulario-ingrediente/formulario-ingrediente.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { ProductoDespensa } from '../../modelos/despensa';
import { DESPENSA } from '../../datos/despensa';

@Component({
  selector: 'app-ingredientes-login',
  templateUrl: './ingredientes.page.html',
  styleUrls: ['./ingredientes.page.scss'],
  imports: [
    IonButton,
    IonContent,
    IonIcon,
    IonModal,
    RouterLink,
    CabeceraComponent,
    FormularioIngredienteComponent,
    ConfirmacionRecetaComponent
  ]
})
export class IngredientesPage {

  despensa = DESPENSA;

  unidades = {
    GRAMOS: 'gramos',
    MILILITROS: 'mililitros',
    UNIDADES: 'unidades'
  };

  modalModificarAbierto = false;
  modalEliminarAbierto = false;
  productoSeleccionado: ProductoDespensa | null = null;
  hecho = false;

  constructor() {
    addIcons({ addCircle, nutritionOutline, trashOutline });
  }

  abrirModificar(producto: ProductoDespensa): void {
    this.productoSeleccionado = producto;
    this.hecho = false;
    this.modalModificarAbierto = true;
  }

  abrirEliminar(producto: ProductoDespensa): void {
    this.productoSeleccionado = producto;
    this.hecho = false;
    this.modalEliminarAbierto = true;
  }

}
