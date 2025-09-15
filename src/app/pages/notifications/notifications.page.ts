import { IonicModule } from '@ionic/angular';
import { Component } from '@angular/core';

import { NotificationItemComponent } from 'src/app/components/notification-item/notification-item.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonicModule, NotificationItemComponent]
})
export class NotificationsPage {
  notifications = [
    { icon: 'checkmark-circle-outline', message: 'Votre réservation est confirmée' },
    { icon: 'alert-circle-outline', message: 'Votre paiement est en attente' }
  ];
  constructor() {
  }
}
