import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-colecciones-login',
  templateUrl: './colecciones-login.page.html',
  styleUrls: ['./colecciones-login.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ColeccionesLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
