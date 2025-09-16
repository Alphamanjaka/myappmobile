// src/app/services/home.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination, Offer } from '../interfaces/travel.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl;
  featuredDestinations: Destination[] = [
    {
      id: 1,
      name: 'Maldives',
      city: null,
      description: 'Tropical paradise with stunning beaches.',
      images: ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/e9/f9/21/piscine-en-fin-de-soiree.jpg?w=1800&h=1000&s=1',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e3/94/23/manafiafy-beach-rainforest.jpg?w=1000&h=600&s=1',
        'https://www.responsiblevacation.com/imagesclient/L_115524.jpg',
        'https://www.responsiblevacation.com/imagesclient/L_319438.jpg'
      ],
      latitude: 3.2028,
      longitude: 73.2207,
      category: [{ id: 1, name: 'Beach', verbose_name: 'Plage' }],
    },
    {
      id: 2,
      name: 'Swiss Alps',
      city: null,
      description: 'Breathtaking mountain range for hiking and skiing.',
      images: ['https://www.responsiblevacation.com/imagesclient/L_115517.jpg',
        'https://www.responsiblevacation.com/imagesclient/L_115523.jpg',
        'https://www.responsiblevacation.com/imagesclient/L_319444.jpg',
      'https://www.responsiblevacation.com/imagesclient/L_115516.jpg'],
      latitude: 46.8,
      longitude: 8.2,
      category: [{ id: 2, name: 'Mountain', verbose_name: 'Montagne' }],
    },
  ];

  specialOffers: Offer[] = [
    {
      id: 1,
      destination: this.featuredDestinations[0],
      title: 'Luxury Villa in Maldives',
      description: '7-night stay in a water villa with private pool.',
      price: 3000000,
      start_date: '2025-10-01',
      end_date: '2025-10-31',
      available_slots: 10,
      created_by: null,
      cancellation_policy: 'Flexible',
    },
    {
      id: 2,
      destination: this.featuredDestinations[1],
      title: 'Ski Adventure in the Alps',
      description: 'Full-week ski pass and accommodation in a cozy chalet.',
      price: 150000,
      start_date: '2026-01-15',
      end_date: '2026-03-15',
      available_slots: 20,
      created_by: null,
      cancellation_policy: 'Moderate',
    },
  ];

  popularDestinations: Destination[] = [...this.featuredDestinations].reverse();


  getFeaturedDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/?featured=true`);
  }

  getSpecialOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers/?special=true`);
  }

  getPopularDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/?popular=true`);
  }
  getFeaturedDestinationsTest(): Destination[] {
    return this.featuredDestinations;
  }

  getSpecialOffersTest(): Offer[] {
    return this.specialOffers;
  }

  getPopularDestinationsTest(): Destination[] {
    return this.popularDestinations;
  }
}
