import { Injectable, inject } from '@angular/core';
import { Destination } from '../interfaces/travel.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() { }


  getAllDestinations(): Observable<Destination[]> {
    // Exemple d'appel API pour toutes les destinations
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/`);
  }
  getDestinations(): Observable<Destination[]> {
    return this.getAllDestinations();
  }
}


