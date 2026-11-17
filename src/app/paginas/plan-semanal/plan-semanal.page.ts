
import { Component } from '@angular/core';

import {
  IonContent,
  IonIcon,
  IonCard,
  IonCardContent,
  IonModal,
  IonDatetime
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  arrowBack,
  arrowForward,
  calendarOutline
} from 'ionicons/icons';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaComidaComponent } from '../../componentes/tarjeta-comida/tarjeta-comida.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { Receta } from '../../modelos/receta';
import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';

@Component({
  selector: 'app-plan-semanal',
  templateUrl: './plan-semanal.page.html',
  styleUrls: ['./plan-semanal.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonCard,
    IonCardContent,
    IonModal,
    IonDatetime,
    CabeceraComponent,
    TarjetaComidaComponent,
    ConfirmacionRecetaComponent
  ]
})
export class PlanSemanalPage {

  recetas = RECETAS_EJEMPLO;

  comidas = ['Desayuno', 'Almuerzo', 'Cena'];

  inicioSemana = new Date();

  plan: Record<string, Receta> = {};

  calendarioAbierto = false;
  modalRecetasAbierto = false;
  modalConfirmacionAbierto = false;

  fechaSeleccionada: Date | null = null;
  comidaSeleccionada = '';

  mensajeConfirmacion = '';

  constructor() {

    addIcons({
      arrowBack,
      arrowForward,
      calendarOutline
    });

    this.inicioSemana = this.obtenerLunes(new Date());

    // Recetas de ejemplo para mostrar el diseño
    const lunes = this.inicioSemana;

    this.plan[this.clave(lunes, 'Desayuno')] = this.recetas[0];
    this.plan[this.clave(lunes, 'Almuerzo')] = this.recetas[1];
    this.plan[this.clave(lunes, 'Cena')] = this.recetas[2];

  }

  obtenerLunes(fecha: Date): Date {

    const lunes = new Date(fecha);

    const dia = lunes.getDay();
    const diferencia = dia === 0 ? -6 : 1 - dia;

    lunes.setDate(lunes.getDate() + diferencia);
    lunes.setHours(12, 0, 0, 0);

    return lunes;
  }

  get dias(): Date[] {

    const resultado: Date[] = [];

    for (let i = 0; i < 7; i++) {

      const fecha = new Date(this.inicioSemana);
      fecha.setDate(fecha.getDate() + i);

      resultado.push(fecha);
    }

    return resultado;
  }

  get tituloSemana(): string {

    const lunes = this.dias[0];
    const domingo = this.dias[6];

    const mesLunes = lunes.toLocaleDateString('es-ES', {
      month: 'long'
    });

    const mesDomingo = domingo.toLocaleDateString('es-ES', {
      month: 'long'
    });

    if (mesLunes === mesDomingo) {
      return `${lunes.getDate()} - ${domingo.getDate()} de ${mesDomingo}`;
    }

    return `${lunes.getDate()} ${mesLunes} - ${domingo.getDate()} ${mesDomingo}`;
  }

  cambiarSemana(cantidad: number): void {

    const fecha = new Date(this.inicioSemana);

    fecha.setDate(fecha.getDate() + cantidad * 7);

    this.inicioSemana = fecha;
  }

  abrirCalendario(): void {
    this.calendarioAbierto = true;
  }

  get fechaCalendario(): string {
    return this.formatoFecha(this.inicioSemana);
  }

  elegirFecha(valor: string | string[] | null | undefined): void {

    if (typeof valor !== 'string') {
      return;
    }

    const fecha = new Date(valor.substring(0, 10) + 'T12:00:00');

    this.inicioSemana = this.obtenerLunes(fecha);
    this.calendarioAbierto = false;
  }

  formatoFecha(fecha: Date): string {

    const anio = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');

    return `${anio}-${mes}-${dia}`;
  }

  clave(fecha: Date, comida: string): string {
    return `${this.formatoFecha(fecha)}_${comida}`;
  }

  obtenerReceta(fecha: Date, comida: string): Receta | null {
    return this.plan[this.clave(fecha, comida)] || null;
  }

  nombreDia(fecha: Date): string {

    return fecha.toLocaleDateString('es-ES', {
      weekday: 'long'
    });
  }

  abrirRecetas(fecha: Date, comida: string): void {

    this.fechaSeleccionada = fecha;
    this.comidaSeleccionada = comida;

    this.modalRecetasAbierto = true;
  }

  elegirReceta(receta: Receta): void {

    this.mensajeConfirmacion =
      `Has seleccionado ${receta.nombre}. La planificación estará disponible próximamente.`;

    this.modalRecetasAbierto = false;
  }

  alCerrarRecetas(): void {
    this.modalRecetasAbierto = false;

    if (this.mensajeConfirmacion) {
      this.modalConfirmacionAbierto = true;
    }
  }

}

