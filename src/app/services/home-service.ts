// src/app/services/home.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Destination, Offer } from '../interfaces/travel.models';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:8000/api'; // 👉 adapte avec ton URL Django

  constructor(private http: HttpClient) { }

  getFeaturedDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/?featured=true`);
  }

  getSpecialOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers/?special=true`);
  }

  getPopularDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/?popular=true`);
  }
}
