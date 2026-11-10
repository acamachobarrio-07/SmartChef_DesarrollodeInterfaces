import { Component } from '@angular/core';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';
import { FormularioRecetaComponent } from '../../componentes/formulario-receta/formulario-receta.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';
import { Receta } from '../../modelos/receta';
import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { DatosFormularioReceta } from '../../componentes/formulario-receta/formulario-receta.component';


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
    ConfirmacionRecetaComponent,
    FormularioRecetaComponent,
    TarjetaRecetaComponent
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

  // Control del modal para seleccionar una receta
  modalSeleccionAbierto = false;
  modalModificarAbierto = false;

  // RECETAS FICTICIAS PARA EL CHEF
  recetasChef: Receta[] = RECETAS_EJEMPLO.map(receta => ({
    ...receta,
    ingredientes: [...receta.ingredientes]
  }));

  // RECETA SELECCIONADA
  recetaSeleccionada: Receta | null = null;
  datosModificar: DatosFormularioReceta | null = null;

  // ESPERAR A QUE SE CIERRE EL LISTADO
  abrirModificarPendiente = false;


  constructor() {
    addIcons({
      addOutline,
      createOutline,
      trashOutline,
      chevronForwardOutline
    });
  }

  guardarReceta(): void {
    this.mensajeConfirmacion = 'Receta añadida correctamente.';
    this.confirmacionPendiente = true;
    this.modalAnadirAbierto = false;
  }

  alCerrarModalAnadir(): void {
    this.modalAnadirAbierto = false;

    if (this.confirmacionPendiente) {
      this.confirmacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }


  // SELECCIONAR UNA RECETA PARA MODIFICAR
  seleccionarRecetaParaModificar(receta: Receta): void {

    this.recetaSeleccionada = receta;

    // PREPARAR LOS DATOS DEL FORMULARIO
    this.datosModificar = {
      titulo: receta.nombre,
      tiempo: receta.tiempo,
      raciones: 2,
      dificultad: receta.dificultad === 'Fácil' ? 'facil'
        : receta.dificultad === 'Media' ? 'media' : 'dificil',

      ingredientes: receta.ingredientes.map(nombre => ({
        nombre: nombre,
        cantidad: 1,
        unidad: 'ud'
      })),

      pasos: [
        { descripcion: 'Preparación de ejemplo.' }
      ]
    };

    this.abrirModificarPendiente = true;
    this.modalSeleccionAbierto = false;
  }

  // ABRIR EL FORMULARIO DESPUÉS DE CERRAR EL LISTADO
  alCerrarSeleccion(): void {
    this.modalSeleccionAbierto = false;

    if (this.abrirModificarPendiente) {
      this.abrirModificarPendiente = false;
      this.modalModificarAbierto = true;
    }
  }

  // SIMULAR LA MODIFICACIÓN
  guardarModificacion(datos: DatosFormularioReceta): void {

    if (!this.recetaSeleccionada) {
      return;
    }

    const idSeleccionado = this.recetaSeleccionada.id;

    this.recetasChef = this.recetasChef.map(receta => {

      if (receta.id !== idSeleccionado) {
        return receta;
      }

      return {
        ...receta,
        nombre: datos.titulo,
        tiempo: datos.tiempo ?? receta.tiempo,
        dificultad: datos.dificultad === 'facil' ? 'Fácil' as const
          : datos.dificultad === 'media' ? 'Media' as const
            : 'Difícil' as const,
        ingredientes: datos.ingredientes.map(i => i.nombre),
        disponibles: datos.ingredientes.length
      };

    });

    this.mensajeConfirmacion = 'Receta modificada correctamente.';
    this.confirmacionPendiente = true;
    this.modalModificarAbierto = false;
  }

  // MOSTRAR CONFIRMACIÓN CUANDO SE CIERRA EL FORMULARIO
  alCerrarModalModificar(): void {
    this.modalModificarAbierto = false;

    if (this.confirmacionPendiente) {
      this.confirmacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }

}
