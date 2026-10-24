
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { TabsPage } from "./paginas/tabs/tabs.page";

// Importamos los iconos
import { addIcons } from 'ionicons';
import {
  homeOutline,
  nutritionOutline,
  clipboardOutline,
  calendarOutline,
  bookmarkOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, TabsPage],
})
export class AppComponent {

  constructor() {
    addIcons({
      homeOutline,
      nutritionOutline,
      clipboardOutline,
      calendarOutline,
      bookmarkOutline
    });
  }

}
