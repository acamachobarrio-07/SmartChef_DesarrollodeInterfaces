import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonBackButton, IonContent, IonIcon, IonModal, IonButton } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  searchOutline,
  nutritionOutline,
  timeOutline,
  checkmarkCircle,
  flameOutline,
  heartOutline,
  heart,
  bookmarkOutline,
  bookmark
} from 'ionicons/icons';

import { Receta } from '../../modelos/receta';
import { Coleccion } from '../../modelos/coleccion';
import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';
import { COLECCIONES } from '../../datos/colecciones';
import { SesionService } from '../../servicios/sesion.service';

import { TarjetaColeccionComponent } from '../../componentes/tarjeta-coleccion/tarjeta-coleccion.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';
import { EstadoVacioComponent } from '../../componentes/estado-vacio/estado-vacio.component';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
  imports: [
    IonButton,
    IonBackButton,
    IonContent,
    IonIcon,
    IonModal,
    RouterLink,
    TarjetaColeccionComponent,
    ConfirmacionRecetaComponent,
    EstadoVacioComponent
  ]
})
export class DetalleRecetaPage {

  // Recibe el ":id" de la dirección (/app/recetas/1)
  id = input<string>();

  sesion = inject(SesionService);

  pasoActual = 0;

  meGusta = false;
  guardada = false;
  listaGuardada = false;

  // Ventana para guardar en una colección
  colecciones = COLECCIONES;
  modalColeccionesAbierto = false;
  coleccionElegida: Coleccion | null = null;

  // Textos cortos para cada unidad
  unidades = {
    GRAMOS: 'g',
    MILILITROS: 'ml',
    UNIDADES: 'ud.'
  };

  constructor() {
    addIcons({
      arrowBackOutline,
      searchOutline,
      nutritionOutline,
      timeOutline,
      checkmarkCircle,
      flameOutline,
      heartOutline,
      heart,
      bookmarkOutline,
      bookmark
    });
  }

  // Busca la receta que corresponde al id de la dirección
  get receta(): Receta | undefined {
    return RECETAS_EJEMPLO.find(r => r.id === Number(this.id()));
  }

  // Pasa al siguiente paso; al llegar al último vuelve al primero
  avanzarPaso(totalPasos: number): void {
    if (this.pasoActual < totalPasos - 1) {
      this.pasoActual++;
    } else {
      this.pasoActual = 0;
    }
  }

  alternarMeGusta(): void {
    this.meGusta = !this.meGusta;
  }

  abrirGuardar(): void {
    this.coleccionElegida = null;
    this.modalColeccionesAbierto = true;
  }

  // Es una maqueta: mostramos la confirmación, pero no se añade de verdad
  elegirColeccion(coleccion: Coleccion): void {
    this.coleccionElegida = coleccion;
    this.guardada = true;
  }

  alternarLista(): void {
    this.listaGuardada = !this.listaGuardada;
  }
}
