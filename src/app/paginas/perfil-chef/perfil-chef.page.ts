import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-perfil-chef',
  templateUrl: './perfil-chef.page.html',
  styleUrls: ['./perfil-chef.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilChefPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
