import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import {
  IonContent,
  IonIcon,
  IonSearchbar
} from '@ionic/angular';
import { Receta } from '../../modelos/receta';
import {TarjetaRecetaComponent} from "../../componentes/tarjeta-receta/tarjeta-receta.component";
import { RECETAS_RECOMENDADAS } from '../../datos/recetas-recomendadas';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonSearchbar,
    RouterLink,
    TarjetaRecetaComponent,
    CabeceraComponent
  ]
})
export class PrincipalPage {
  recetas = RECETAS_RECOMENDADAS;
}

