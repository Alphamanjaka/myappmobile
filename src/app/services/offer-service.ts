import { inject, Injectable } from '@angular/core';
import { Offer } from '../interfaces/travel.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Remplacez par l'URL de votre API Django
  private http = inject(HttpClient);


  constructor() { }

  getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/offers/`);
  }
  getOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.apiUrl}/offers/${id}/`);
  }
  getTopOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}/top-offers/`);
  }

}


