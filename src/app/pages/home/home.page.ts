import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DestinationService } from '../../services/destination-service';
import { Destination } from '../../interfaces/travel.models';
import { Observable } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class HomePage implements OnInit {

  public featuredDestinations$!: Observable<Destination[]>;

  constructor(private destinationService: DestinationService, private router: Router) { }

  ngOnInit() {
    this.featuredDestinations$ = this.destinationService.getAllDestinations();
  }

  onSearchChange(event: any) {
    const query = event.detail.value;
    if (query) {
      this.router.navigate(['/search', { query: query }]);
    }
  }

}
