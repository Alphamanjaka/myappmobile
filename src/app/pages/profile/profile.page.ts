// src/app/profile/profile.page.ts
import { Component } from '@angular/core';
import { User, Reservation } from 'src/app/interfaces/travel.models';
import { IonicModule } from '@ionic/angular';
import { VoucherItemComponent } from "src/app/components/voucher-item/voucher-item.component";
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, VoucherItemComponent],
})
export class ProfilePage {
  user: User = { id: 1, username: 'alpha', email: 'a@a.com' };
  reservations: Reservation[] = [];

  constructor() {
    addIcons({
      personCircle
    })
  }
}

