import { IonicModule } from '@ionic/angular';
// src/app/home/home.page.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular'; // pour le comportement natif Ionic (optionnel)
import { CommonModule } from '@angular/common';
import { Destination, Offer } from 'src/app/interfaces/travel.models';
import { DestinationService } from 'src/app/services/destination-service';
import { OfferService } from 'src/app/services/offer-service';
import { HomeService } from 'src/app/services/home-service';
import { addIcons } from 'ionicons';
import { libraryOutline, sunnyOutline, trailSignOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  @ViewChild('swiper', { static: false }) swiperRef?: ElementRef;

  // Ajoute IonicSlides si tu veux conserver le réglage natif (conseillé pour ressentir comme ion-slides)
  swiperModules = [IonicSlides];
  loading= true;
  constructor(private homeService: HomeService) { }

  featuredDestinations: Destination[] = [];

  specialOffers: Offer[] = [];

  popularDestinations: Destination[] = [];


  ngOnInit() {
    this.loadData();
    addIcons({
      trailSignOutline,
      sunnyOutline,
      libraryOutline
    })
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

  loadData() {
    this.loading = true;

    this.homeService.getFeaturedDestinations().subscribe({
      next: (data) => (this.featuredDestinations = data),
      error: (err) => console.error('Erreur destinations phares', err),
    });

    this.homeService.getSpecialOffers().subscribe({
      next: (data) => (this.specialOffers = data),
      error: (err) => console.error('Erreur offres spéciales', err),
    });

    this.homeService.getPopularDestinations().subscribe({
      next: (data) => {
        this.popularDestinations = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur destinations populaires', err);
        this.loading = false;
      },
    });
  }
}

