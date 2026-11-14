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
  bookmarkOutline, personCircleOutline, timeOutline, checkmarkCircle, chevronForwardCircle, mailOutline,
  lockClosedOutline, eyeOffOutline, leaf, menuOutline, searchOutline
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
      bookmarkOutline,
      personCircleOutline,
      timeOutline,
      checkmarkCircle,
      chevronForwardCircle,
      mailOutline,
      lockClosedOutline,
      eyeOffOutline,
      leaf,
      searchOutline,
      menuOutline

    });

    const modoOscuro = localStorage.getItem('modoOscuro') === 'true';

    document.documentElement.classList.toggle(
      'ion-palette-dark',
      modoOscuro
    );
  }

}
