import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DestinationService } from '../../services/destination-service';
import { Destination } from '../../interfaces/travel.models';
import { Observable } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink
  ]
})
export class SearchPage implements OnInit {

  public allDestinations$!: Observable<Destination[]>;
  public filteredDestinations: Destination[] = [];
  private destinations: Destination[] = [];
  public searchTerm: string = '';
  public minPrice: number = 0;
  public maxPrice: number = 10000; // Max price for filtering
  public minDuration: number = 0;
  public maxDuration: number = 30; // Max duration for filtering

  constructor(private destinationService: DestinationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const query = params.get('query');
      if (query) {
        this.searchTerm = query;
      }
    });

    this.allDestinations$ = this.destinationService.getAllDestinations();
    this.allDestinations$.subscribe(destinations => {
      this.destinations = destinations;
      this.applyFilters();
    });
  }

  applyFilters() {
    let tempDestinations = this.destinations;

    // Filter by search term
    if (this.searchTerm) {
      tempDestinations = tempDestinations.filter(dest => {
        return dest.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }

    // Filter by price
    tempDestinations = tempDestinations.filter(dest => {
      return dest.averagePrice >= this.minPrice && dest.averagePrice <= this.maxPrice;
    });

    // Filter by duration (assuming duration is available in TravelPackage, not Destination directly).
    // For now, we'll skip duration filtering on Destination directly as it's not in the Destination interface.
    // This would require fetching packages for each destination or adding a min/max duration to Destination.

    this.filteredDestinations = tempDestinations;
  }

  filterDestinations(event: any) {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }

  onPriceChange(event: any) {
    this.minPrice = event.detail.value.lower;
    this.maxPrice = event.detail.value.upper;
    this.applyFilters();
  }

  onDurationChange(event: any) {
    this.minDuration = event.detail.value.lower;
    this.maxDuration = event.detail.value.upper;
    this.applyFilters();
  }
}
