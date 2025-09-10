import { IonicModule } from '@ionic/angular';
// src/app/components/booking-stepper/booking-stepper.component.ts
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-booking-stepper',
  templateUrl:'./booking-stepper.component.html',
  styles: [`.step-label { text-align:center; margin:8px 0; font-weight:600;}`],
  imports: [IonicModule],
  standalone: true,
})
export class BookingStepperComponent {
  @Input() step = 1;
  @Input() max = 3;
}
