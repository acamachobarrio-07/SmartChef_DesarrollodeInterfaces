import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonInput, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contrasena-olvidada-chef',
  templateUrl: './contrasena-olvidada-chef.page.html',
  styleUrls: ['./contrasena-olvidada-chef.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonInput, IonRouterLink, RouterLink]
})
export class ContrasenaOlvidadaChefPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
