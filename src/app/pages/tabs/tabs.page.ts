import { addIcons } from 'ionicons';
import { Component, EnvironmentInjector, inject } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonLabel, IonTabButton, IonTabs, IonIcon, IonTabBar } from '@ionic/angular/standalone';
import { homeOutline, searchOutline, cartOutline, personCircleOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabBar, IonIcon, IonTabs, IonTabButton, IonLabel, FormsModule]
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    // ⚡ On enregistre uniquement les icônes nécessaires
    addIcons({
      homeOutline,
      searchOutline,
      cartOutline,
      personCircleOutline,
      notificationsOutline
    });
   }



}
