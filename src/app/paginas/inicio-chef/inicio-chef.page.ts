import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  IonModal,
  IonPopover,
  IonSegment,
  IonSegmentButton
} from '@ionic/angular';

import { FormularioRecetaComponent } from '../../componentes/formulario-receta/formulario-receta.component';
import { ConfirmacionRecetaComponent } from '../../componentes/confirmacion-receta/confirmacion-receta.component';
import { TarjetaRecetaComponent } from '../../componentes/tarjeta-receta/tarjeta-receta.component';
import { MenuPerfilComponent } from '../../componentes/menu-perfil/menu-perfil.component';
import { RankingRecetasComponent } from '../../componentes/ranking-recetas/ranking-recetas.component';

import { Receta } from '../../modelos/receta';

import { RECETAS_EJEMPLO } from '../../datos/recetas-ejemplo';
import { PERFIL_CHEF } from '../../datos/perfiles';
import { PERIODO_INFORME, RECETAS_MAS_COCINADAS, RECETAS_MAS_GUARDADAS } from '../../datos/informes';

import { addIcons } from 'ionicons';
import {
  addOutline,
  createOutline,
  trashOutline,
  chevronForwardOutline,
  barChartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-inicio-chef',
  templateUrl: './inicio-chef.page.html',
  styleUrls: ['./inicio-chef.page.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonIcon,
    IonLabel,
    IonModal,
    IonPopover,
    IonSegment,
    IonSegmentButton,
    FormularioRecetaComponent,
    ConfirmacionRecetaComponent,
    TarjetaRecetaComponent,
    MenuPerfilComponent,
    RankingRecetasComponent
  ]
})
export class InicioChefPage {

  nombreChef = PERFIL_CHEF.nombre;
  recetasChef = RECETAS_EJEMPLO;

  modalAnadirAbierto = false;
  anadida = false;

  modalRecetasAbierto = false;
  accion: 'modificar' | 'eliminar' = 'modificar';
  pantalla = 'lista';
  recetaSeleccionada: Receta | null = null;

  modalInformesAbierto = false;
  vistaInforme = 'cocinadas';
  periodoInforme = PERIODO_INFORME;
  recetasMasCocinadas = RECETAS_MAS_COCINADAS;
  recetasMasGuardadas = RECETAS_MAS_GUARDADAS;

  constructor() {
    addIcons({
      addOutline,
      createOutline,
      trashOutline,
      chevronForwardOutline,
      barChartOutline
    });
  }

  // modal de añadir recetas
  abrirAnadir(): void {
    this.anadida = false;
    this.modalAnadirAbierto = true;
  }

  // abrimos la lista de las recetas para modificar o eliminar
  abrirRecetas(accion: 'modificar' | 'eliminar'): void {
    this.accion = accion;
    this.pantalla = 'lista';
    this.recetaSeleccionada = null;
    this.modalRecetasAbierto = true;
  }

  // cuando pulsamos una receta pasamos a su formulario o a su aviso
  seleccionarReceta(receta: Receta): void {
    this.recetaSeleccionada = receta;

    if (this.accion === 'modificar') {
      this.pantalla = 'formulario';
    } else {
      this.pantalla = 'aviso';
    }
  }
}
