import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';
import { OfferService } from 'src/app/services/offer-service';
import { Observable } from 'rxjs';
import { Offer } from 'src/app/interfaces/travel.models';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.page.html',
  styleUrls: ['./offer.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule,RouterLink]
})
export class OfferPage implements OnInit {

  public offers$!: Observable<Offer[]>;

  constructor(private offerService: OfferService) { }

  ngOnInit() {
    this.offers$ = this.offerService.getAllOffers();
  }

}
