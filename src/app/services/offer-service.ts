import { inject, Injectable } from '@angular/core';
import { Offer } from '../interfaces/travel.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private apiUrl = environment.apiUrl;
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
  getOffers(): Observable<Offer[]> {
    return this.getAllOffers();
  }

}


