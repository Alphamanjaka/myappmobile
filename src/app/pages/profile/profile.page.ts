// src/app/profile/profile.page.ts
import { Component } from '@angular/core';
import { User, Reservation, Offer, Destination, Category } from 'src/app/interfaces/travel.models'; // Import Offer, Destination, Category
import { IonicModule } from '@ionic/angular';
import { VoucherItemComponent } from "src/app/components/voucher-item/voucher-item.component";
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

// Mock data
const mockCategories: Category[] = [
  { id: 1, name: 'Beach', verbose_name: 'Plage' },
  { id: 2, name: 'Mountain', verbose_name: 'Montagne' },
];

const mockFeaturedDestinations: Destination[] = [
  {
    id: 1,
    name: 'Maldives',
    city: null,
    description: 'Tropical paradise with stunning beaches.',
    images: ['https://source.unsplash.com/random/800x600?maldives,beach', 'https://source.unsplash.com/random/800x601?maldives,beach'],
    latitude: 3.2028,
    longitude: 73.2207,
    category: [mockCategories[0]],
  },
  {
    id: 2,
    name: 'Swiss Alps',
    city: null,
    description: 'Breathtaking mountain range for hiking and skiing.',
    images: ['https://source.unsplash.com/random/800x600?alps,mountain', 'https://source.unsplash.com/random/800x601?alps,mountain'],
    latitude: 46.8,
    longitude: 8.2,
    category: [mockCategories[1]],
  },
];

const mockSpecialOffers: Offer[] = [
  {
    id: 1,
    destination: mockFeaturedDestinations[0],
    title: 'Luxury Villa in Maldives',
    description: '7-night stay in a water villa with private pool.',
    price: 3000,
    start_date: '2025-10-01',
    end_date: '2025-10-31',
    available_slots: 10,
    created_by: null,
    cancellation_policy: 'Flexible',
  },
  {
    id: 2,
    destination: mockFeaturedDestinations[1],
    title: 'Ski Adventure in the Alps',
    description: 'Full-week ski pass and accommodation in a cozy chalet.',
    price: 1500,
    start_date: '2026-01-15',
    end_date: '2026-03-15',
    available_slots: 20,
    created_by: null,
    cancellation_policy: 'Moderate',
  },
];

const mockReservations: Reservation[] = [
  {
    id: 1,
    user: { id: 1, username: 'alpha', email: 'a@a.com' },
    offer: mockSpecialOffers[0],
    reserved_on: '2025-09-10T10:00:00Z',
    number_of_people: 2,
    status: 'confirmed',
  },
  {
    id: 2,
    user: { id: 1, username: 'alpha', email: 'a@a.com' },
    offer: mockSpecialOffers[1],
    reserved_on: '2025-09-05T14:30:00Z',
    number_of_people: 1,
    status: 'pending',
  },
  {
    id: 3,
    user: { id: 1, username: 'alpha', email: 'a@a.com' },
    offer: mockSpecialOffers[0],
    reserved_on: '2025-08-20T09:00:00Z',
    number_of_people: 3,
    status: 'cancelled',
  },
];


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, VoucherItemComponent],
})
export class ProfilePage {
  user: User = { id: 1, username: 'alpha', email: 'a@a.com' };
  reservations: Reservation[] = mockReservations; // Assign mock data

  constructor() {
    addIcons({
      personCircle
    })
  }
}