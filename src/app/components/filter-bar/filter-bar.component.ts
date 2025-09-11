// src/app/components/filter-bar/filter-bar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { optionsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class FilterBarComponent {
  @Output() search = new EventEmitter<string>();
  @Output() filter = new EventEmitter<void>();


  onSearch(ev: any) {
    this.search.emit(ev.target.value);
  }
  openFilters() {
    this.filter.emit();
  }
  constructor() {
    addIcons({
      optionsOutline
    })
  }
}
