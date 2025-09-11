import { IonicModule } from '@ionic/angular';
// src/app/search/search.page.ts
import { Component } from '@angular/core';
import { Offer } from 'src/app/interfaces/travel.models';
import { FilterBarComponent } from 'src/app/components/filter-bar/filter-bar.component';
import { OfferCardComponent } from 'src/app/components/offer-card/offer-card.component';
import { CommonModule } from '@angular/common';
import { OfferService } from 'src/app/services/offer-service';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, OfferCardComponent, FilterBarComponent, CommonModule],
})
export class SearchPage {
  offers: Offer[] = [];
  onSearch(query: string) {
    // TODO: filter offers from API
    console.log(query);
  }
  openFilters() {
    // TODO: open modal with filters
    console.log('open filters');

  }
  constructor(private offerServices: OfferService) { }

  ngOnInit(): void {
    this.offerServices.getAllOffers().subscribe(data => {
      this.offers = data;
    });
  }
}
