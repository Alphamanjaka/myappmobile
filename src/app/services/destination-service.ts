import { Injectable, inject } from '@angular/core';
import { Destination, TravelPackage } from '../interfaces/travel.models';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiUrl = 'http://127.0.0.1:8000/api'; // Remplacez par l'URL de votre API Django
  private http = inject(HttpClient);

  constructor() { }

  getFeaturedDestinations(): Observable<Destination[]> {
    // Exemple d'appel API pour les destinations phares
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations/`).pipe(
      map(destinations => destinations.filter(d => d.popularity >= 4)) // Filtrage côté client si l'API ne le fait pas
    );
  }

  getAllDestinations(): Observable<Destination[]> {
    // Exemple d'appel API pour toutes les destinations
    return this.http.get<Destination[]>(`${this.apiUrl}/destinations`);
  }

  getPackagesByDestination(destinationId: number): Observable<TravelPackage[]> {
    // Exemple d'appel API pour les packages d'une destination
    return this.http.get<TravelPackage[]>(`${this.apiUrl}/packages`, { params: { destinationId: destinationId.toString() } });
  }

  getPackageById(packageId: number): Observable<TravelPackage | undefined> {
    // Exemple d'appel API pour un package spécifique
    return this.http.get<TravelPackage>(`${this.apiUrl}/packages/${packageId}`).pipe(
      map(pkg => pkg || undefined) // Retourne undefined si le package n'est pas trouvé
    );
  }
}
