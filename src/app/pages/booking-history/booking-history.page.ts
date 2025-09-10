import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Booking } from '../../interfaces/travel.models';
import { of } from 'rxjs';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BookingHistoryPage implements OnInit {

  public bookings: Booking[] = [ ];

  constructor() { }

  ngOnInit() {
    // In a real app, you would fetch this from a service
    of(this.bookings).subscribe(data => this.bookings = data);
  }
}
