import { IonicModule } from '@ionic/angular';
// src/app/cart/cart.page.ts
import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/travel.models';
import { BookingStepperComponent } from 'src/app/components/booking-stepper/booking-stepper.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, BookingStepperComponent,CommonModule],
})
export class CartPage {
  step = 1;
  cart: Cart = { id: 1, user: { id: 1, username: 'alpha', email: 'a@a.com' }, created_at: new Date().toISOString(), items: [] };
  checkout() {
    this.step++;
  }
}
