import { IonicModule } from '@ionic/angular';
// src/app/home/home.page.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular'; // pour le comportement natif Ionic (optionnel)
import { CommonModule } from '@angular/common';
import { Destination, Offer } from 'src/app/interfaces/travel.models';
import { DestinationService } from 'src/app/services/destination-service';
import { OfferService } from 'src/app/services/offer-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage {
  @ViewChild('swiper', { static: false }) swiperRef?: ElementRef;

  // Ajoute IonicSlides si tu veux conserver le réglage natif (conseillé pour ressentir comme ion-slides)
  swiperModules = [IonicSlides];
  constructor(private destinationService: DestinationService, private offerServices: OfferService) { }

  featuredDestinations: Destination[] = [
    {
      id: 1,
      name: 'Nosy Be',
      city: null,
      description: 'Plages paradisiaques et plongée',
      image: 'assets/nosybe.jpg',
      latitude: 0,
      longitude: 0,
      category: []
    },
    {
      id: 2,
      name: 'Isalo',
      city: null,
      description: 'Randonnées au cœur des canyons',
      image: 'assets/isalo.jpg',
      latitude: 0,
      longitude: 0,
      category: []
    }
  ];

  specialOffers: Offer[] = [
    {
      id: 1,
      destination: this.featuredDestinations[0],
      title: 'Séjour 3 jours Nosy Be',
      description: 'Hôtel + activités nautiques inclus',
      price: 450000,
      start_date: '2025-09-01',
      end_date: '2025-09-05',
      available_slots: 10,
      created_by: null,
      cancellation_policy: 'Annulation gratuite 48h'
    }
  ];

  popularDestinations: Destination[] = [
    {
      id: 3,
      name: 'Antananarivo',
      city: null,
      description: 'Capitale, culture et gastronomie',
      image: 'assets/tana.jpg',
      latitude: 0,
      longitude: 0,
      category: []
    },
    {
      id: 4,
      name: 'Diego Suarez',
      city: null,
      description: 'Mer d’émeraude et nature sauvage',
      image: 'assets/diego.jpg',
      latitude: 0,
      longitude: 0,
      category: []
    }
  ];

  ngOnInit() {
    // Tu peux aussi charger dynamiquement depuis un service
    this.destinationService.getDestinations().subscribe((data) => {
      console.log('Destinations chargées:', data);
      // Par exemple, tu pourrais filtrer ou trier ici
      this.featuredDestinations = data.slice(0, 2); // Prend les 2 premières comme exemples
      this.popularDestinations = data.slice(2, 4); // Prend les suivantes comme exemples
    });
    this.offerServices.getOffers().subscribe((data) => {
      console.log('Offres chargées:', data);
      this.specialOffers = data.slice(0, 1); // Prend la première comme exemple
    });
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
