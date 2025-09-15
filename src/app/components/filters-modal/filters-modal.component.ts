import { OnInit } from '@angular/core';
// filters-modal.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { closeCircle } from 'ionicons/icons';
@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class FiltersModalComponent {
  @Output() applyFilters = new EventEmitter<any>();

  filters = {
    priceOrder: '',
    destination: '',
    dateRange: { start: '', end: '' },
  };

  submit() {
    this.applyFilters.emit(this.filters);
  }
  destinationInput = '';
  categoryInput = '';

  allDestinations = ['Nosy Be', 'Isalo', 'Andringitra', 'Sainte Marie', 'Antananarivo'];
  allCategories = ['Plage', 'Montagne', 'Culture', 'Aventure', 'Relaxation'];

  selectedDestinations: string[] = [];
  selectedCategories: string[] = [];

  filteredDestinations: string[] = [];
  filteredCategories: string[] = [];

  filterDestinations() {
    const query = this.destinationInput.toLowerCase();
    this.filteredDestinations = this.allDestinations.filter(dest =>
      dest.toLowerCase().includes(query) && !this.selectedDestinations.includes(dest)
    );
  }

  filterCategories() {
    const query = this.categoryInput.toLowerCase();
    this.filteredCategories = this.allCategories.filter(cat =>
      cat.toLowerCase().includes(query) && !this.selectedCategories.includes(cat)
    );
  }

  selectDestination(dest: string) {
    this.selectedDestinations.push(dest);
    this.destinationInput = '';
    this.filteredDestinations = [];
  }

  selectCategory(cat: string) {
    this.selectedCategories.push(cat);
    this.categoryInput = '';
    this.filteredCategories = [];
  }

  removeDestination(dest: string) {
    this.selectedDestinations = this.selectedDestinations.filter(d => d !== dest);
  }

  removeCategory(cat: string) {
    this.selectedCategories = this.selectedCategories.filter(c => c !== cat);
  }
  OnInit() {
    addIcons(
      {
        closeCircle,
      }
    );
  }
}
