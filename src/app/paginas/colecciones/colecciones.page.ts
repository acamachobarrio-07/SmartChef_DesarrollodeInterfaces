import { Component } from '@angular/core';
import { IonContent, IonSearchbar } from '@ionic/angular';

import { CabeceraComponent } from '../../componentes/cabecera/cabecera.component';
import { TarjetaColeccionComponent } from '../../componentes/tarjeta-coleccion/tarjeta-coleccion.component';
import { COLECCIONES } from '../../datos/colecciones';

@Component({
  selector: 'app-colecciones',
  templateUrl: './colecciones.page.html',
  styleUrls: ['./colecciones.page.scss'],
  imports: [IonContent, IonSearchbar, CabeceraComponent, TarjetaColeccionComponent]
})
export class ColeccionesPage {

  colecciones = COLECCIONES;

}
