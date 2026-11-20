import { Component } from '@angular/core';
import { IonContent, IonIcon, IonCard, IonCardContent, IonModal } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { arrowBack, arrowForward, calendarOutline } from 'ionicons/icons';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaComidaComponent } from '../../componentes/tarjeta-comida/tarjeta-comida.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';

import { Receta } from '../../modelos/receta';
import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';
import { PLAN_SEMANAL } from '../../datos/plan-semanal';

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
    CabeceraComponent,
    TarjetaComidaComponent,
    ConfirmacionRecetaComponent
  ]
})
export class PlanSemanalPage {

  dias = PLAN_SEMANAL;
  recetas = RECETAS_EJEMPLO;

  // Es una maqueta: la semana es fija y elegir receta solo muestra la confirmación
  semana = '16 - 22 de noviembre';

  modalRecetasAbierto = false;
  comidaSeleccionada = '';
  recetaElegida: Receta | null = null;

  constructor() {
    addIcons({ arrowBack, arrowForward, calendarOutline });
  }

  abrirRecetas(dia: string, comida: string): void {
    this.comidaSeleccionada = comida + ' · ' + dia;
    this.recetaElegida = null;
    this.modalRecetasAbierto = true;
  }

}
