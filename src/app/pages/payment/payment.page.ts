import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PaymentPage implements OnInit {
  private router = inject(Router);
  private cartService = inject(CartService);


  ngOnInit() {
  }

  processPayment(method: string) {
    console.log(`Processing payment with ${method}`);
    // Simulate payment success
    this.cartService.clearCart(); // Clear cart after successful payment
    this.router.navigateByUrl('/booking-history'); // Redirect to booking history
  }
}
