import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';

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

import { Receta, IngredienteReceta } from '../../modelos/receta';
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
  location = inject(Location);

  pasoActual = 0;

  meGusta = false;
  guardada = false;
  listaGuardada = false;

  // Ventana para guardar en una colección (Favoritos no se elige: se llena con "Me gusta")
  colecciones = COLECCIONES.filter(c => c.id !== 1);
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

  // Pasos de la receta, o un aviso si todavía no tiene
  get pasos(): string[] {
    return this.receta?.pasos ?? ['El chef todavía está preparando los pasos de esta receta.'];
  }

  // Coste por ración a partir del precio de los ingredientes
  get coste(): number | null {
    const receta = this.receta;

    if (!receta?.ingredientesReceta) {
      return null;
    }

    let total = 0;
    for (const item of receta.ingredientesReceta) {
      total += this.cantidadReferencia(item) * item.ingrediente.precio;
    }

    return total / (receta.raciones ?? 1);
  }

  // Calorías por ración a partir de las calorías de los ingredientes
  get calorias(): number | null {
    const receta = this.receta;

    if (!receta?.ingredientesReceta) {
      return null;
    }

    let total = 0;
    for (const item of receta.ingredientesReceta) {
      total += this.cantidadReferencia(item) * item.ingrediente.calorias;
    }

    return Math.round(total / (receta.raciones ?? 1));
  }

  // El precio y las calorías van por 100 g / 100 ml o por unidad
  cantidadReferencia(item: IngredienteReceta): number {
    if (item.ingrediente.unidad === 'UNIDADES') {
      return item.cantidad;
    }
    return item.cantidad / 100;
  }

  // 1.0625 -> "1,06 €"
  formatearEuros(valor: number): string {
    return valor.toFixed(2).replace('.', ',') + ' €';
  }

  volver(): void {
    this.location.back();
  }

  avanzarPaso(): void {
    if (this.pasoActual < this.pasos.length - 1) {
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
