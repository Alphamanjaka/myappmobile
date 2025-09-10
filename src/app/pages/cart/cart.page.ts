import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/travel.models';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CartPage implements OnInit {

  public cartItems$!: Observable<CartItem[]>;
  public total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems$ = this.cartService.cartItems$;
    this.cartItems$.subscribe(items => {
      this.total = items.reduce((acc, item) => acc + item.package.price * item.travelers, 0);
    });
  }

  removeItem(itemId: number) {
    this.cartService.removeItem(itemId);
  }
}
