import { Component, OnInit, inject } from '@angular/core';
import { DestinationService } from 'src/app/services/destination-service';
import { Destination } from 'src/app/interfaces/travel.models';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  imports: [FormsModule, RouterLink, IonicModule],
  standalone: true,
})
export class DestinationComponent implements OnInit {
  private destinationService = inject(DestinationService);

  destinations: Destination[] = [];

  ngOnInit() {
    this.destinationService.getAllDestinations().subscribe(destinations => {
      this.destinations = destinations;
    });
  }

}
