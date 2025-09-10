import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interfaces/travel.models';
import { OfferService } from 'src/app/services/offer-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer',
  imports: [IonicModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
   private offers$!: Observable<Offer[]>;
  filteredOffers: Offer[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';

  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offers$ = this.offerService.getAllOffers();
    this.offers$.subscribe(offers => this.filteredOffers = offers);
  }

  filterOffers(): void {
    this.offers$.subscribe(offers => {
      this.filteredOffers = offers.filter(offer =>
        offer.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory ? offer.destination.name === this.selectedCategory : true)
      );
    });
  }
}
