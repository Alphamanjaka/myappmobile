import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/interfaces/travel.models';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-offer-card-horizontal',
  templateUrl: './offer-card-horizontal.component.html',
  styleUrls: ['./offer-card-horizontal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfferCardHorizontalComponent {
  @Input() offer!: Offer;

  constructor(private router: Router) { }
  goToDetail(id: number) {
    this.router.navigate(['/tabs/offer-detail/', id]);
  }
}
