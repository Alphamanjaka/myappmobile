export interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  averagePrice: number;
  popularity: number; // from 1 to 5
}

export interface TravelPackage {
  id: number;
  destinationId: number;
  name: string;
  description: string;
  photos: string[];
  price: number;
  duration: number; // in days
  included: string[];
  reviews: ClientReview[];
  availability: Date[];
  cancellationPolicy: string;
}

export interface ClientReview {
  author: string;
  rating: number; // from 1 to 5
  comment: string;
}

export interface CartItem {
  package: TravelPackage;
  travelers: number;
  date: Date;
}

export interface Booking {
  id: string;
  userId: number;
  items: CartItem[];
  totalPrice: number;
  bookingDate: Date;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
