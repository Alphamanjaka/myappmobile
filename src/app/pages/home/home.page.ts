import { IonicModule } from '@ionic/angular';
// src/app/home/home.page.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular'; // pour le comportement natif Ionic (optionnel)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  @ViewChild('swiper', { static: false }) swiperRef?: ElementRef;

  // Ajoute IonicSlides si tu veux conserver le réglage natif (conseillé pour ressentir comme ion-slides)
  swiperModules = [IonicSlides];

  featuredDestinations = [
    { id: 1, name: 'Nosy Be', description: 'Plages et soleil', image: 'assets/nosybe.jpg' },
    { id: 2, name: 'RN7', description: 'Route touristique', image: 'assets/rn7.jpg' },
    // ...
  ];

  onInit(e: any) {
    console.log('swiper init', e);
  }
  onSlideChange(e: any) {
    // e.target est le DOM element swiper-container
    const active = this.swiperRef?.nativeElement.swiper?.activeIndex;
    console.log('slide changed, activeIndex=', active);
  }

  // Exemple: accéder à l'instance Swiper
  goToNext() {
    this.swiperRef?.nativeElement.swiper?.slideNext();
  }
}
