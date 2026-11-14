import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-lista-compra-login',
  templateUrl: './lista-compra-login.page.html',
  styleUrls: ['./lista-compra-login.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListaCompraLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
