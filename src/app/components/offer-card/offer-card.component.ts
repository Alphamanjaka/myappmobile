import { IonicModule } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { Offer } from 'src/app/interfaces/travel.models';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss'],
  styles: [`ion-card { margin: 8px; } img { width: 100%; height: 180px; object-fit: cover;}`],
  standalone: true,
  imports: [IonicModule,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OfferCardComponent {
  @Input() offer!: Offer;
}
