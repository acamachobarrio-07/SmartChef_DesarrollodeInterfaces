import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.page.html',
  styleUrls: ['./ingredientes.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IngredientesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
