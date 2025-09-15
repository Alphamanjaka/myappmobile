import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Destination } from 'src/app/interfaces/travel.models';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DestinationCardComponent {
  @Input() destination!: Destination;

  constructor() { }
}