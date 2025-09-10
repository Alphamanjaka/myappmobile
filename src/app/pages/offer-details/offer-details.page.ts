import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../../services/destination-service';
import { TravelPackage } from '../../interfaces/travel.models';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OfferDetailsPage implements OnInit {

  public package$!: Observable<TravelPackage | undefined>;
  private packageId!: number;

  constructor(
    private route: ActivatedRoute,
    private destinationService: DestinationService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.packageId = +id;
      this.package$ = this.destinationService.getPackageById(this.packageId);
    }
  }

  addToCart(pkg: TravelPackage) {
    const item = { package: pkg, travelers: 1, date: new Date() };
    this.cartService.addToCart(item);
    // Add toast notification here later
  }
}
