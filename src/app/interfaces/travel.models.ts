export interface City {
  id: number;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface Destination {
  id: number;
  name: string;
  city: City | null;
  description: string;
  image: string | null;
  latitude: number;
  longitude: number;
}

export interface Offer {
  id: number;
  destination: Destination;
  title: string;
  description: string;
  price: number;
  start_date: string; // ISO format
  end_date: string;
  available_slots: number;
  created_by: User | null;
  cancellation_policy: string;
}

export interface Review {
  id: number;
  offer: Offer;
  user: User;
  rating: number;
  comment: string;
  created_at: string;
}
export interface Reservation {
  id: number;
  user: User;
  offer: Offer;
  reserved_on: string;
  number_of_people: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}export interface Cart {
  id: number;
  user: User;
  created_at: string;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  cart: number; // ou Cart si tu veux l'objet complet
  offer: Offer;
  quantity: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  // Ajoute d'autres champs si ton API les expose
}
