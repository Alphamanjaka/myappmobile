import { IonicModule } from '@ionic/angular';
// src/app/components/voucher-item/voucher-item.component.ts
import { Component, Input } from '@angular/core';
import { Reservation } from 'src/app/interfaces/travel.models';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-voucher-item',
  templateUrl: './voucher-item.component.html',
  styleUrls: ['./voucher-item.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class VoucherItemComponent {
  @Input() reservation!: Reservation;
}
