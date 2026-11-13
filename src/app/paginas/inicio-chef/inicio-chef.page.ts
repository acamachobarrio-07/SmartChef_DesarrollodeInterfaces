
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonIcon, IonModal, IonPopover } from '@ionic/angular';

import { FormularioRecetaComponent, DatosFormularioReceta } from '../../componentes/formulario-receta/formulario-receta.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { MenuPerfilComponent } from '../../componentes/menu-perfil/menu-perfil.component';

import { Receta } from '../../modelos/receta';
import { DatosPerfil } from '../../modelos/perfil';

import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';
import { PERFIL_CHEF } from '../../datos/perfiles';

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
    IonPopover,
    ConfirmacionRecetaComponent,
    FormularioRecetaComponent,
    TarjetaRecetaComponent,
    MenuPerfilComponent
  ]
})
export class InicioChefPage {

  // NAVEGACIÓN ENTRE PÁGINAS
  private router = inject(Router);

  // DATOS FICTICIOS DEL CHEF
  datosPerfil: DatosPerfil = { ...PERFIL_CHEF };

  // ACCIONES PENDIENTES DEL MENÚ
  abrirPerfilPendiente = false;
  cerrarSesionPendiente = false;

  // MODAL PARA AÑADIR RECETAS
  modalAnadirAbierto = false;

  // MODAL DE CONFIRMACIÓN
  modalConfirmacionAbierto = false;

  // MENSAJE DE CONFIRMACIÓN
  mensajeConfirmacion = 'Receta añadida correctamente.';

  // INDICA SI DEBEMOS MOSTRAR LA CONFIRMACIÓN
  confirmacionPendiente = false;

  // MODALES PARA MODIFICAR Y ELIMINAR
  modalSeleccionAbierto = false;
  modalModificarAbierto = false;
  modalEliminarAbierto = false;

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

  // INDICA QUÉ QUEREMOS HACER EN EL LISTADO
  modoSeleccion: 'modificar' | 'eliminar' = 'modificar';

  // ESPERAR PARA ABRIR EL AVISO DE ELIMINACIÓN
  abrirEliminarPendiente = false;

  // ESPERAR PARA MOSTRAR EL MENSAJE DE ÉXITO
  confirmacionEliminacionPendiente = false;


  constructor() {
    addIcons({
      addOutline,
      createOutline,
      trashOutline,
      chevronForwardOutline
    });
  }


  // AÑADIR RECETA

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


  // ABRIR EL LISTADO PARA MODIFICAR O ELIMINAR

  abrirSeleccion(modo: 'modificar' | 'eliminar'): void {
    this.modoSeleccion = modo;
    this.modalSeleccionAbierto = true;
  }


  // DECIDIR QUÉ HACER CON LA RECETA SELECCIONADA

  manejarSeleccionReceta(receta: Receta): void {
    if (this.modoSeleccion === 'modificar') {
      this.seleccionarRecetaParaModificar(receta);
    } else {
      this.seleccionarRecetaParaEliminar(receta);
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


  // CUANDO TERMINA DE CERRARSE EL LISTADO

  alCerrarSeleccion(): void {
    this.modalSeleccionAbierto = false;

    if (this.abrirModificarPendiente) {
      this.abrirModificarPendiente = false;
      this.modalModificarAbierto = true;

    } else if (this.abrirEliminarPendiente) {
      this.abrirEliminarPendiente = false;
      this.modalEliminarAbierto = true;
    }
  }


  // SIMULAR LA MODIFICACIÓN DE UNA RECETA

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


  // MOSTRAR CONFIRMACIÓN AL CERRAR EL FORMULARIO

  alCerrarModalModificar(): void {
    this.modalModificarAbierto = false;

    if (this.confirmacionPendiente) {
      this.confirmacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }


  // SELECCIONAR UNA RECETA PARA ELIMINAR

  seleccionarRecetaParaEliminar(receta: Receta): void {
    this.recetaSeleccionada = receta;
    this.abrirEliminarPendiente = true;
    this.modalSeleccionAbierto = false;
  }


  // CONFIRMAR LA ELIMINACIÓN

  confirmarEliminar(): void {
    if (!this.recetaSeleccionada) {
      return;
    }

    // ELIMINAR LA RECETA DEL LISTADO FICTICIO
    const id = this.recetaSeleccionada.id;

    this.recetasChef = this.recetasChef.filter(
      receta => receta.id !== id
    );

    // PREPARAR EL MENSAJE DE ÉXITO
    this.mensajeConfirmacion = 'Receta eliminada correctamente.';
    this.confirmacionEliminacionPendiente = true;

    // CERRAR EL AVISO
    this.modalEliminarAbierto = false;
  }


  // MOSTRAR CONFIRMACIÓN AL CERRAR EL AVISO

  alCerrarModalEliminar(): void {
    this.modalEliminarAbierto = false;

    if (this.confirmacionEliminacionPendiente) {
      this.confirmacionEliminacionPendiente = false;
      this.modalConfirmacionAbierto = true;
    }
  }


  // MENÚ DEL PERFIL DEL CHEF

  // PREPARAR LA APERTURA DEL PERFIL
  abrirEdicionPerfil(): void {
    this.abrirPerfilPendiente = true;
  }

  // PREPARAR EL CIERRE DE SESIÓN
  cerrarSesion(): void {
    this.cerrarSesionPendiente = true;
  }

  // NAVEGAR CUANDO SE CIERRE EL MENÚ
  alCerrarMenuPerfil(): void {

    if (this.abrirPerfilPendiente) {
      this.abrirPerfilPendiente = false;
      this.router.navigate(['/perfil-chef']);
    }

    if (this.cerrarSesionPendiente) {
      this.cerrarSesionPendiente = false;
      this.router.navigate(['/login-chef']);
    }

  }

}

