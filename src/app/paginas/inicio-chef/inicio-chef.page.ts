import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';

import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { addIcons } from 'ionicons';
import {
  addOutline,
  createOutline,
  trashOutline,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-inicio-chef',
  templateUrl: './inicio-chef.page.html',
  styleUrls: ['./inicio-chef.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonModal,
    FormsModule,
    ConfirmacionRecetaComponent
  ]
})
export class InicioChefPage {

  // MODAL PARA AÑADIR RECETAS
  modalAnadirAbierto = false;

  // MODAL DE CONFIRMACIÓN
  modalConfirmacionAbierto = false;

  // MENSAJE DE CONFIRMACIÓN
  mensajeConfirmacion = 'Receta añadida correctamente.';

  // INDICA SI DEBEMOS MOSTRAR LA CONFIRMACIÓN
  confirmacionPendiente = false;

  // INGREDIENTES DE LA RECETA
  ingredientesReceta: {
    nombre: string;
    cantidad: number | null;
    unidad: string;
  }[] = [];

  // PASOS DE PREPARACIÓN
  pasos: {
    descripcion: string;
  }[] = [];

  constructor() {
    addIcons({
      addOutline,
      createOutline,
      trashOutline,
      chevronForwardOutline
    });
  }

  // AÑADIR INGREDIENTE
  anadirIngrediente(): void {
    this.ingredientesReceta.push({
      nombre: '',
      cantidad: null,
      unidad: 'ud'
    });
  }

  // ELIMINAR INGREDIENTE
  eliminarIngrediente(indice: number): void {
    this.ingredientesReceta.splice(indice, 1);
  }

  // AÑADIR PASO
  anadirPaso(): void {
    this.pasos.push({
      descripcion: ''
    });
  }

  // ELIMINAR PASO
  eliminarPaso(indice: number): void {
    this.pasos.splice(indice, 1);
  }

  // SIMULAR EL GUARDADO DE LA RECETA
  guardarReceta(): void {
    this.mensajeConfirmacion = 'Receta añadida correctamente.';
    this.confirmacionPendiente = true;
    this.modalAnadirAbierto = false;
  }

  // CUANDO TERMINA DE CERRARSE EL FORMULARIO
  alCerrarModalAnadir(): void {
    this.modalAnadirAbierto = false;

    if (this.confirmacionPendiente) {
      this.confirmacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }

}
