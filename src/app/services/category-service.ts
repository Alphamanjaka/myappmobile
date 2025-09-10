import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../interfaces/travel.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private http = inject(HttpClient);

  constructor() { }

  getAllCategories() {
    return this.http.get<Category[]>(`${this.apiUrl}/categories/`);
  }
}
