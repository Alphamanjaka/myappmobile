import { Injectable, inject } from '@angular/core';
import { Destination } from '../interfaces/travel.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Remplacez par l'URL de votre API Django
  private http = inject(HttpClient);

  constructor() { }


  getAllDestinations(): Observable<Destination[]> {
    // Exemple d'appel API pour toutes les destinations
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/`);
  }
}


