import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/travel.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class BookingPage implements OnInit {

  public cartItems: CartItem[] = [];
  public total = 0;
  public bookingForm!: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartItems.reduce((acc, item) => acc + item.package.price * item.travelers, 0);

    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  confirmBooking() {
    if (this.bookingForm.valid) {
      // Here you would typically send the booking data to your backend API
      console.log('Booking confirmed:', this.bookingForm.value, this.cartItems);
      this.router.navigateByUrl('/payment');
    } else {
      // Show validation errors
      this.bookingForm.markAllAsTouched();
    }
  }
}
