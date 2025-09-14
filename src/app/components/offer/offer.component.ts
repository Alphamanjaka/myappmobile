import { Component, OnInit, inject } from '@angular/core';
import { Offer } from 'src/app/interfaces/travel.models';
import { OfferService } from 'src/app/services/offer-service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, IonicModule]
})
export class OfferComponent implements OnInit {
  private offerService = inject(OfferService);

  offers: Offer[] = [];
  filteredOffers: Offer[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  ngOnInit(): void {
    this.offerService.getAllOffers().subscribe(data => {
      this.offers = data;
      this.filteredOffers = data;
    });
  }

  filterOffers(): void {
    this.filteredOffers = this.offers.filter(offer =>
      offer.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
      (this.selectedCategory ? offer.destination.category.some(cat => cat.name === this.selectedCategory) : true)
    );
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterOffers();
  }

  clearCategory(): void {
    this.selectedCategory = '';
    this.filterOffers();
  }
}
