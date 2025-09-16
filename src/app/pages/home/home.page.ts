
// src/app/home/home.page.ts
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

import { Destination, Offer } from 'src/app/interfaces/travel.models';
import { HomeService } from 'src/app/services/home-service';
import { addIcons } from 'ionicons';
import { libraryOutline, sunnyOutline, trailSignOutline, sparklesOutline } from 'ionicons/icons';
import { DestinationCardComponent } from 'src/app/components/destination-card/destination-card.component';
import { OfferCardHorizontalComponent } from 'src/app/components/offer-card-horizontal/offer-card-horizontal.component';
import { ChatbotComponent } from 'src/app/components/chatbot/chatbot.component';
import { IonicModule, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, DestinationCardComponent, OfferCardHorizontalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  private homeService = inject(HomeService);
  private modalCtrl = inject(ModalController);

  @ViewChild('swiper', { static: false }) swiperRef?: ElementRef;

  swiperModules = [IonicSlides];
  loading = false;

  featuredDestinations: Destination[] = [];

  specialOffers: Offer[] = [];

  popularDestinations: Destination[] = [];


  ngOnInit() {
    this.loadDataTest();
    addIcons({
      trailSignOutline,
      sunnyOutline,
      libraryOutline,
      sparklesOutline
    })
  }
  onSlideChange(e: any) {
    const active = this.swiperRef?.nativeElement.swiper?.activeIndex;
    console.log('slide changed, activeIndex=', active);
  }

  goToNext() {
    this.swiperRef?.nativeElement.swiper?.slideNext();
  }

  async openChatbot() {
    const modal = await this.modalCtrl.create({
      component: ChatbotComponent,
    });
    modal.present();
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
  loadDataTest() {
    this.loading = true;
    this.featuredDestinations = this.homeService.getFeaturedDestinationsTest();
    this.specialOffers = this.homeService.getSpecialOffersTest();
    this.popularDestinations = this.homeService.getPopularDestinationsTest();
  }

}
