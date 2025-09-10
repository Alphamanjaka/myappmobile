import { IonItem, IonIcon, IonLabel } from '@ionic/angular/standalone';

// src/app/components/notification-item/notification-item.component.ts
import { Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, alertCircleOutline } from 'ionicons/icons';


@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  imports: [IonItem, IonIcon, IonLabel],
  standalone: true,
})
export class NotificationItemComponent {
  @Input() icon: string = 'notifications';
  @Input() message: string = '';

  constructor() {
    addIcons({ checkmarkCircleOutline, alertCircleOutline });
  }
}
