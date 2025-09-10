import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/services/destination-service';
import { Destination } from 'src/app/interfaces/travel.models';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  standalone: true,
})
export class DestinationComponent implements OnInit {
  private destinations: Destination[] = [];
  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinationService.getAllDestinations().subscribe(destinations => {
      this.destinations = destinations;
    });
  }

}
