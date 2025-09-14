// filters-modal.component.ts
import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filters-modal',
  templateUrl: './filters-modal.component.html',
  styleUrls: ['./filters-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule,FormsModule],
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
}
