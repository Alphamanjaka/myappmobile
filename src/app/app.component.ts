import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSpinner, IonContent } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';
import { SplashScreen } from '@capacitor/splash-screen';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonContent, IonSpinner, IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  loading = true;
  constructor() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);

  }
  ngOnInit() {
    // Simule un délai avant d'afficher Home
    setTimeout(() => {
      this.loading = false;
    }, 2500); // 2.5s splash
  }
}
