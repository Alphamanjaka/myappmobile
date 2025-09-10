
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, homeSharp, searchOutline, searchSharp, cartOutline, cartSharp, personOutline, personSharp, briefcaseOutline, briefcaseSharp, exitOutline, exitSharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Rechercher', url: '/search', icon: 'search' },
    { title: 'Panier', url: '/cart', icon: 'cart' },
    { title: 'Mes réservations', url: '/booking-history', icon: 'briefcase' },
    { title: 'Profil', url: '/profile', icon: 'person' },
  ];

  constructor() {
    addIcons({ homeOutline, homeSharp, searchOutline, searchSharp, cartOutline, cartSharp, personOutline, personSharp, briefcaseOutline, briefcaseSharp, exitOutline, exitSharp });
  }
}
