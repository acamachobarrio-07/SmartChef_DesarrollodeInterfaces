
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonSearchbar
} from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    IonSearchbar,
    RouterLink
  ]
})
export class PrincipalPage {

  // Recetas de ejemplo para el diseño de la página
  recetas = [
    {
      id: 1,
      nombre: 'Tortilla de espinacas y queso',
      tiempo: 10,
      dificultad: 'Fácil',
      ingredientes: 4,
      foto: 'assets/fotos/tortilla.png'
    },
    {
      id: 2,
      nombre: 'Ensalada de garbanzos y aguacate',
      tiempo: 5,
      dificultad: 'Fácil',
      ingredientes: 4,
      foto: 'assets/fotos/ensalada-garbanzos.png'
    },
    {
      id: 3,
      nombre: 'Salteado de Garbanzos con Espinacas y Tomate',
      tiempo: 5,
      dificultad: 'Fácil',
      ingredientes: 4,
      foto: 'assets/fotos/salteado-garbanzos.png'
    }
  ];

}

