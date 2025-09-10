import { Category } from './../../interfaces/travel.models';
import { IonicModule } from '@ionic/angular';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Offer } from 'src/app/interfaces/travel.models';
import { OfferService } from 'src/app/services/offer-service';
import { CategoryService } from 'src/app/services/category-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class OfferComponent implements OnInit {
  private offers: Offer[] = [];
  private offerService = inject(OfferService);
  private Categories: Category[] = [];
  private categoryService = inject(CategoryService);
  filteredOffers: Offer[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  ngOnInit(): void {
    this.offerService.getAllOffers().subscribe(offers => {
      this.offers = offers;
      this.filteredOffers = offers;
    });
    this.categoryService.getAllCategories().subscribe(categories => {
      this.Categories = categories;
    });
  }

  filterOffers(): void {

  }
}
