import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/services/destination-service';
import { Destination } from 'src/app/interfaces/travel.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
  imports: [FormsModule, RouterLink, CommonModule, IonicModule],
  standalone: true,
})
export class DestinationComponent implements OnInit {
  destinations: Destination[] = [];
  constructor(private destinationService: DestinationService) { }

  ngOnInit() {
    this.destinationService.getAllDestinations().subscribe(destinations => {
      this.destinations = destinations;
    });
  }

}
