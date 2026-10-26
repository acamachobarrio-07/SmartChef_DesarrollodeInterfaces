import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-plan-semanal',
  templateUrl: './plan-semanal.page.html',
  styleUrls: ['./plan-semanal.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlanSemanalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
