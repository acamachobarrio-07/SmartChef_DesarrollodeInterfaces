import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-plan-semanal-login',
  templateUrl: './plan-semanal-login.page.html',
  styleUrls: ['./plan-semanal-login.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlanSemanalLoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
